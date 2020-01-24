import React from "react"
import { hot } from "react-hot-loader"

export default hot(module)(() => {
  return (
    <div>
      <h1>Background</h1>
      <div>{new Date().toISOString()}</div>
      <img src="https://lh3.googleusercontent.com/-mBpVL6Ed5Hg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reg7RORimPKCOAZUx2UGKgKK8Kjdw.CMID/s32-c/photo.jpg" />
    </div>
  )
})
