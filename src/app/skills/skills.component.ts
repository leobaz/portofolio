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
    var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.02, 20 );
    camera.position.set( 0, 4, 6 );

    var scene = new THREE.Scene();
    camera.lookAt( scene.position );

    var loader = new THREE.FontLoader();
      loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {   
    var textPositions = [[-1, 2, 3],
                         [-3, 2, 2],
                         [-4, 3, 1],
                         [-1, 1, 3],
                         [1, 3, 1],
                         [-2, 2, -3],
                         [-5, 1, 1],
                         [-4, -1, -1],
                         [2, 1, -1],
                         [0, 3, -1]];

    var textMessages = ['Angular', 'Typescript', 'Javascript', 'HTML', 'CSS', 'Node.js', 'SCSS', 'Ionic', 'MongoDb', 'Express.js'];

    var textSizes = [0.3, 0.2, 0.3, 0.2, 0.2, 0.3, 0.2, 0.3, 0.3, 0.3];

    var textName = ['angular', 'typescript', 'javascript', 'html', 'css', 'nodejs', 'scss', 'ionic', 'mongodb', 'expressjs'];

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
    renderer.setSize( 500, 500 );
    document.body.appendChild( renderer.domElement );


    var controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.rotateSpeed = 0.9;
    controls.autoRotate = false;

    function animate() {

      requestAnimationFrame( animate );
      
      controls.update();
      
      renderer.render( scene, camera );
  
  }
    animate();
  }

}
