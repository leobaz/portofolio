import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
var alertify = require('alertifyjs');

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    alertify.notify('Scroll inside animations to zoom in/out');
  }

  ngAfterViewInit() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    let canvas = <HTMLCanvasElement>document.getElementById('canvas')
    let renderer = new THREE.WebGLRenderer({canvas, alpha: true});
    renderer.setSize( 400, 400 );
    document.body.appendChild( renderer.domElement );
    
    let geometry = new THREE.BoxGeometry( 1,1,1 );
    let material = [
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/angular.png') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/javascript.png') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/html.png') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/css.png') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/ionic.png') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/typescript.png') } )
    ];
    let cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    cube.scale.x = 3.5;
    cube.scale.y = 3.5;
    cube.scale.z = 3.5;

    camera.position.z = 6;

    let controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = false;
    
    let animate = function () {
      requestAnimationFrame( animate );
    
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      controls.update();
    
      renderer.render( scene, camera );
    };
    
    animate();
  }

}
