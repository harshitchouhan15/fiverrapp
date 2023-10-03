import { styled } from "@mui/material"
import image1 from '../../images/asset 69.jpeg'
import image2 from '../../images/asset 63.png'
import image3 from '../../images/asset 65.jpeg'
import image4 from '../../images/asset 66.jpeg'
import image5 from '../../images/asset 67.jpeg'
import image6 from '../../images/asset 68.jpeg'

import { Search } from "@mui/icons-material"
import photo2 from '../../images/asset 0.png'
import photo3 from '../../images/asset 1.png'
import photo4 from '../../images/asset 2.png'
import photo5 from '../../images/asset 3.png'
import photo6 from '../../images/asset 4.png'
import { useEffect, useState } from "react"

const Box=styled('div')(({theme})=>({
    height:'100vh',
   
    [theme.breakpoints.down('sm')]:{
       
        height:'max-content'
            },
  
}))
const Container=styled('div')(({theme})=>({
display:'flex',
height:'calc(100vh - 90px)',
position:'relative',
[theme.breakpoints.down('sm')]:{
    backgroundColor:'black',
    height:'48vh'
        },

}))
const Image=styled('img')(({theme})=>({
    width:"100%",
    height:'100%',
    position:'absolute',
    top:0,
    zIndex:-1,
    [theme.breakpoints.down('sm')]:{
        display:'none'
          },
}))
const Left=styled('div')(({theme})=>({
    display:'flex',
    width:'50%',
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:90,
    gap:20,
    color:'white',
    [theme.breakpoints.down('sm')]:{
        paddingInline:20,
        width:'100%'
            },
    '&>h1':{
        fontSize:48,
        fontWeight:700,
        [theme.breakpoints.down('sm')]:{
            fontSize:32,
        fontWeight:500,
        width:'100%',
        letterSpacing:'0.5px',
        marginBottom:20
                },
        width:'90%'
    }
}))
const Center=styled('div')(({display,theme})=>({
   width:'95%',
   
   borderRadius:5,
   [theme.breakpoints.down('sm')]:{
    width:'100%',
    border:'none',
flexDirection:'row-reverse',
        },
   overflow:'hidden',
   display:'flex',
  border:'0.5px solid #333',
   '&>input':{
    width:'90%',
    fontSize:17,
    border:'none',
    outline:'none',
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        paddingLeft:'8px'
            },
    padding:'15px 18px',
    '&:focus':{
        outline:'none'
    }
   },
   '&>span':{
width:'10%',
color:'white',
transition:'all 0.3s ease',
'&:hover':{
    backgroundColor:'#20af6d', 
},
cursor:'pointer',
backgroundColor:'#1dbf73',
[theme.breakpoints.down('sm')]:{
    backgroundColor:'white',
    color:'black',
    paddingInline:5,
    '&:hover':{
        backgroundColor:'white', 
    },
   outline:'none',
   
    border:'none',
    width:'fit-content'
        },
display:'flex',
alignItems:'center',
justifyContent:'center'
   }
}))

const Bottom=styled('div')(({theme})=>({
    display:'flex',
alignItems:'center',
gap:10,
[theme.breakpoints.down('sm')]:{
    display:'none'
        },
color:'white',
'&>:first-child':{
border:'none',
fontSize:14,
padding:0
},
'&>li':{
    padding:'3px 15px',
    borderRadius:30,
    listStyle:'none',
    border:'0.5px solid white',
    transition:'all 0.4s ease',
    cursor:'pointer',
    fontSize:14,
    
    '&:hover':{
        backgroundColor:'white',
        color:'black'
    }
}
}))
const Button=styled('button')(({theme})=>({
    border:'none',
    padding:15,
    backgroundColor:'#1dbf73',
    fontWeight:500,
    borderRadius:5,
    color:'white',
    fontSize:18,
    [theme.breakpoints.up('sm')]:{
        display:'none'
            },
}))

const Intro = ({hide}) => {
const [num,setNum]=useState(0)
useEffect(()=>{
const interval=setInterval(()=>{
    num<images.length-1?setNum(n=>n+1):setNum(0)

},5000)
  return ()=>clearInterval(interval)
},[num])

  return (
  <Box>  <Container  >
<Image src={images[num]}/>
<Left>
    <h1>
Find the right <i style={{fontWeight:400,fontFamily:' Cursive, DomaineDisplay, "Helvetica Neue", Helvetica, Arial, sans-serif'}}> freelance service</i>, right away</h1>
<Center>
<input type="text"  placeholder="Search for any service..."/>
<span><Search /></span>
</Center>
<Button>Search</Button>
<Bottom>
   <span>Popular :</span>
    <li>Website Design</li>
    <li>WordPress</li>
    <li>Logo Design</li>
    <li>AI Services</li>
</Bottom>
</Left>
    </Container>
    <Footer>
        <span style={{color:'#c5bfbf',fontWeight:500}}>Trusted by:</span>
        <li><img src={photo2} alt="" /></li>
        <li><img src={photo3} alt="" /></li>
        <li><img src={photo4} alt="" /></li>
        <li><img src={photo5} alt="" /></li>
        <li><img src={photo6} alt="" /></li>
    </Footer>
    </Box>
  )
}

export default Intro

const Footer=styled('div')(({theme})=>({
    display:'flex',
    backgroundColor:'#fafafa',
  overflow:'hidden',
alignItems:'center',
width:'100vw',
height:90,
[theme.breakpoints.down('sm')]:{
    '&>:nth-child(1),&>:nth-child(6)':{
        display:'none'
    },
    gap:15,
    height:70
        },
justifyContent:'center',
gap:55,
'&>*':{
    listStyle:'none',
}

}))

const images=[image1,image2,image3,image4,image5,image6]