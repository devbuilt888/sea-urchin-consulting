import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HVACFanBackground() {
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

    // Materials for fans
    const fanMaterials = [
      new THREE.MeshPhongMaterial({ color: 0x2563eb, transparent: true, opacity: 0.7 }), // Blue
      new THREE.MeshPhongMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.6 }), // Light blue  
      new THREE.MeshPhongMaterial({ color: 0x1e40af, transparent: true, opacity: 0.8 }), // Dark blue
      new THREE.MeshPhongMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.5 }), // Very light blue
      new THREE.MeshPhongMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.9 }), // Navy blue
    ];

    // Create propeller fan geometry
    const createFanBlade = () => {
      const bladeShape = new THREE.Shape();
      bladeShape.moveTo(0, 0);
      bladeShape.lineTo(0.1, 0);
      bladeShape.quadraticCurveTo(2.5, 0.3, 4, 0.1);
      bladeShape.quadraticCurveTo(4.2, 0, 4, -0.1);
      bladeShape.quadraticCurveTo(2.5, -0.3, 0.1, 0);
      bladeShape.lineTo(0, 0);

      const extrudeSettings = {
        depth: 0.05,
        bevelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelSegments: 2
      };

      return new THREE.ExtrudeGeometry(bladeShape, extrudeSettings);
    };

    // Create fan hub geometry
    const createFanHub = () => {
      return new THREE.CylinderGeometry(0.3, 0.25, 0.2, 16);
    };

    // Fan groups
    const fans: { group: THREE.Group; rotationSpeed: number }[] = [];

    // Create multiple fans
    const fanConfigs = [
      { position: [-8, 4, -10], scale: 1.2, rotationSpeed: 0.08 },
      { position: [6, -2, -8], scale: 0.8, rotationSpeed: -0.12 },
      { position: [-3, -5, -12], scale: 1.0, rotationSpeed: 0.06 },
      { position: [9, 6, -6], scale: 0.9, rotationSpeed: -0.10 },
      { position: [-12, -1, -9], scale: 1.1, rotationSpeed: 0.07 },
      { position: [2, 8, -11], scale: 0.7, rotationSpeed: -0.15 },
      { position: [11, -6, -7], scale: 1.3, rotationSpeed: 0.05 },
      { position: [-6, 2, -14], scale: 0.6, rotationSpeed: -0.18 }
    ];

    fanConfigs.forEach((config, index) => {
      const fanGroup = new THREE.Group();
      
      // Create fan hub
      const hubGeometry = createFanHub();
      const hubMaterial = fanMaterials[index % fanMaterials.length];
      const hub = new THREE.Mesh(hubGeometry, hubMaterial);
      fanGroup.add(hub);

      // Create fan blades (usually 3-5 blades)
      const bladeCount = 4;
      const bladeGeometry = createFanBlade();
      
      for (let i = 0; i < bladeCount; i++) {
        const blade = new THREE.Mesh(bladeGeometry, hubMaterial);
        blade.rotation.z = (i * Math.PI * 2) / bladeCount;
        fanGroup.add(blade);
      }

      // Position and scale fan
      fanGroup.position.set(config.position[0], config.position[1], config.position[2]);
      fanGroup.scale.set(config.scale, config.scale, config.scale);
      
      // Random initial rotation
      fanGroup.rotation.x = Math.random() * Math.PI * 2;
      fanGroup.rotation.y = Math.random() * Math.PI * 2;

      fans.push({ group: fanGroup, rotationSpeed: config.rotationSpeed });
      scene.add(fanGroup);
    });

    // Create airflow particles
    const particleCount = 300;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      particleVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ));
    }

    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x87ceeb,
      size: 0.1,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(10, 10, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x87ceeb, 0.4);
    directionalLight2.position.set(-10, -5, -5);
    scene.add(directionalLight2);

    // Position camera
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 0, 0);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate fans
      fans.forEach((fan) => {
        fan.group.rotation.z += fan.rotationSpeed;
        
        // Add slight wobble for realism
        fan.group.rotation.x += 0.001 * Math.sin(Date.now() * 0.001);
        fan.group.rotation.y += 0.0005 * Math.cos(Date.now() * 0.0008);
      });

      // Animate particles (airflow)
      const positions = particleSystem.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const velocity = particleVelocities[i];
        
        positions[i * 3] += velocity.x;
        positions[i * 3 + 1] += velocity.y;
        positions[i * 3 + 2] += velocity.z;

        // Reset particles that go too far
        if (Math.abs(positions[i * 3]) > 20) {
          positions[i * 3] = (Math.random() - 0.5) * 40;
          velocity.x = (Math.random() - 0.5) * 0.02;
        }
        if (Math.abs(positions[i * 3 + 1]) > 10) {
          positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
          velocity.y = (Math.random() - 0.5) * 0.02;
        }
        if (Math.abs(positions[i * 3 + 2]) > 15) {
          positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
          velocity.z = (Math.random() - 0.5) * 0.02;
        }
      }
      
      particleSystem.geometry.attributes.position.needsUpdate = true;

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

    // Mouse interaction for subtle camera movement
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Subtle camera movement
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