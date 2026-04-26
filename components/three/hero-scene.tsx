"use client";

/**
 * HeroScene — The Pillars.
 *
 * A wireframe tetrahedron sits at the center of the scene. Four vertices,
 * four edges per face, six edges total — the geometry that exactly matches
 * the four-pillar identity (Engineer · Builder · Thinker · Founder).
 *
 * Each vertex is a small emissive node that pulses on its own phase so the
 * four pillars feel alive and independent. Particles drift around the form
 * for atmosphere. Bloom is dialled in tight: only the vertex nodes glow,
 * not the edges, so the scene reads as quiet and architectural rather than
 * a luminous blob.
 */

import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { PILLARS, pillarUppercase } from "@/lib/brand";

const ACCENT = "#C7F65E";
const INK = "#F5F1E6";
const VOID = "#0A0B0A";

const PARTICLE_COUNT = 90;
const PARTICLE_INNER_RADIUS = 2.6;
const PARTICLE_OUTER_RADIUS = 4.4;
const CONNECTION_THRESHOLD = 1.05;
const MAX_CONNECTIONS = 400;

// ─── Pillar tetrahedron ──────────────────────────────────────────────────────
function PillarTetrahedron() {
  const groupRef = useRef<THREE.Group>(null!);
  const vertexRefs = useRef<(THREE.Mesh | null)[]>([]);
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Regular tetrahedron — four vertices on a unit cube's alternating corners
  const SIZE = 1.55;
  const vertices = useMemo(
    () => [
      new THREE.Vector3(SIZE, SIZE, SIZE),
      new THREE.Vector3(-SIZE, -SIZE, SIZE),
      new THREE.Vector3(-SIZE, SIZE, -SIZE),
      new THREE.Vector3(SIZE, -SIZE, -SIZE),
    ],
    [],
  );

  // Six edges — every pair connected
  const edgesPositions = useMemo(() => {
    const pairs: Array<[number, number]> = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
      [2, 3],
    ];
    const arr: number[] = [];
    pairs.forEach(([a, b]) => {
      arr.push(...vertices[a].toArray(), ...vertices[b].toArray());
    });
    return new Float32Array(arr);
  }, [vertices]);

  // Faint translucent face hints
  const faceGeom = useMemo(() => {
    const indexes: Array<[number, number, number]> = [
      [0, 1, 2],
      [0, 1, 3],
      [0, 2, 3],
      [1, 2, 3],
    ];
    const positions: number[] = [];
    indexes.forEach(([a, b, c]) => {
      positions.push(
        ...vertices[a].toArray(),
        ...vertices[b].toArray(),
        ...vertices[c].toArray(),
      );
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3),
    );
    g.computeVertexNormals();
    return g;
  }, [vertices]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.07;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.18;
    }
    // Each vertex pulses on its own phase — the four pillars, alive
    vertexRefs.current.forEach((m, i) => {
      if (!m) return;
      const pulse = 1 + Math.sin(t * 1.3 + i * (Math.PI / 2)) * 0.18;
      m.scale.setScalar(pulse);
    });
    ringRefs.current.forEach((m, i) => {
      if (!m) return;
      const pulse = 1 + Math.sin(t * 1.3 + i * (Math.PI / 2) + 0.6) * 0.4;
      m.scale.setScalar(pulse);
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.25 - Math.sin(t * 1.3 + i * (Math.PI / 2)) * 0.12;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Translucent face hints — barely visible, give the form depth */}
      <mesh geometry={faceGeom}>
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.025}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Wireframe edges */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgesPositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.55}
          toneMapped={false}
        />
      </lineSegments>

      {/* Four vertex nodes — the pillars */}
      {vertices.map((v, i) => (
        <group key={i} position={v.toArray()}>
          {/* Halo ring */}
          <mesh ref={(el) => void (ringRefs.current[i] = el)}>
            <sphereGeometry args={[0.18, 24, 24]} />
            <meshBasicMaterial
              color={ACCENT}
              transparent
              opacity={0.2}
              toneMapped={false}
              depthWrite={false}
            />
          </mesh>
          {/* Solid emissive core */}
          <mesh ref={(el) => void (vertexRefs.current[i] = el)}>
            <sphereGeometry args={[0.085, 24, 24]} />
            <meshBasicMaterial color={ACCENT} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ─── Particle network (lighter, sparser than before) ─────────────────────────
function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const particles = useMemo(() => {
    const data: {
      bx: number;
      by: number;
      bz: number;
      phase: number;
      speed: number;
      amp: number;
    }[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const r =
        PARTICLE_INNER_RADIUS +
        Math.random() * (PARTICLE_OUTER_RADIUS - PARTICLE_INNER_RADIUS);
      const sq = Math.sqrt(1 - u * u);
      data.push({
        bx: r * sq * Math.cos(theta),
        by: r * u,
        bz: r * sq * Math.sin(theta),
        phase: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3,
        amp: 0.06 + Math.random() * 0.1,
      });
    }
    return data;
  }, []);

  const pointsPositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * 3),
    [],
  );
  const linePositions = useMemo(
    () => new Float32Array(MAX_CONNECTIONS * 2 * 3),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];
      const dx = Math.sin(t * p.speed + p.phase) * p.amp;
      const dy = Math.cos(t * p.speed * 0.7 + p.phase) * p.amp;
      const dz = Math.sin(t * p.speed * 1.1 + p.phase * 1.3) * p.amp;
      pointsPositions[i * 3] = p.bx + dx;
      pointsPositions[i * 3 + 1] = p.by + dy;
      pointsPositions[i * 3 + 2] = p.bz + dz;
    }

    const thrSq = CONNECTION_THRESHOLD * CONNECTION_THRESHOLD;
    let conn = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (conn >= MAX_CONNECTIONS) break;
      const ix = pointsPositions[i * 3];
      const iy = pointsPositions[i * 3 + 1];
      const iz = pointsPositions[i * 3 + 2];
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        if (conn >= MAX_CONNECTIONS) break;
        const jx = pointsPositions[j * 3];
        const jy = pointsPositions[j * 3 + 1];
        const jz = pointsPositions[j * 3 + 2];
        const dx = ix - jx,
          dy = iy - jy,
          dz = iz - jz;
        if (dx * dx + dy * dy + dz * dz < thrSq) {
          const idx = conn * 6;
          linePositions[idx] = ix;
          linePositions[idx + 1] = iy;
          linePositions[idx + 2] = iz;
          linePositions[idx + 3] = jx;
          linePositions[idx + 4] = jy;
          linePositions[idx + 5] = jz;
          conn++;
        }
      }
    }

    if (pointsRef.current) {
      (
        pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
      ).needsUpdate = true;
    }
    if (linesRef.current) {
      (
        linesRef.current.geometry.attributes.position as THREE.BufferAttribute
      ).needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, conn * 2);
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointsPositions, 3]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color={ACCENT}
          transparent
          opacity={0.7}
          sizeAttenuation
          toneMapped={false}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.1}
          toneMapped={false}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

