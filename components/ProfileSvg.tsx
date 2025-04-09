import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileSvg = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.905 15.892A4.124 4.124 0 0 1 8 12.25h8a4.124 4.124 0 0 1 4.096 3.642l.649 5.52a.75.75 0 0 1-1.49.176l-.65-5.52A2.624 2.624 0 0 0 16 13.75H8c-1.33 0-2.45.996-2.606 2.317l-.65 5.52a.75.75 0 0 1-1.49-.175l.65-5.52Z"
      clipRule="evenodd"
    />
    <Path stroke={props.color} d="M15.5 6a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <Path
      fill={props.color}
      d="M8 13.75V18c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-4.25H8Z"
      opacity={0.5}
    />
  </Svg>
)
export default ProfileSvg
