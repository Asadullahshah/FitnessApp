import * as React from "react"
import Svg, { Path } from "react-native-svg"
const line = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#D1D4D8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.563}
      d="M.75.875h37.5"
    />
  </Svg>
)
export default line
