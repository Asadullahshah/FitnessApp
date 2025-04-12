import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BelliconSvg = (props:any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" {...props}>
    <Path
      stroke="#4FC3F7"
      strokeWidth={1.25}
      d="M7.679 2.667h.625v-1.5a.542.542 0 1 1 1.083 0v1.5h1.275a4.291 4.291 0 0 1 4.283 4.023l.258 4.122a9.258 9.258 0 0 0 1.636 4.697 1.262 1.262 0 0 1-.885 1.973l-3.975.477-.55.066v1.808a2.583 2.583 0 1 1-5.167 0V18.024l-.55-.065-3.976-.476a1.261 1.261 0 0 1-.885-1.973 9.258 9.258 0 0 0 1.637-4.697v-.001l.258-4.123a4.291 4.291 0 0 1 4.283-4.022h.65Zm3.25 16.291v-.625H6.762v1.5a2.083 2.083 0 1 0 4.167 0v-.875Z"
    />
  </Svg>
)
export default BelliconSvg
