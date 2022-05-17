import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import test from '/test.txt'

import gsap from 'gsap';
console.log("test:",test);
// console.log(drone);

// init
// init()

const loader = new GLTFLoader()

export function init(){
    const scene = new THREE.Scene();

    const light = new THREE.AmbientLight(0xffffff, 2)
    scene.add(light)

loader.load("/models/drone/scene.gltf", (gltf)=>{
let model = gltf.scene;
model.scale.set(.45, .45, .45);

//animation starts here
gsap.to(camera.position, {
    z: 1,
    duration: 1,
    ease: "back.out(1.7)"
})

gsap.to(camera.rotation, {
    z: 0,
    duration: 1
})

gsap.to(model.rotation, {
    x:1, 
    duration: 1, 
    delay:1
})
gsap.to(model.rotation, {
    y:Math.PI * 1.75, 
    duration: 1, 
    delay:1
})

gsap.to(model.scale, {
    delay: 1, 
    duration: 1,
    x: .25,
    y: .25,
    z: .25

})

scene.add(model)
})


const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 5;
camera.rotation.z = 1;



const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {



	renderer.render( scene, camera );

}

}