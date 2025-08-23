import { useGLTF } from '@react-three/drei'

export function Likebutton(props) {
  const { nodes, materials } = useGLTF('/likebuttonmodel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/likebutton.glb')
