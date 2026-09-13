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
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.AgXToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setClearColor(0x020712, 0);
  } catch (error) {
    console.warn("La Tierra 3D no está disponible; se usará la vista previa.", error);
    createFallback(stage);
    active = { stage, destroyHeader };
    return;
  }

  const scene = new THREE.Scene();
  const fillLight = new THREE.HemisphereLight(0x9ecbff, 0x020812, 0.18);
  scene.add(fillLight);
  let camera = null;
  let earth = null;
  let model = null;
  let frame = 0;
  let elapsed = 0;
  let last = performance.now();
  let isVisible = true;
  let viewportWidth = 0;
  let viewportHeight = 0;

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
    onMotionChange: () => {
      elapsed = 0;
      last = performance.now();
      requestFrame();
    },
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
    viewportWidth = width;
    viewportHeight = height;
    updateFraming();
  }

  function updateFraming() {
    const width = viewportWidth || Math.max(1, stage.clientWidth || window.innerWidth);
    const height = viewportHeight || Math.max(1, stage.clientHeight || window.innerHeight);
    const initialRadius = width * (width < 700 ? 1.15 : .60);
    const radius = initialRadius;
    const initialCenterY = height * (width < 700 ? .36 : .28) + initialRadius;
    const centerY = initialCenterY;
    const distance = camera.position.length();
    camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(height / (2 * radius * Math.sqrt(distance * distance - 1))));
    camera.updateProjectionMatrix();
    camera.projectionMatrix.elements[9] = 2 * centerY / height - 1;
    camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    const svg = hero.querySelector(".earth-hero-curve");
    const path = hero.querySelector("#earthHeroCurvePath");
    const text = hero.querySelector(".earth-hero-curve-text");
    const textPath = text?.querySelector("textPath");
    const arcRadius = radius + (width < 700 ? 12 : 20);
    const halfAngle = width < 700 ? .43 : .74;
    const x = arcRadius * Math.sin(halfAngle);
    const titleLift = height * (width < 700 ? .1 : .08);
    const y = centerY - arcRadius * Math.cos(halfAngle) - titleLift;
    svg?.setAttribute("viewBox", `0 0 ${width} ${height}`);
    // A controlled quadratic keeps the title clearly above the horizon at every viewport size.
    // Match the title arc to the visible terrestrial horizon instead of using
    // a taller ornamental arch that separates the words from the planet.
    const archFactor = 1.16;
    path?.setAttribute("d", `M ${width/2-x} ${y} Q ${width/2} ${centerY - arcRadius * archFactor - titleLift} ${width/2+x} ${y}`);
    text?.style.setProperty("font-size", `${width * (width < 700 ? .036 : .033)}px`);
    textPath?.setAttribute("textLength", String(arcRadius * halfAngle * 1.78));
    if (model && isLowMotion()) renderer.render(scene, camera);
  }

  function requestFrame() {
    if (!frame && !document.hidden && isVisible && model && active === runtime) {
      frame = window.requestAnimationFrame(renderFrame);
      runtime.frame = frame;
    }
  }

  function renderFrame(now) {
    frame = 0;
    runtime.frame = 0;
    if (active !== runtime || document.hidden || !isVisible || !model) return;
    const delta = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (!isLowMotion()) elapsed += delta;
    earth?.update(elapsed);
    renderer.render(scene, camera);
    if (!isLowMotion()) requestFrame();
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
    if (!active || active.stage !== stage) {
      disposeModel(gltf.scene);
      return;
    }
    model = gltf.scene;
    earth = prepareEarth(gltf, config);
    // The exported asset faces Africa in the narrow mobile crop. Apply a
    // fixed root yaw so the requested Colombia-first composition is preserved
    // without changing the GLB or the physical rotation of the planet.
    model.rotation.y = isSmallViewport() ? -1.3 : -0.62;
    const surfaceMaterial = model.getObjectByName("Earth_Surface")?.material;
    // Normalize the exported Blender sun (683 lux) for this web scene.
    // Preserve the original satellite textures and night-light material.
    if (surfaceMaterial) surfaceMaterial.roughness = .85;
    model.traverse(object => {
      if (object.isLight) object.intensity = 0;
      const material = object.material;
      if (object.name === "Clouds_Independent" || material?.name?.startsWith("Clouds_")) {
        object.visible = true;
        material.transparent = true;
        material.opacity = .65;
        material.depthWrite = false;
      }
      if (material?.name?.startsWith("Colombia_")) {
        object.renderOrder = 3;
        material.depthWrite = false;
      }
    });
    const [sunX, sunY, sunZ] = config.sunDirectionBlender;
    const sunLight = new THREE.DirectionalLight(0xfff4dc, 2.5);
    sunLight.position.set(sunX, sunZ, -sunY).normalize().multiplyScalar(4);
    sunLight.target.position.set(0, 0, 0);
    scene.add(sunLight, sunLight.target);
    camera = new THREE.PerspectiveCamera(46, 1, 0.01, 100);
    if (!gltf.cameras?.length) camera.position.set(0, 0, 3.2);
    // Keep the cinematic day-side viewing direction and place Colombia on the initial face.
    camera.position.set(.8, -2.5, 2.8);
    camera.lookAt(0, 0, 0);
    scene.add(model);
    runtime.model = model;
    resize();
    earth.update(0);
    renderer.render(scene, camera);
    stage.classList.add("is-ready");
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
  reducedMotion?.addEventListener?.("change", () => {
    active?.onMotionChange?.();
  });
  syncHero();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
else boot();
