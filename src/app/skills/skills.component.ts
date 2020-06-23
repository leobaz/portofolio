import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );
    camera.position.set( 0, 3, 7 );

    var scene = new THREE.Scene();
    camera.lookAt( scene.position );

    var loader = new THREE.FontLoader();
      loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {   
    var textPositions = [[1, 1, 1],
                         [2, 2, 2]];

    var textMessages = ['Text 1', 'Text 2'];

    var textSizes = [0.1, 0.2];

    var textName = ['text1', 'text2'];

    var textsNumber = textPositions.length;     

    for (var i = 0; i < textsNumber; i++) {
      var textsShapes = font.generateShapes( textMessages[i], textSizes[i] );
      var textsGeometry = new THREE.ShapeBufferGeometry( textsShapes );    
      var textsMaterial = new THREE.MeshBasicMaterial({color: 0xeeeeee});

      var text = new THREE.Mesh(textsGeometry, textsMaterial);
      text.position.set(textPositions[i][0], textPositions[i][1], textPositions[i][2]);
      text.name = textName[i]; 

      scene.add(text);
      }

    });

    var canvas = <HTMLCanvasElement>document.getElementById('skillscanvas');
    var renderer = new THREE.WebGLRenderer({canvas, alpha: true,antialias: true});
    renderer.setSize( 700, 700 );
    document.body.appendChild( renderer.domElement );


    var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.2;

    function animate() {

      requestAnimationFrame( animate );
      
      // for ( let object of objects ) {
      
      //   object.rotation.z += 0.005;
      //   object.rotation.x += 0.002;
      
      // }
      
      controls.update();
      
      renderer.render( scene, camera );
  
  }
    animate();
  }

}