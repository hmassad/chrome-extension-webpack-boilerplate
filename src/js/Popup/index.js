import React from "react"
import { hot } from "react-hot-loader"
import CustomImage from "./CustomImage"

export default hot(module)(() => {

  const [s, setS] = React.useState(null)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(setS)
    .catch(console.error)
  }, [])

  const handleClick = () => {
    console.log("clicked")
    alert('clicked')
  }

  return (
    <div>
      <h1>Popup</h1>
      <span style={{backgroundColor: "green"}}>Verde HOT Reload</span>
      <div>{new Date().toISOString()}</div>
      <CustomImage />
      { s && <h3 id="response">{JSON.stringify(s)}</h3> }
      <button onClick={handleClick}>Press to see an alert</button>
    </div>
  )
})