// ─── Mouse parallax ──────────────────────────────────────────────────────────
function MouseParallax({ children }: { children: ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y +=
      (target.current.x * 0.18 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x +=
      (target.current.y * 0.12 - groupRef.current.rotation.x) * 0.04;
  });

  return <group ref={groupRef}>{children}</group>;
}

// ─── Scene ───────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={0.4} color={INK} />
      <directionalLight position={[-3, -2, -2]} intensity={0.2} color={ACCENT} />

      <MouseParallax>
        <Float speed={0.9} rotationIntensity={0.08} floatIntensity={0.15}>
          <PillarTetrahedron />
        </Float>
        <ParticleNetwork />
      </MouseParallax>

      {/* Bloom only on the bright vertex spheres + a faint vignette. */}
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.55}
          luminanceThreshold={0.55}
          luminanceSmoothing={0.6}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.3} darkness={0.6} />
      </EffectComposer>
    </>
  );
}

// ─── Static SVG fallback (reduced motion / mobile) ───────────────────────────
function StaticFallback() {
  // Project tetrahedron vertices to 2D for the SVG.
  const verts2D: Array<[number, number]> = [
    [200, 90],
    [110, 240],
    [290, 240],
    [200, 195],
  ];
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <svg
        viewBox="0 0 400 320"
        width="80%"
        height="80%"
        style={{ maxWidth: 520 }}
      >
        <defs>
          <radialGradient id="vertGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="1" />
            <stop offset="60%" stopColor={ACCENT} stopOpacity="0.2" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* edges */}
        {[
          [0, 1],
          [0, 2],
          [0, 3],
          [1, 2],
          [1, 3],
          [2, 3],
        ].map(([a, b], i) => (
          <line
            key={i}
            x1={verts2D[a][0]}
            y1={verts2D[a][1]}
            x2={verts2D[b][0]}
            y2={verts2D[b][1]}
            stroke={ACCENT}
            strokeOpacity="0.5"
            strokeWidth="1"
          />
        ))}

        {/* vertices with halo + core + label */}
        {verts2D.map((v, i) => (
          <g key={i}>
            <circle cx={v[0]} cy={v[1]} r="20" fill="url(#vertGlow)" />
            <circle cx={v[0]} cy={v[1]} r="4" fill={ACCENT} />
            <text
              x={v[0]}
              y={v[1] - 24}
              fill={INK}
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              textAnchor="middle"
              letterSpacing="2"
            >
              {pillarUppercase(PILLARS[i]).slice(0, 3)}
            </text>
          </g>
        ))}

        <rect width="400" height="320" fill={VOID} fillOpacity="0" />
      </svg>
    </div>
  );
}

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ─── Main export ─────────────────────────────────────────────────────────────
export function HeroScene() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || reduced || isMobile) {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: 400,
        }}
      >
        <StaticFallback />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 500,
      }}
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 35 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
