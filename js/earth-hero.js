import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { prepareEarth } from "/assets/earth/earth-materials.js";

const ASSET_ROOT = "/assets/earth/";
const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
const saveData = Boolean(navigator.connection?.saveData);
let active = null;
let routeObserver = null;

function isLowMotion() {
  return Boolean(reducedMotion?.matches);
}

function isSmallViewport() {
  return window.matchMedia?.("(max-width: 700px)").matches;
}

function setupHeaderState() {
  const header = document.querySelector(".platform-top");
  if (!header) return () => {};
  let frame = 0;
  const update = () => {
    frame = 0;
    header.classList.toggle("earth-header-scrolled", window.scrollY > 24);
  };
  const onScroll = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
  return () => {
    window.removeEventListener("scroll", onScroll);
    if (frame) window.cancelAnimationFrame(frame);
    header.classList.remove("earth-header-scrolled");
  };
}

function createFallback(stage) {
  stage.classList.add("is-fallback");
  stage.classList.remove("is-ready");
}

function disposeMaterial(material) {
  if (!material) return;
  const materials = Array.isArray(material) ? material : [material];
  materials.forEach(item => {
    Object.values(item).forEach(value => {
      if (value?.isTexture) value.dispose();
    });
    item.dispose?.();
  });
}

function disposeModel(model) {
  model?.traverse?.(object => {
    object.geometry?.dispose?.();
    disposeMaterial(object.material);
  });
}

function destroyEarthHero() {
  if (!active) return;
  active.destroyHeader?.();
  active.resizeObserver?.disconnect?.();
  window.removeEventListener("resize", active.onResize);
  document.removeEventListener("visibilitychange", active.onVisibility);
  active.stageObserver?.disconnect?.();
  if (active.frame) window.cancelAnimationFrame(active.frame);
  disposeModel(active.model);
  active.renderer?.dispose?.();
  active.renderer?.forceContextLoss?.();
  active = null;
  document.body.classList.remove("earth-home-active");
}

