import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'

const Model = ({ onAnimationFinish, onMidwayFinish, start }) => {
    const meshModel = useRef();
    //for development: 
    // const gltf = useLoader(GLTFLoader, "./portfoliodev/scene.gltf");
    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    const { viewport } = useThree();
    const middlePosition = [viewport.width / 3, 0, 2];
    const endPosition = [-viewport.width, -viewport.height*(.5/3), 2];
    const curPosition = {
      position: [-viewport.width, -viewport.height*(.5/3), 2]
    }

    const curRotation = {
      rotation: [0, Math.PI / 2, 0]
    }

    let halfway = false;

    /*
    https://stackoverflow.com/questions/63936267/how-to-extract-and-play-animation-in-react-three-fiber
    */
    let mixer;
    if (gltf.animations.length) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach(clip => {
        const action = mixer.clipAction(clip)
        action.play();
      });
    }

    useFrame((state, delta) => {
      mixer?.update(delta)
    })

    gltf.scene.traverse(child => {
      if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
          child.material.side = THREE.FrontSide
      }
    })

    useFrame(() => {
      if (halfway && -viewport.width + 1 > meshModel.current.position.x) {
        onAnimationFinish(true);
      }
      else if (halfway) {
        onMidwayFinish();
        curPosition.position[0] += (endPosition[0] - curPosition.position[0]) * 0.01;
        meshModel.current.position.set(...curPosition.position);
      }
      else if (meshModel.current.position.y > -0.01) {
        halfway = true;
      }
      else if (!halfway && start && meshModel.current) {
        curPosition.position[0] += (middlePosition[0] - curPosition.position[0]) * 0.02;
        curPosition.position[1] += (middlePosition[1] - curPosition.position[1]) * 0.02;
        curPosition.position[2] += (middlePosition[2] - curPosition.position[2]) * 0.02;
        meshModel.current.position.set(...curPosition.position); 
        curRotation.rotation[1] += (-Math.PI/2 - curRotation.rotation[1])*.01;
        meshModel.current.rotation.set(...curRotation.rotation);
      }
    });

    return (
        <mesh ref={meshModel} position={curPosition.position} rotation={curRotation.rotation}>
          <primitive object={gltf.scene} scale={1.5} />
        </mesh>
      );
}

export default Model;