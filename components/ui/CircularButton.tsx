import * as React from "react"
import Svg, { G, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CircularButton = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={19} cy={16} r={15} fill="#1E395A" />
    </G>
    <Defs></Defs>
  </Svg>
)
export default CircularButton
