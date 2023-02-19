import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

//Import planets textures
import earthTexture from '../img/earth.jpg'
import jupiterTexture from '../img/jupiter.jpg'
import marsTexture from '../img/mars.jpg'
import mercuryTexture from '../img/mercury.jpg'
import neptuneTexture from '../img/neptune.jpg'
import plutoTexture from '../img/pluto.jpg'
import saturnTexture from '../img/saturn.jpg'
import saturRingTexture from '../img/saturn ring.png'
import starsTexture from '../img/stars.jpg'
import uranusTexture from '../img/uranus.jpg'
import uranusRingTexture from '../img/uranus ring.png'
import venusTexture from '../img/venus.jpg'
import sunTexture from '../img/sun.jpg'

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sets the color of the background
renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);

// Camera positioning
camera.position.set(-90, 140, 140);
orbit.update();

//light
const ambientLight = new THREE.AmbientLight(0x33333)
scene.add(ambientLight)

const cubeTextureLoader = new THREE.CubeTextureLoader()
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
])


const textureLoader = new THREE.TextureLoader()

//sun
const sunGeo = new THREE.SphereGeometry(20, 30, 30)
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
})
const sun = new THREE.Mesh(sunGeo,sunMat)
scene.add(sun)




function animate() {
    sun.rotateY(0.004)
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});