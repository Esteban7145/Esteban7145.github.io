import * as THREE from 'three';

// GLB axis conversion: Blender (x,y,z) -> Three.js (x,z,-y).
export function prepareEarth(gltf, config) {
  const model = gltf.scene;
  const [x,y,z] = config.sunDirectionBlender;
  const sun = new THREE.Vector3(x,z,-y).normalize();
  const surface = model.getObjectByName('Earth_Surface');
  surface.material.onBeforeCompile = shader => {
    shader.uniforms.earthSun = {value:sun};
    shader.fragmentShader = 'uniform vec3 earthSun;\n' + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>',
      '#include <emissivemap_fragment>\n vec3 worldN = inverseTransformDirection(normal, viewMatrix);\n totalEmissiveRadiance *= 1.0-smoothstep(-0.2,0.12,dot(worldN,earthSun));');
  };
  const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.008,96,64), new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,side:THREE.FrontSide,blending:THREE.AdditiveBlending,
    uniforms:{sunDirection:{value:sun}},
    vertexShader:`varying vec3 worldNormal; varying vec3 worldPosition;
      void main(){vec4 w=modelMatrix*vec4(position,1.);worldPosition=w.xyz;
      worldNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*w;}`,
    fragmentShader:`uniform vec3 sunDirection; varying vec3 worldNormal; varying vec3 worldPosition;
      void main(){vec3 n=normalize(worldNormal);vec3 v=normalize(cameraPosition-worldPosition);
      float rim=pow(1.-max(dot(n,v),0.),4.);float daylight=smoothstep(-.3,.5,dot(n,sunDirection));
      gl_FragColor=vec4(vec3(.07,.31,1.)*.7,rim*mix(.12,.8,daylight));}`
  }));
  atmosphere.name='Atmosphere_Web'; model.add(atmosphere);
  const rotation=model.getObjectByName('Earth_Rotation_120s');
  const clouds=model.getObjectByName('Clouds_Independent');
  const initialRotation = new THREE.Quaternion();
  const initialClouds = new THREE.Quaternion();
  const rotationQuaternion = new THREE.Quaternion();
  const cloudsQuaternion = new THREE.Quaternion();
  const axis = new THREE.Vector3(0,1,0); // geographic north after glTF Y-up conversion
  initialRotation.copy(rotation.quaternion);
  initialClouds.copy(clouds.quaternion);
  return {model,update(seconds){
    rotationQuaternion.setFromAxisAngle(axis,seconds*Math.PI*2/120);
    cloudsQuaternion.setFromAxisAngle(axis,seconds*Math.PI*2/120*.025);
    rotation.quaternion.copy(initialRotation).multiply(rotationQuaternion);
    clouds.quaternion.copy(initialClouds).multiply(cloudsQuaternion);
  }};
}
