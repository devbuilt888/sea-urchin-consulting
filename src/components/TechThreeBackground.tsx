import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechThreeBackground() {
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

    // Modern tech color palette - neon blues, purples, cyans
    const techColors = [
      0x00ffff, // Cyan
      0x0080ff, // Electric blue
      0x8000ff, // Purple
      0x00ff80, // Neon green
      0xff0080, // Magenta
      0x4080ff, // Light blue
      0x8040ff, // Violet
      0x40ff80, // Mint green
      0xff4080, // Pink
      0x80ff40, // Lime
      0x0040ff, // Deep blue
      0xff8040, // Orange
    ];

    // Create materials with glowing effects
    const techMaterials = techColors.map(color => new THREE.MeshPhongMaterial({ 
      color: color,
      shininess: 200,
      transparent: true,
      opacity: 0.8,
      emissive: color,
      emissiveIntensity: 0.1
    }));

    // Wireframe materials for some elements
    const wireframeMaterials = techColors.map(color => new THREE.MeshBasicMaterial({ 
      color: color,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    }));

    // Geometries - Modern tech shapes
    const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const octahedronGeometry = new THREE.OctahedronGeometry(0.4);
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.3);
    const icosahedronGeometry = new THREE.IcosahedronGeometry(0.35);
    const tetrahedronGeometry = new THREE.TetrahedronGeometry(0.4);
    const torusGeometry = new THREE.TorusGeometry(0.3, 0.1, 8, 16);
    const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 6);
    const coneGeometry = new THREE.ConeGeometry(0.2, 0.6, 6);

    // Create main group
    const techGroup = new THREE.Group();

    // Arrays to store different shape types
    const cubes: THREE.Mesh[] = [];
    const polyhedrons: THREE.Mesh[] = [];
    const toruses: THREE.Mesh[] = [];
    const cylinders: THREE.Mesh[] = [];

    // Create floating cubes (blockchain-inspired)
    for (let i = 0; i < 15; i++) {
      const material = i % 2 === 0 ? 
        techMaterials[Math.floor(Math.random() * techMaterials.length)] :
        wireframeMaterials[Math.floor(Math.random() * wireframeMaterials.length)];
      
      const cube = new THREE.Mesh(cubeGeometry, material);
      
      cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.8 + Math.random() * 1.2;
      cube.scale.set(scale, scale, scale);

      cubes.push(cube);
      techGroup.add(cube);
    }

    // Create complex polyhedrons (AI/ML inspired)
    const polyGeometries = [octahedronGeometry, dodecahedronGeometry, icosahedronGeometry, tetrahedronGeometry];
    for (let i = 0; i < 12; i++) {
      const geometry = polyGeometries[Math.floor(Math.random() * polyGeometries.length)];
      const material = techMaterials[Math.floor(Math.random() * techMaterials.length)];
      
      const polyhedron = new THREE.Mesh(geometry, material);
      
      polyhedron.position.set(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18
      );

      polyhedron.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.6 + Math.random() * 0.8;
      polyhedron.scale.set(scale, scale, scale);

      polyhedrons.push(polyhedron);
      techGroup.add(polyhedron);
    }

    // Create torus shapes (network nodes)
    for (let i = 0; i < 8; i++) {
      const material = wireframeMaterials[Math.floor(Math.random() * wireframeMaterials.length)];
      const torus = new THREE.Mesh(torusGeometry, material);
      
      torus.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16
      );

      torus.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.7 + Math.random() * 0.9;
      torus.scale.set(scale, scale, scale);

      toruses.push(torus);
      techGroup.add(torus);
    }

    // Create cylinders and cones (circuit elements)
    const rodGeometries = [cylinderGeometry, coneGeometry];
    for (let i = 0; i < 10; i++) {
      const geometry = rodGeometries[Math.floor(Math.random() * rodGeometries.length)];
      const material = techMaterials[Math.floor(Math.random() * techMaterials.length)];
      
      const rod = new THREE.Mesh(geometry, material);
      
      rod.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14
      );

      rod.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.5 + Math.random() * 0.7;
      rod.scale.set(scale, scale, scale);

      cylinders.push(rod);
      techGroup.add(rod);
    }

    scene.add(techGroup);

    // Advanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x00ffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x8000ff, 0.6);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    const pointLight1 = new THREE.PointLight(0x00ff80, 0.5, 20);
    pointLight1.position.set(0, 10, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff0080, 0.4, 15);
    pointLight2.position.set(10, -10, 5);
    scene.add(pointLight2);

    // Position camera
    camera.position.set(0, 0, 12);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Slow rotation of entire tech system
      techGroup.rotation.y += 0.003;
      techGroup.rotation.x += 0.002;

      // Individual cube animations (blockchain-like)
      cubes.forEach((cube, index) => {
        cube.rotation.x += 0.01 * Math.sin(time + index);
        cube.rotation.y += 0.008 * Math.cos(time + index);
        cube.rotation.z += 0.006 * Math.sin(time * 0.7 + index);
        cube.position.y += 0.02 * Math.sin(time * 0.5 + index);
      });

      // Complex polyhedron animations (AI/ML processing)
      polyhedrons.forEach((poly, index) => {
        poly.rotation.x += 0.015 * Math.sin(time * 0.8 + index);
        poly.rotation.y += 0.012 * Math.cos(time * 0.6 + index);
        poly.rotation.z += 0.008 * Math.sin(time * 1.2 + index);
        poly.position.x += 0.01 * Math.sin(time * 0.3 + index);
        poly.position.z += 0.01 * Math.cos(time * 0.4 + index);
      });

      // Torus animations (network pulses)
      toruses.forEach((torus, index) => {
        torus.rotation.x += 0.02 * Math.sin(time * 0.9 + index);
        torus.rotation.y += 0.025 * Math.cos(time * 0.7 + index);
        const scale = 0.8 + 0.3 * Math.sin(time * 2 + index);
        torus.scale.set(scale, scale, scale);
      });

      // Cylinder animations (circuit activity)
      cylinders.forEach((cylinder, index) => {
        cylinder.rotation.z += 0.01 * Math.sin(time * 1.1 + index);
        cylinder.position.y += 0.015 * Math.sin(time * 0.8 + index);
      });

      // Animate lights for dynamic effects
      pointLight1.position.x = 5 * Math.sin(time * 0.5);
      pointLight1.position.z = 5 * Math.cos(time * 0.5);
      pointLight2.position.x = -5 * Math.sin(time * 0.7);
      pointLight2.position.z = -5 * Math.cos(time * 0.7);

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

    // Advanced mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Parallax camera movement
      camera.position.x = mouse.x * 1.5;
      camera.position.y = mouse.y * 1.5;
      camera.lookAt(0, 0, 0);
      
      // Interactive lighting
      pointLight1.intensity = 0.5 + Math.abs(mouse.x) * 0.3;
      pointLight2.intensity = 0.4 + Math.abs(mouse.y) * 0.3;
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