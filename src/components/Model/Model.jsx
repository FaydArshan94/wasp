import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, useAnimations, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const ModelMesh = () => {
  const { scene, animations } = useGLTF("/scene (1).glb");
  const groupRef = useRef(null);
  const modelRef = useRef(null);

  THREE.ColorManagement.enabled = true;

  // Setup animations on the scene
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    // Debug: Log available animations

    if (actions["FlyingCycle"]) {
      console.log("Playing FlyingCycle animation");
      actions["FlyingCycle"].play();
    } else if (Object.keys(actions).length > 0) {
      // Play the first available animation if FlyingCycle doesn't exist
      const firstAnimation = Object.keys(actions)[0];
      actions[firstAnimation].play();
    } else {
      console.warn("No animations found in the model");
    }
  }, [actions]);

  // Preserve and enhance existing materials from GLB

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const mat = child.material;

        // Fix transparency issues (wings)
        if (mat.transparent) {
          mat.depthWrite = false;
          mat.side = THREE.DoubleSide;
        }

        if (child.name.toLowerCase().includes("wing")) {
          mat.opacity = 0.75;
          mat.roughness = 0.1;
          mat.metalness = 0;
        }

        // General PBR tuning
        mat.envMapIntensity = 1.3;
        mat.needsUpdate = true;

        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useGSAP(() => {
    if (!groupRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".model-section",
        start: "top top",
        end: "+=5000",
        scrub: 1,
        pin: true,
      },
    });

    // INITIAL STATE (VERY IMPORTANT)
    gsap.set(groupRef.current.position, { x: -1.5, y: -3, z: 0 });
    gsap.set(groupRef.current.rotation, { x: 0, y: 0, z: 0 });

    /* ---------------- PHASE 1 ---------------- */
    // Move to -X + small rotation
    tl.to(groupRef.current.position, {
      x: -3,
      duration: 1,
      ease: "none",
    });

    tl.to(
      groupRef.current.rotation,
      {
        y: Math.PI * 0.3,
        duration: 1,
        ease: "none",
      },
      "<"
    );

    /* ---------------- PHASE 2 ---------------- */
    // Move to +X + stronger rotation
    tl.to(groupRef.current.position, {
      x: 2,
      duration: 1,
      ease: "none",
    });

    tl.to(
      groupRef.current.rotation,
      {
        y: Math.PI * 0.9,
        duration: 1,
        ease: "none",
      },
      "<"
    );

    /* ---------------- PHASE 3 ---------------- */
    // Return to -X with minimal rotation
    tl.to(groupRef.current.position, {
      x: -2.5,
      duration: 1,
      ease: "none",
    });

    tl.to(
      groupRef.current.rotation,
      {
        y: Math.PI * 0.7,
        duration: 1,
        ease: "none",
      },
      "<"
    );

    /* ---------------- PHASE 4 ---------------- */
    // Go downward WITH PAGE (never disappears)
    tl.to(groupRef.current.position, {
      y: -5,
      duration: 1.5,
      ease: "none",
    });
  }, []);

  return (
    <group ref={groupRef} position={[-1.5, -6, 0]}>
      <primitive
        ref={modelRef}
        object={scene}
        scale={3}
        rotation={[0, -190, 0]}
      />
    </group>
  );
};

export default function Model() {
  return (
    <section className="model-section h-screen w-full">
      <Canvas
        camera={{ position: [0, -1.5, 8], fov: 50 }}
        gl={{
          physicallyCorrectLights: true,
          toneMappingExposure: 1.1,
        }}
      >
        <ambientLight intensity={0.4} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
        />

        <Environment preset="sunset" intensity={0.6} />

        <Suspense fallback={null}>
          <Center>
            <ModelMesh />
          </Center>
        </Suspense>
      </Canvas>
    </section>
  );
}
