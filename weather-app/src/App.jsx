import React from "react"
import './App.css'
import Weather from "./components/Weather"


function App() {
  return (
    <div style={{
      display : "grid",
      placeItems : "center",
      height : "100vh"
    }}>
      <Weather />
    </div>
  )
}

export default App
