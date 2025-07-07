// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Float, Environment } from '@react-three/drei';
// import { Suspense } from 'react';

// function FloatingShapes() {
//   return (
//     <>
//       {/* Floating Spheres */}
//       <Float speed={1.2} rotationIntensity={0.5} floatIntensity={2}>
//         <mesh position={[-2, 1.5, -4]}>
//           <sphereGeometry args={[1.2, 32, 32]} />
//           <meshStandardMaterial color="#f472b6" roughness={0.3} metalness={0.1} />
//         </mesh>
//       </Float>
//       <Float speed={1.1} rotationIntensity={0.3} floatIntensity={1.5}>
//         <mesh position={[2.5, -0.5, -3]}>
//           <sphereGeometry args={[0.9, 32, 32]} />
//           <meshStandardMaterial color="#60a5fa" roughness={0.2} metalness={0.2} />
//         </mesh>
//       </Float>
//       {/* Floating Torus */}
//       <Float speed={0.8} rotationIntensity={1.2} floatIntensity={1.2}>
//         <mesh position={[0, -2, -5]} rotation={[Math.PI / 2, 0, 0]}>
//           <torusGeometry args={[1, 0.3, 16, 100]} />
//           <meshStandardMaterial color="#fef9c3" roughness={0.4} metalness={0.1} />
//         </mesh>
//       </Float>
//       {/* Floating Cube */}
//       <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.8}>
//         <mesh position={[-3, -1.5, -6]} rotation={[0.5, 0.5, 0]}>
//           <boxGeometry args={[1.1, 1.1, 1.1]} />
//           <meshStandardMaterial color="#bbf7d0" roughness={0.3} metalness={0.15} />
//         </mesh>
//       </Float>
//       {/* More subtle shapes */}
//       <Float speed={0.7} rotationIntensity={0.7} floatIntensity={1.1}>
//         <mesh position={[3, 2, -7]}>
//           <sphereGeometry args={[0.7, 32, 32]} />
//           <meshStandardMaterial color="#e0e7ff" roughness={0.5} metalness={0.1} />
//         </mesh>
//       </Float>
//     </>
//   );
// }

// export default function RetailEcom3DBackground() {
//   return (
//     <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
//       <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
//         <fog attach="fog" args={["#fff", 7, 15]} />
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 5, 5]} intensity={0.5} />
//         <Suspense fallback={null}>
//           <Environment preset="sunset" background={false} />
//         </Suspense>
//         <FloatingShapes />
//         {/* No controls for background, but you can uncomment for dev: */}
//         {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
//       </Canvas>
//     </div>
//   );
// } 