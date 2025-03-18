import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

// Popup Message Component (Outside of Canvas)
const PopupMessage = ({ message, onClose, position }) => {
  // Add useEffect to auto-close popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed ${position} p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-xl z-50`}
      >
        <p className="text-lg font-semibold">{message}</p>
        <button 
          onClick={onClose}
          className="absolute top-1 right-2 text-white hover:text-gray-200"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
};


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
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Handle model loading
  useEffect(() => {
    const loadModel = async () => {
      try {
        await useGLTF.preload('/avatar.glb');
        setLoading(false);
        // Show first popup after loading
        setTimeout(() => setShowPopup1(true), 2000);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  // Handle interaction sequence
  const handleInteraction = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 1) {
        setShowPopup1(false);
        setShowPopup2(true);
      } else if (newCount === 2) {
        setShowPopup2(false);
        setShowPopup3(true);
      } else if (newCount === 3) {
        setShowPopup3(false);
      }
      return newCount;
    });
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
      {/* Popup Messages */}
      {showPopup1 && (
        <PopupMessage
          message="👋 Hey there! Click on me, I'll show you something cool!"
          onClose={() => setShowPopup1(false)}
          position="top-4 right-4"
        />
      )}
      {showPopup2 && (
        <PopupMessage
          message="🎉 Amazing! Now watch this next move..."
          onClose={() => setShowPopup2(false)}
          position="top-4 left-4"
        />
      )}
      {showPopup3 && (
        <PopupMessage
          message="🌟 You're getting the hang of it! One more time!"
          onClose={() => setShowPopup3(false)}
          position="bottom-4 right-4"
        />
      )}

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
