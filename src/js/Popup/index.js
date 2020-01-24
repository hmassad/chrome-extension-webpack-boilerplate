import React from "react"
import { hot } from "react-hot-loader"

export default hot(module)(() => {

  const [s, setS] = React.useState('initial')

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <div>
      <h1>Popup</h1>
      <div>{new Date().toISOString()}</div>
      <img src="https://lh3.googleusercontent.com/-mBpVL6Ed5Hg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reg7RORimPKCOAZUx2UGKgKK8Kjdw.CMID/s32-c/photo.jpg" />
      <button onClick={handleClick}>Press to see</button>
    </div>
  )
})
