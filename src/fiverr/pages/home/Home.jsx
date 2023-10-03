import { createTheme, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Bestpart from './Bestpart'
import Business from './Business'
import Footer from './Footer'
import Guide from './Guide'
import Intro from './Intro'
import Logomaker from './Logomaker'
import Menu from './Menu'
import Navbar from './Navbar'
import Review from './Review'
import Services from './Services'
import Slider from './Slider'
import Work from './Work'

const style=createTheme({})

const Container=styled.div`
  
  width: 100vw;
  overflow: hidden;
  &>*{
overflow: hidden;
width: 100vw;
&>*{
  overflow-x: hidden;
}
  }
`
const Home = () => {
    const [scroll,setScroll]=useState(false)
    const [show,setShow]=useState(false)

useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>0?setScroll(true):setScroll(false)
    return ()=>{window.removeEventListener('scroll',()=>{
     window.scrollY>0?setScroll(true):setScroll(false)}
     ) }
    })
},[])
  return (
    <Container>
    <ThemeProvider  theme={style}>
        <Navbar scroll={scroll} menu={setShow}/>
        <Menu show={show} close={setShow}/>
   <Intro/>
   <Slider/>
 <Bestpart/>
 <Services />
 <Business/>
 <Review/>
 <Logomaker/>
 <Work/>
 <Guide/>
 <Footer/>
    
 </ThemeProvider>
 </Container>
  )
}

export default Home