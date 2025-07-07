import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PipesThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Materials - Different shades of blue and green
    const blueShades = [
      0x1e40af, // Deep blue
      0x2563eb, // Blue
      0x3b82f6, // Light blue
      0x60a5fa, // Lighter blue
      0x1e3a8a, // Navy blue
      0x1d4ed8, // Royal blue
    ];

    const greenShades = [
      0x059669, // Emerald green
      0x10b981, // Green
      0x34d399, // Light green
      0x047857, // Dark green
      0x065f46, // Forest green
      0x0d9488, // Teal green
    ];

    const allColors = [...blueShades, ...greenShades];

    // Create materials with different colors
    const pipeMaterials = allColors.map(color => new THREE.MeshPhongMaterial({ 
      color: color,
      shininess: 100,
      transparent: true,
      opacity: 0.7
    }));

    const jointMaterials = allColors.map(color => new THREE.MeshPhongMaterial({ 
      color: color,
      shininess: 120,
      transparent: true,
      opacity: 0.8
    }));

    // Geometries - Different pipe sizes
    const pipeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 4, 16);
    const widePipeGeometry = new THREE.CylinderGeometry(0.2, 0.2, 5, 16);
    const extraWidePipeGeometry = new THREE.CylinderGeometry(0.3, 0.3, 6, 16);
    const shortWidePipeGeometry = new THREE.CylinderGeometry(0.25, 0.25, 3, 16);
    const longPipeGeometry = new THREE.CylinderGeometry(0.15, 0.15, 7, 16);
    
    const jointGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const wideJointGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const extraWideJointGeometry = new THREE.SphereGeometry(0.35, 16, 16);
    
    // Hex nuts and lock nuts (6-sided cylinders)
    const hexNutGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 6);
    const wideHexNutGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.15, 6);
    const extraWideHexNutGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 6);
    
    // Lock nuts (thicker hex nuts)
    const lockNutGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.2, 6);
    const wideLockNutGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 6);

    // Create pipes group
    const pipesGroup = new THREE.Group();

    // Generate pipes in different directions
    const pipes: THREE.Mesh[] = [];
    const joints: THREE.Mesh[] = [];
    const hexNuts: THREE.Mesh[] = [];

    // Array of pipe geometries for variety
    const pipeGeometries = [
      pipeGeometry,
      widePipeGeometry,
      extraWidePipeGeometry,
      shortWidePipeGeometry,
      longPipeGeometry
    ];

    // Create straight pipes with different sizes
    for (let i = 0; i < 30; i++) {
      const randomMaterial = pipeMaterials[Math.floor(Math.random() * pipeMaterials.length)];
      const randomGeometry = pipeGeometries[Math.floor(Math.random() * pipeGeometries.length)];
      const pipe = new THREE.Mesh(randomGeometry, randomMaterial);
      
      // Random position
      pipe.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      // Random rotation (different directions)
      pipe.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale
      const scale = 0.5 + Math.random() * 0.8;
      pipe.scale.set(scale, scale, scale);

      pipes.push(pipe);
      pipesGroup.add(pipe);
    }

    // Array of joint geometries for variety
    const jointGeometries = [
      jointGeometry,
      wideJointGeometry,
      extraWideJointGeometry
    ];

    // Create pipe joints/connections with different sizes
    for (let i = 0; i < 18; i++) {
      const randomMaterial = jointMaterials[Math.floor(Math.random() * jointMaterials.length)];
      const randomGeometry = jointGeometries[Math.floor(Math.random() * jointGeometries.length)];
      const joint = new THREE.Mesh(randomGeometry, randomMaterial);
      
      joint.position.set(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18
      );

      const scale = 0.7 + Math.random() * 0.6;
      joint.scale.set(scale, scale, scale);

      joints.push(joint);
      pipesGroup.add(joint);
    }

    // Array of hex nut geometries for variety
    const hexNutGeometries = [
      hexNutGeometry,
      wideHexNutGeometry,
      extraWideHexNutGeometry,
      lockNutGeometry,
      wideLockNutGeometry
    ];

    // Create hex nuts with different sizes
    for (let i = 0; i < 15; i++) {
      const randomMaterial = jointMaterials[Math.floor(Math.random() * jointMaterials.length)];
      const randomGeometry = hexNutGeometries[Math.floor(Math.random() * hexNutGeometries.length)];
      const hexNut = new THREE.Mesh(randomGeometry, randomMaterial);
      
      hexNut.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      );

      hexNut.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.6 + Math.random() * 0.7;
      hexNut.scale.set(scale, scale, scale);

      hexNuts.push(hexNut);
      pipesGroup.add(hexNut);
    }

    scene.add(pipesGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x3182ce, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    // Position camera
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Slow rotation of the entire pipe system
      pipesGroup.rotation.y += 0.002;
      pipesGroup.rotation.x += 0.001;

      // Individual pipe movements
      pipes.forEach((pipe, index) => {
        pipe.rotation.z += 0.005 * Math.sin(Date.now() * 0.001 + index);
        pipe.position.y += 0.01 * Math.sin(Date.now() * 0.002 + index);
      });

      // Joint movements
      joints.forEach((joint, index) => {
        joint.rotation.x += 0.01 * Math.sin(Date.now() * 0.001 + index);
        joint.rotation.y += 0.008 * Math.cos(Date.now() * 0.001 + index);
      });

      // Hex nut movements
      hexNuts.forEach((hexNut, index) => {
        hexNut.rotation.z += 0.006 * Math.sin(Date.now() * 0.0015 + index);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Subtle camera movement based on mouse
      camera.position.x = mouse.x * 0.5;
      camera.position.y = mouse.y * 0.5;
      camera.lookAt(0, 0, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'transparent',
        overflow: 'hidden'
      }}
    />
  );
} 