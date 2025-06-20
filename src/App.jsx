import React from "react"
import Parallex from "./Parallex"
import Portfolio from "./Portfolio"
import { Snowfall } from "react-snowfall"

function App() {

  return (
    <>
      <div className='bg-[#1a1a1a] w-full h-auto '>
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
