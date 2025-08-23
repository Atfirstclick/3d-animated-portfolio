import React from "react"
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function MugModel(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/mugModel.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="d0a2d02b37264b43afc486567539e1cdfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" />
                  <group name="Object_8" />
                  <group name="Object_10" />
                  <group name="Object_12" />
                  <group name="Object_14" />
                  <group name="Object_16" />
                  <group name="Object_18" />
                  <group name="Object_20" />
                  <group name="Object_22" />
                  <group name="Object_24" />
                  <group name="Object_26" />
                  <group name="Object_28" />
                  <group name="Object_30" />
                  <group name="Object_32" />
                  <group name="Object_34" />
                  <group name="Object_36" />
                  <group name="Object_38" />
                  <group name="Object_40" />
                  <group name="group_0_3543" />
                  <group name="group_0_8407" />
                  <group name="group_0_14295" />
                  <group name="group_0_19927" />
                  <group name="group_0_31447" />
                  <group name="group_0_40919" />
                  <group name="group_0_1179863" />
                  <group name="group_0_1442007" />
                  <group name="group_0_2687191" />
                  <group name="group_0_4456663" />
                  <group name="group_0_6815959" />
                  <group name="group_0_7733463" />
                  <group name="group_0_9240791" />
                  <group name="group_0_11403479" />
                  <group name="group_0_13107415" />
                  <group name="group_0_14090427" />
                  <group name="group_0_14090451" />
                  <group name="group_0_16448250" />
                  <group name="group_0_16777215" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.color_3543mat} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.color_8407mat} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.color_14295mat} skeleton={nodes.Object_11.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.color_19927mat} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.color_31447mat} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.color_40919mat} skeleton={nodes.Object_17.skeleton} />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.color_1179863mat} skeleton={nodes.Object_19.skeleton} />
                  <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.color_1442007mat} skeleton={nodes.Object_21.skeleton} />
                  <skinnedMesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.color_2687191mat} skeleton={nodes.Object_23.skeleton} />
                  <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.color_4456663mat} skeleton={nodes.Object_25.skeleton} />
                  <skinnedMesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.color_6815959mat} skeleton={nodes.Object_27.skeleton} />
                  <skinnedMesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.color_7733463mat} skeleton={nodes.Object_29.skeleton} />
                  <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.color_9240791mat} skeleton={nodes.Object_31.skeleton} />
                  <skinnedMesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.color_11403479mat} skeleton={nodes.Object_33.skeleton} />
                  <skinnedMesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.color_13107415mat} skeleton={nodes.Object_35.skeleton} />
                  <skinnedMesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.color_14090427mat} skeleton={nodes.Object_37.skeleton} />
                  <skinnedMesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.color_14090451mat} skeleton={nodes.Object_39.skeleton} />
                  <skinnedMesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.color_16448250mat} skeleton={nodes.Object_41.skeleton} />
                  <skinnedMesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.color_16777215mat} skeleton={nodes.Object_42.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mugModel.glb')
