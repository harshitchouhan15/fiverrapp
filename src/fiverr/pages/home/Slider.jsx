import { styled } from "@mui/material"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import photo1 from '../../images/asset 10.png'
import photo2 from '../../images/asset 11.jpeg'
import photo3 from '../../images/asset 12.jpeg'
import photo4 from '../../images/asset 13.jpeg'
import photo5 from '../../images/asset 14.jpeg'
import photo6 from '../../images/asset 15.jpeg'
import photo7 from '../../images/asset 16.png'
import photo8 from '../../images/asset 5.jpeg'
import photo9 from '../../images/asset 6.jpeg'
import photo10 from '../../images/asset 7.jpeg'
import { useState } from "react";


const Container=styled('div')(({theme})=>({
    height:'75vh',
    display:'flex',
position:'relative',
    flexDirection:'column',
   
    justifyContent:'center',
    gap:20,
    [theme.breakpoints.down('sm')]:{
       height:'max-content',
       padding:'15px 0'
            },
    width:'100vw',
    '&>h1':{
        width:'87%',
        marginInline:'auto',
        fontSize:35,
        
    }
}))

const Frame=styled('div')(({theme})=>({
    
    overflow:'hidden',
    [theme.breakpoints.down('sm')]:{
        overflowX:'auto',
        scrollbarWidth:0,
'::-webkit-scrollbar':{
    width: 0
  }

            },
    width:'87vw',
    
    marginInline:'auto'
}))
const SlideContainer=styled('div')(({slide,theme})=>({
   display:'flex',
   height:'100%',
   alignItems:'center',
   transition:'all 1s ease',
   width:'max-content',
   gap:'calc((87vw - 1250px)/4)',
   transform:`translateX(-${slide*88.5}vw)`,
   [theme.breakpoints.down('sm')]:{
   gap:15
        },
}))

const Card=styled('div')(({
width:250,
height:350,
cursor:'pointer',
color:'white',
position:'relative',
'&>h2,h3':{
    margin:10,
    fontSize:20
}

}))

const Image=styled('img')({
    position:'absolute',
    width:250,
zIndex:-1,
height:350,

})

const Circle=styled('div')(({right,left,theme})=>({
    width:50,
    position:'absolute',
    [theme.breakpoints.down('sm')]:{
       display:'none'
            },
    height:50,
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 5px 0px',
    borderRadius:'50%',
    fontSize:25,
   marginTop:50,
    cursor:'pointer',
    left:left==='false'&&'5vw',
    right:right==='true'&&'5vw',
    display:'flex',
    transform:right&&'rotate(180deg)',
   justifyContent:'center',
  backgroundColor:'white',
   alignItems:'center',
   zIndex:2
}))

const Slider = () => {
    const [move,setMove]=useState(0)
    const handleClick=(a)=>{
        a==='left'?move>0?setMove(move-1):setMove(1)
        :move==1?setMove(0):setMove(move+1)
    }
  return (
   <Container>
     <Circle onClick={()=>handleClick('left')} left='false'><KeyboardArrowLeftIcon fontSize="large"/></Circle>
       <Circle onClick={()=>handleClick('right')} right='true'><KeyboardArrowLeftIcon fontSize="large"/></Circle>
    <h1>Popular Services</h1>
    <Frame>
      
    <SlideContainer slide={move}>
{data.map(item=>(
    <Card key={item}>
        <Image src={item.src}/>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
    </Card>
))}
   </SlideContainer>

    </Frame>
 
   </Container>
  )
}

export default Slider

const data=[
    {
        src:photo1,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
    {
        src:photo2,
        title:'Logo Design',
        subtitle:'Build your brand'
    },
    {
        src:photo3,
        title:'WordPress',
        subtitle:'Customize your site'
    },
    {
        src:photo4,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
    {
        src:photo5,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
    {
        src:photo6,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
    {
        src:photo7,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
    {
        src:photo8,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
    {
        src:photo9,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
    {
        src:photo10,
        title:'AI Artists',
        subtitle:'Add talent to AI'
    },
]