function initEarthHero(hero) {
  destroyEarthHero();
  if (!hero) return;

  const stage = hero.querySelector("[data-earth-stage]");
  const canvas = hero.querySelector("[data-earth-canvas]");
  if (!stage || !canvas) return;

  document.body.classList.add("earth-home-active");
  const destroyHeader = setupHeaderState();

  if (saveData) {
    createFallback(stage);
    active = { stage, destroyHeader };
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.AgXToneMapping;
    renderer.toneMappingExposure = 0.18;
    renderer.setClearColor(0x000000, 1);
  } catch (error) {
    console.warn("La Tierra 3D no está disponible; se usará la vista previa.", error);
    createFallback(stage);
    active = { stage, destroyHeader };
    return;
  }

  const scene = new THREE.Scene();
  const fillLight = new THREE.HemisphereLight(0x9ecbff, 0x020812, 0.04);
  scene.add(fillLight);
  let camera = null;
  let earth = null;
  let model = null;
  let frame = 0;
  let elapsed = 0;
  let last = performance.now();
  let isVisible = true;

  const runtime = {
    stage,
    renderer,
    model,
    frame,
    onResize: () => resize(),
    onVisibility: () => {
      if (document.hidden) {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        return;
      }
      last = performance.now();
      requestFrame();
    },
    destroyHeader,
    resizeObserver: null,
    stageObserver: null
  };
  active = runtime;

  function resize() {
    if (!camera) return;
    const width = Math.max(1, stage.clientWidth || window.innerWidth);
    const height = Math.max(1, stage.clientHeight || window.innerHeight);
    const dprLimit = isSmallViewport() ? 1.2 : 1.5;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprLimit));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.fov = width / height < 1
      ? 46
      : THREE.MathUtils.radToDeg(2 * Math.atan(36 / (2 * 50) / (width / height)));
    camera.updateProjectionMatrix();
  }

  function requestFrame() {
    if (!frame && !document.hidden && isVisible && model) frame = window.requestAnimationFrame(renderFrame);
  }

  function renderFrame(now) {
    frame = 0;
    if (!active || document.hidden || !isVisible || !model) return;
    const delta = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (!isLowMotion()) elapsed += delta;
    earth?.update(elapsed);
    renderer.render(scene, camera);
    requestFrame();
  }

  window.addEventListener("resize", runtime.onResize, { passive: true });
  document.addEventListener("visibilitychange", runtime.onVisibility, { passive: true });
  if (window.ResizeObserver) {
    runtime.resizeObserver = new ResizeObserver(resize);
    runtime.resizeObserver.observe(stage);
  }
  if (window.IntersectionObserver) {
    runtime.stageObserver = new IntersectionObserver(entries => {
      isVisible = entries[0]?.isIntersecting !== false;
      if (isVisible) {
        last = performance.now();
        requestFrame();
      }
    }, { threshold: 0.01 });
    runtime.stageObserver.observe(stage);
  }

  Promise.all([
    new GLTFLoader().loadAsync(`${ASSET_ROOT}tierra-ipuc.glb`),
    fetch(`${ASSET_ROOT}scene-config.json`, { cache: "force-cache" }).then(response => {
      if (!response.ok) throw new Error(`No se pudo cargar scene-config.json (${response.status})`);
      return response.json();
    })
  ]).then(([gltf, config]) => {
    if (!active || active.stage !== stage) return;
    model = gltf.scene;
    earth = prepareEarth(gltf, config);
    const surfaceMaterial = model.getObjectByName("Earth_Surface")?.material;
    if (surfaceMaterial?.emissive) {
      surfaceMaterial.emissive.setRGB(0, 0, 0);
      surfaceMaterial.emissiveIntensity = 0;
    }
    if (surfaceMaterial?.color) surfaceMaterial.color.multiplyScalar(0.28);
    model.traverse(object => {
      const material = object.material;
      if (object.name === "Clouds_Independent" || material?.name?.startsWith("Clouds_")) {
        object.visible = true;
        material.transparent = true;
        material.opacity = Math.min(material.opacity ?? 1, 0.16);
        material.depthWrite = false;
      }
      if (material?.name?.startsWith("Colombia_")) {
        const isGlow = material.name.startsWith("Colombia_Light_");
        object.renderOrder = 3;
        object.scale.multiplyScalar(1.002);
        object.material = new THREE.MeshBasicMaterial({
          color: isGlow ? 0xffb52e : 0xffa51b,
          transparent: isGlow,
          opacity: isGlow ? 0.18 : 1,
          depthTest: true,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: isGlow ? THREE.AdditiveBlending : THREE.NormalBlending,
          toneMapped: false,
          polygonOffset: true,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -1
        });
      }
    });
    model.position.y = -0.55;
    const [sunX, sunY, sunZ] = config.sunDirectionBlender;
    const sunLight = new THREE.DirectionalLight(0xfff4dc, 0.44);
    sunLight.position.set(sunX, sunZ, -sunY).normalize().multiplyScalar(4);
    sunLight.target.position.set(0, 0, 0);
    scene.add(sunLight, sunLight.target);
    camera = gltf.cameras?.[0] || new THREE.PerspectiveCamera(46, 1, 0.01, 100);
    if (!gltf.cameras?.length) camera.position.set(0, 0, 3.2);
    scene.add(model);
    runtime.model = model;
    resize();
    earth.update(0);
    renderer.render(scene, camera);
    stage.classList.add("is-ready");
    window.setTimeout(() => {
      if (stage.isConnected) stage.querySelector("[data-earth-preview]")?.setAttribute("hidden", "hidden");
    }, 850);
    last = performance.now();
    requestFrame();
  }).catch(error => {
    console.warn("No se pudo cargar la Tierra 3D; se muestra la vista previa.", error);
    if (active?.stage === stage) {
      createFallback(stage);
      disposeModel(model);
      renderer.dispose();
    }
  });
}

function syncHero() {
  const hero = document.querySelector("[data-earth-hero]");
  if (hero) {
    if (active?.stage === hero.querySelector("[data-earth-stage]")) return;
    initEarthHero(hero);
  } else {
    destroyEarthHero();
  }
}

function boot() {
  const routeView = document.getElementById("routeView");
  if (!routeView) {
    // app.js is deferred and can create the shell just after this module.
    // Wait for that shell instead of silently missing the first home render.
    const shellObserver = new MutationObserver(() => {
      const readyRouteView = document.getElementById("routeView");
      if (!readyRouteView) return;
      shellObserver.disconnect();
      boot();
    });
    shellObserver.observe(document.documentElement, { childList: true, subtree: true });
    return;
  }
  routeObserver = new MutationObserver(syncHero);
  routeObserver.observe(routeView, { childList: true, subtree: true });
  reducedMotion?.addEventListener?.("change", syncHero);
  syncHero();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
else boot();
