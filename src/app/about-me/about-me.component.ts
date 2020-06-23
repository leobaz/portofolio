import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    var canvas = <HTMLCanvasElement>document.getElementById('canvas')
    var renderer = new THREE.WebGLRenderer({canvas, alpha: true});
    renderer.setSize( 300, 300 );
    document.body.appendChild( renderer.domElement );
    
    var geometry = new THREE.BoxGeometry( 1,1,1 );
    var material = [
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/angular.jpg') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/javascript.jpg') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/html.jpg') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/css.jpg') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/ionic.png') } ),
      new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture('assets/images/typescript.jpg') } )
    ];
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    cube.scale.x = 3.5;
    cube.scale.y = 3.5;
    cube.scale.z = 3.5;

    camera.position.z = 5;
    
    var animate = function () {
      requestAnimationFrame( animate );
    
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
    
      renderer.render( scene, camera );
    };
    
    animate();
  }

}
