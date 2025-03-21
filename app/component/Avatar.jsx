import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Avatar Scene Component
function AvatarScene({ onInteraction }) {
  const { scene, animations } = useGLTF('/avatar.glb');
  const [mixer] = useState(() => new THREE.AnimationMixer(scene));
  const modelRef = useRef();
  const runActionRef = useRef();
  const clickActionRef = useRef();
  const audioRef = useRef(new Audio('/characterbeat.mp3'));
  const [isClickAnimating, setIsClickAnimating] = useState(false);

  // Set up animations on load
  useEffect(() => {
    if (animations.length >= 2) {
      const runAnimation = animations[2];
      runActionRef.current = mixer.clipAction(runAnimation);
      runActionRef.current.play();
      runActionRef.current.loop = THREE.LoopRepeat;

      const clickAnimation = animations[1];
      clickActionRef.current = mixer.clipAction(clickAnimation);
      clickActionRef.current.loop = THREE.LoopOnce;
      clickActionRef.current.clampWhenFinished = true;
    }

    return () => mixer.stopAllAction();
  }, [animations, mixer]);

  // Handle animation updates
  useFrame((state, delta) => {
    mixer.update(delta);
  });

  // Handle click
  const handleClick = () => {
    if (isClickAnimating || !clickActionRef.current || !runActionRef.current) return;

    setIsClickAnimating(true);
    onInteraction();

    // Animation logic
    runActionRef.current.fadeOut(0.5);
    clickActionRef.current.reset();
    clickActionRef.current.fadeIn(0.5);
    clickActionRef.current.play();
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    const onFinished = () => {
      audioRef.current.pause();
      clickActionRef.current.fadeOut(0.5);
      runActionRef.current.reset();
      runActionRef.current.fadeIn(0.5);
      runActionRef.current.play();
      setIsClickAnimating(false);
      mixer.removeEventListener('finished', onFinished);
    };

    mixer.addEventListener('finished', onFinished);
  };

  return (
    <mesh ref={modelRef} onClick={handleClick}>
      <primitive 
        object={scene} 
        position={[0, -3.1, 0]}
        scale={[3.5, 3.5, 3.5]}
      />
    </mesh>
  );
}

// Main Avatar Component
const Avatar = () => {
  const [loading, setLoading] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  // Handle model loading
  useEffect(() => {
    const loadModel = async () => {
      try {
        await useGLTF.preload('/avatar.glb');
        setLoading(false);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  // Handle interaction sequence
  const handleInteraction = () => {
    setClickCount(prev => prev + 1);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-3xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative md:w-[60vw] w-[95vw] h-[90vh]">
      {/* 3D Canvas */}
      <Canvas
        className="h-[80vh] w-full "
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={1.7} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.9} 
          castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={1.5} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <AvatarScene onInteraction={handleInteraction} />
      </Canvas>
    </div>
  );
};

export default Avatar;

// Preload the model
useGLTF.preload('/avatar.glb');
