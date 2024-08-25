/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/myoffice.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/myoffice.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -1.54]} rotation={[Math.PI, -1.561, Math.PI]}>
        <mesh geometry={nodes.Plane001_Plane002_BlackWood.geometry} material={materials.BlackWood} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood_1.geometry} material={materials.GrayPlastic} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood_2.geometry} material={materials.BlackCoatSteel} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood_3.geometry} material={materials.WhiteSteelScrew} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood_4.geometry} material={materials.BlackPlastic} />
      </group>
      <mesh geometry={nodes.chair.geometry} material={materials.LeatherExecutiveChair1} position={[-0.18, 0.382, -0.01]} rotation={[-Math.PI / 2, 0, 3.138]} />
      <mesh geometry={nodes.imac.geometry} material={materials['Mat.001']} position={[-0.214, 0.938, -1.703]} rotation={[Math.PI, -1.561, Math.PI]} />
      <mesh geometry={nodes.keyboard.geometry} material={materials.lambert3SG} position={[-0.225, 0.943, -1.332]} />
      <mesh geometry={nodes.Mouse.geometry} material={materials['Material.003']} position={[0.418, 0.94, -1.305]} />
      <group position={[-1.701, 0.365, -1.193]}>
        <mesh geometry={nodes.mesh24448074001.geometry} material={materials['mat9.001']} />
        <mesh geometry={nodes.mesh24448074001_1.geometry} material={materials['mat21.001']} />
        <mesh geometry={nodes.mesh24448074001_2.geometry} material={materials['mat20.001']} />
      </group>
      <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials.Default} />
      <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('/myoffice.glb')
