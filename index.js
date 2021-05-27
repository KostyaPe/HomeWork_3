'use strict';

const canvas3D = document.querySelector('#myCanvas3D');
canvas3D.width = window.innerWidth;
canvas3D.height = window.innerHeight;
const renderer = new THREE.WebGLRenderer({canvas: canvas3D});
console.log(renderer);

const fov = 75;
const aspect = 1.5;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();
{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshPhongMaterial({color: 0x841bb5});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
renderer.render(scene, camera);


function render(time) {
    time *= 0.001;
   
    cube.rotation.x = time;
    cube.rotation.y = time;
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
}

requestAnimationFrame(render);


const canvas2D = document.querySelector('#myCanvas2D');
canvas2D.width = window.innerWidth;
canvas2D.height = window.innerHeight;
const ctx = canvas2D.getContext('2d');

let x = canvas2D.width / 2;
let y = 100;
let radius = 30;
const circles = [];

function printCircle(x, y, radius, startAngle = 0, endAngle = 2 * Math.PI) {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.stroke();
}

for (let i = 0; i < 3; i++) {

  printCircle(x, y, radius);
  circles.push([x, y, radius]);

  y += 3 * radius;
  radius *= 2;
}

for (let i = 0; i < circles.length; i++) {
  switch(i) {
    case 0:
      printCircle(x - circles[i][2] / 2, circles[i][1] - circles[i][2] / 2, 5);
      printCircle(x + circles[i][2] / 2, circles[i][1] - circles[i][2] / 2, 5);
      printCircle(x, circles[i][1] + circles[i][2] / 2, 5, 0, Math.PI);
      break;
    case 1:
      printCircle(x, circles[i][1] - circles[i][2] / 2, 5);
      printCircle(x, circles[i][1], 5);
      printCircle(x, circles[i][1] + circles[i][2] / 2, 5);
      break;
  }
}
