import React from "react"
import Parallex from "./Parallex"
import Portfolio from "./Portfolio"
import { Snowfall } from "react-snowfall"

function App() {

  return (
    <>
      <div className='bg-gray-700 w-full h-auto '>
        {/* <Parallex/> */}
        <Snowfall  style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}/>
        <Portfolio/>
      </div>
    </>
  )
}

export default App
