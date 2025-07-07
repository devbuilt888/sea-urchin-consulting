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

    // Special purple chrome material for premium fittings
    const purpleChromeMaterial = new THREE.MeshPhongMaterial({
      color: 0x6b46c1, // Purple
      shininess: 300,
      transparent: true,
      opacity: 0.9,
      reflectivity: 0.8,
      combine: THREE.MultiplyOperation
    });

    // Helper function to create hollow pipe geometry
    const createHollowPipe = (outerRadius: number, innerRadius: number, height: number, segments = 16) => {
      const shape = new THREE.Shape();
      shape.arc(0, 0, outerRadius, 0, Math.PI * 2, false);
      
      const hole = new THREE.Path();
      hole.arc(0, 0, innerRadius, 0, Math.PI * 2, true);
      shape.holes.push(hole);
      
      const extrudeSettings = {
        depth: height,
        bevelEnabled: false,
        steps: 1
      };
      
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.rotateX(Math.PI / 2);
      geometry.translate(0, 0, -height / 2);
      return geometry;
    };

    // Helper function to create hex nut with hole
    const createHexNutWithHole = (outerRadius: number, holeRadius: number, height: number) => {
      const hexShape = new THREE.Shape();
      const sides = 6;
      const angle = (Math.PI * 2) / sides;
      
      // Create hexagon shape
      hexShape.moveTo(outerRadius, 0);
      for (let i = 1; i <= sides; i++) {
        const x = Math.cos(angle * i) * outerRadius;
        const y = Math.sin(angle * i) * outerRadius;
        hexShape.lineTo(x, y);
      }
      
      // Create circular hole
      const hole = new THREE.Path();
      hole.arc(0, 0, holeRadius, 0, Math.PI * 2, true);
      hexShape.holes.push(hole);
      
      const extrudeSettings = {
        depth: height,
        bevelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelSegments: 3
      };
      
      const geometry = new THREE.ExtrudeGeometry(hexShape, extrudeSettings);
      geometry.rotateX(Math.PI / 2);
      geometry.translate(0, 0, -height / 2);
      return geometry;
    };

    // Hollow pipe geometries - Different pipe sizes
    const pipeGeometry = createHollowPipe(0.1, 0.07, 4);
    const widePipeGeometry = createHollowPipe(0.2, 0.15, 5);
    const extraWidePipeGeometry = createHollowPipe(0.3, 0.22, 6);
    const shortWidePipeGeometry = createHollowPipe(0.25, 0.18, 3);
    const longPipeGeometry = createHollowPipe(0.15, 0.11, 7);
    
    const jointGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const wideJointGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const extraWideJointGeometry = new THREE.SphereGeometry(0.35, 16, 16);
    
    // Hex nuts with holes - Different sizes
    const hexNutGeometry = createHexNutWithHole(0.2, 0.08, 0.1);
    const wideHexNutGeometry = createHexNutWithHole(0.3, 0.12, 0.15);
    const extraWideHexNutGeometry = createHexNutWithHole(0.4, 0.16, 0.2);
    
    // Lock nuts (thicker hex nuts with holes)
    const lockNutGeometry = createHexNutWithHole(0.25, 0.1, 0.2);
    const wideLockNutGeometry = createHexNutWithHole(0.35, 0.14, 0.25);

    // Premium purple chrome fittings
    // Octagonal coupling nut (8-sided, more uncommon)
    const createOctagonalNut = (outerRadius: number, holeRadius: number, height: number) => {
      const octShape = new THREE.Shape();
      const sides = 8;
      const angle = (Math.PI * 2) / sides;
      
      // Create octagon shape
      octShape.moveTo(outerRadius, 0);
      for (let i = 1; i <= sides; i++) {
        const x = Math.cos(angle * i) * outerRadius;
        const y = Math.sin(angle * i) * outerRadius;
        octShape.lineTo(x, y);
      }
      
      // Create circular hole
      const hole = new THREE.Path();
      hole.arc(0, 0, holeRadius, 0, Math.PI * 2, true);
      octShape.holes.push(hole);
      
      const extrudeSettings = {
        depth: height,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 4
      };
      
      const geometry = new THREE.ExtrudeGeometry(octShape, extrudeSettings);
      geometry.rotateX(Math.PI / 2);
      geometry.translate(0, 0, -height / 2);
      return geometry;
    };

    // Elbow pipe (90-degree bend)
    const createElbowPipe = (radius: number, tubeRadius: number, innerRadius: number) => {
      const curve = new THREE.EllipseCurve(
        0, 0,
        radius, radius,
        0, Math.PI / 2,
        false,
        0
      );
      
      const points = curve.getPoints(16);
      const path = new THREE.CatmullRomCurve3(
        points.map(point => new THREE.Vector3(point.x, 0, point.y))
      );
      
      // Create hollow tube cross-section
      const tubeShape = new THREE.Shape();
      tubeShape.arc(0, 0, tubeRadius, 0, Math.PI * 2, false);
      
      const hole = new THREE.Path();
      hole.arc(0, 0, innerRadius, 0, Math.PI * 2, true);
      tubeShape.holes.push(hole);
      
      const geometry = new THREE.ExtrudeGeometry(tubeShape, {
        extrudePath: path,
        steps: 16,
        bevelEnabled: false
      });
      
      return geometry;
    };

    const octagonalCouplingGeometry = createOctagonalNut(0.28, 0.11, 0.18);
    const elbowPipeGeometry = createElbowPipe(1.2, 0.18, 0.13);

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

    // Create pipe joints/connections with different sizes (reduced number)
    for (let i = 0; i < 6; i++) {
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

    // Create premium purple chrome octagonal couplings (uncommon)
    for (let i = 0; i < 5; i++) {
      const octNut = new THREE.Mesh(octagonalCouplingGeometry, purpleChromeMaterial);
      
      octNut.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );

      octNut.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.8 + Math.random() * 0.5;
      octNut.scale.set(scale, scale, scale);

      hexNuts.push(octNut);
      pipesGroup.add(octNut);
    }

    // Create premium purple chrome elbow pipes (uncommon)
    for (let i = 0; i < 4; i++) {
      const elbowPipe = new THREE.Mesh(elbowPipeGeometry, purpleChromeMaterial);
      
      elbowPipe.position.set(
        (Math.random() - 0.5) * 17,
        (Math.random() - 0.5) * 17,
        (Math.random() - 0.5) * 17
      );

      elbowPipe.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.6 + Math.random() * 0.4;
      elbowPipe.scale.set(scale, scale, scale);

      pipes.push(elbowPipe);
      pipesGroup.add(elbowPipe);
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