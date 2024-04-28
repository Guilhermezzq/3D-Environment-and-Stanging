import { Cloud, Environment, Lightformer, OrbitControls, Sky, Sparkles, Stars, useHelper} from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";

import * as THREE from "three";

const Scene = () => {

  const lightRef = useRef();
  // useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [0, 1, 0] },

  });

  const { meshIntensity } = useControls("mesh Intensity", {
    meshIntensity: {
      value: 1,
      min: 0,
      max: 5,
    },
  });

  const { height, radius, scale } = useControls("ground", {
    height: {
      value: 6,
      min: 0,
      max: 20,
    },

    radius: {
      value: 60,
      min: 8,
      max: 100,
    },
    scale: {
      value: 0,
      min: 0,
      max: 100,
    }
  });



  return (
    <>
      <OrbitControls />
      {/* <ambientLight  />
      <directionalLight castShadow ref={lightRef} /> */}

      <mesh position-y={1} castShadow >
        <boxGeometry />
        <meshStandardMaterial color="#C7CAC7" envMapIntensity={meshIntensity}  />
      </mesh>

      {/* <Sparkles 
      count={500} 
      speed={2} 
      opacity={3}
      color="skyblue"
      scale={[10, 10, 10]}
      size={3}
      
      /> */}

     {/* <Stars
      radius={2}
      depth={50} 
      count={5000}
      factor={4} 
      saturation={0} 
      fade speed={1} 
       
       /> */}

       {/* <Cloud 
       opacity={1}
       speed={0.5}
       width={10}
       depth={2}
       segments={20}
       depthTest={false}
       /> */}

       {/* <Sky 
       sunPosition={sunPosition}
       /> */}

       <Environment
       background
       files={"./envMap/1.hdr"} 
       ground={{ height: height, radius: radius,scale: scale }}
      >
        {/* <mesh position-z={-1} scale={5} >
          <planeGeometry  />
          <meshBasicMaterial color="orange" />
        </mesh> */}

        {/* <Lightformer
        position-z={-1}
        scale={5}
        color="orange"
        intensity={5}
        /> */}

      </Environment>



      {/* <mesh receiveShadow position-y={0} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]}  />
        <meshStandardMaterial color="#CC3941"  />
      </mesh> */}
    </>
  );
};

export default Scene;
