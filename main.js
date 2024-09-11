//https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
//Here is the three.js documentation
import * as THREE from 'three';
import { CubeTextureLoader } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//PerspecitveCamera(FOV, aspect ratio *this is usually width/height*, near, far)
//Near far is the rendering area allowed

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//Render size can be reduced /2 to improve performance, 3rd field could be set to false to reduce resolution

document.body.appendChild(renderer.domElement);
//This will add the renderer to the HTML file


const box = new THREE.BoxGeometry(1, 1, 1);
//Given vertices, returns a box
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

const cube = new THREE.Mesh(box, material);
//Mesh takes a geometry and applies a material to it

scene.add(cube);
//Add object to (0,0,0)

camera.position.z = 5;
//This will set the camera to (0,0,5)

var ySpeed = 0.5;
var xSpeed = 0.5;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event)
{   
    var keyCode = event.which;
    if (keyCode == 87) {
        cube.position.y += ySpeed;
    } else if (keyCode == 83) {
        cube.position.y -= ySpeed;
    } else if (keyCode == 65) {
        cube.position.x -= xSpeed;
    } else if (keyCode == 68) {
        cube.position.x += xSpeed;
    } else if (keyCode == 32) {
        cube.position.set(0, 0, 0);
        event.preventDefault();
    }
}

function animate() {renderer.render(scene, camera);}
renderer.setAnimationLoop(animate);
//Animation loop will allow us to finally see what we've made
//WebGLRender pauses when tab is changed, this saves battery and resources