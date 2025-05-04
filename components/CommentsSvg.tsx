import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CommentsSvg = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#4FC3F7"
      d="M7.25 6.497a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3.5-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm5.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm3.75.75a6.501 6.501 0 0 1-9.555 5.74l-2.128.708a1.001 1.001 0 0 1-1.265-1.264l.71-2.129A6.5 6.5 0 1 1 13 6.497Zm-1 0A5.5 5.5 0 1 0 1.738 9.251a.5.5 0 0 1 .041.409L1 11.997l2.337-.779a.489.489 0 0 1 .409.041A5.5 5.5 0 0 0 12 6.497Z"
    />
  </Svg>
)
export default CommentsSvg
