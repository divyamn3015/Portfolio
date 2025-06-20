import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
