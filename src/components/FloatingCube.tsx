import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges, MeshDistortMaterial, useTexture, OrbitControls } from '@react-three/drei';
import { Mesh, Color, LinearFilter } from 'three';

export const FloatingCube = () => {
  const cubeRef = useRef<Mesh>(null!);

  const colors = useMemo(() => ({
    primary: new Color('#FFD700'),
    glow: new Color('#FFA500')
  }), []);

  // Load textures for each face of the cube with improved quality
  const textures = useTexture({
    px: 'https://i.postimg.cc/TPR3FY7Q/titlogo.png', // right
    nx: 'https://i.postimg.cc/TPR3FY7Q/titlogo.png', // left
    py: 'https://i.postimg.cc/TPR3FY7Q/titlogo.png', // top
    ny: 'https://i.postimg.cc/TPR3FY7Q/titlogo.png', // bottom
    pz: 'https://i.postimg.cc/TPR3FY7Q/titlogo.png', // front
    nz: 'https://i.postimg.cc/TPR3FY7Q/titlogo.png'  // back
  });

  // Improve texture quality
  Object.values(textures).forEach(texture => {
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.needsUpdate = true;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (cubeRef.current) {
      // Slower, smoother rotation pattern
      cubeRef.current.rotation.x = Math.sin(time * 0.15) * 0.5;
      cubeRef.current.rotation.y = time * 0.15;
      cubeRef.current.rotation.z = Math.sin(time * 0.08) * 0.15;

      // Gentle floating motion
      cubeRef.current.position.y = Math.sin(time * 0.4) * 0.15;
      cubeRef.current.position.x = Math.sin(time * 0.3) * 0.15;

      // Very subtle scale breathing
      const scale = 1.8 + Math.sin(time * 0.8) * 0.03;
      cubeRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry args={[1, 1, 1]} />
        {/* Right face */}
        <meshStandardMaterial
          map={textures.px}
          attachArray="material"
          transparent
          opacity={0.95}
        />
        {/* Left face */}
        <meshStandardMaterial
          map={textures.nx}
          attachArray="material"
          transparent
          opacity={0.95}
        />
        {/* Top face */}
        <meshStandardMaterial
          map={textures.py}
          attachArray="material"
          transparent
          opacity={0.95}
        />
        {/* Bottom face */}
        <meshStandardMaterial
          map={textures.ny}
          attachArray="material"
          transparent
          opacity={0.95}
        />
        {/* Front face */}
        <meshStandardMaterial
          map={textures.pz}
          attachArray="material"
          transparent
          opacity={0.95}
        />
        {/* Back face */}
        <meshStandardMaterial
          map={textures.nz}
          attachArray="material"
          transparent
          opacity={0.95}
        />
        <Edges
          color={colors.glow}
          scale={1.1}
          threshold={15}
          renderOrder={1}
        />
      </mesh>
      {/* Enable Mouse Dragging */}
      <OrbitControls enableZoom={false} />
    </>
  );
};
