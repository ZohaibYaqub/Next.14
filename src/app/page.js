import React from 'react'
import hero from './components/hero'
import footer from './components/footer'
import learn from './components/learn'
import score from './components/score'




const page = () => {
  return (
    
    <>
    
    {hero()}
    {learn()}
    {score()}
    {footer()}
    
   
    </>
  
   
    
  )
}

export default page