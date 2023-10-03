import styled from "styled-components"
import photo1 from '../../images/asset 30.jpeg'
import photo2 from '../../images/asset 32.jpeg'
import photo3 from '../../images/asset 34.jpeg'
import photo4 from '../../images/asset 28.jpeg'
import logo1 from '../../images/asset 31.png'
import logo2 from '../../images/asset 33.png'
import logo3 from '../../images/asset 35.png'
import logo4 from '../../images/asset 29.png'
import arrow from '../../images/asset 76.svg'
import play from '../../images/asset 71.png'
import { useState } from "react"

const Container=styled.div`
    height: 60vh;
    width: 100vw;
    position: relative;
    margin-inline:auto;
    
    display: flex;
    align-items: center;
justify-content: center;
padding: 20px 0;
@media screen and (max-width:600px) {
flex-direction: column;
gap: 30px;
height: max-content;
padding: 40px 0;
    }
`
const Frame=styled.div`
     display: flex;
     overflow-x: hidden;
    
    width: 87vw;

 
`
const SlideContainer=styled.div`
    display: flex;
    
transform: translateX(-${props=>props.number*87}vw);
    

    
    transition: all 1s ease;
`
const Slide=styled.div`
     display: flex;
    align-items: center;
 width: 87vw;
 @media screen and (max-width:600px) {
 flex-direction: column;
gap: 30px;


    }

`
const Left=styled.div`
  width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width:600px) {
 width: 100%;

    }
`
const Right=styled.div`
 width: 60%;
    padding: 0 60px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    @media screen and (max-width:600px) {
 width: 100%;

 padding: 0;
    }
    &>h3{
        &>p{
            color: #74767e;
            font-size: 20px;
            font-weight: 400;
            padding-right: 15px;
            border-right:1px solid #74767e; 
            @media screen and (max-width:600px) {
 border: none;
    }
        }
        display: flex;
        gap: 15px;
        
        align-items: center;
        @media screen and (max-width:600px) {
 flex-direction: column;
 align-items: start;
    }
        &>img{
            width: 100px;
        }
    }
    &>p{
        font-size: 26px;
        font-style:italic;
        @media screen and (max-width:600px) {
 font-size: 20px;
 
    }
        font-family: cursive;
    }
`
const Image=styled.img`
 width: 100%;
 height: 100%;
 @media screen and (max-width:600px) {
border-radius: 6px;}
`
const Play=styled.img`
position: absolute;
width: 60px;
`
const Circle=styled.div`
    display: flex;
    @media screen and (max-width:600px) {
display: none;
    }
    align-items: center;
    position: absolute;
    left: ${props=>props.left};
    transform: rotate(${props=>props.left==='5vw'&&'180deg'});
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px;
    right: ${props=>props.right};
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius:25px;
    z-index: 2;
    cursor: pointer;
    background-color: white;
    &>img{
        width: 9px;
    }
`
const Review = () => {
    const [num,setNum]=useState(0)
    const [select,setSelect]=useState(data[0].company)
    const handleClick=(a)=>{
        a==='left'?num==0?setNum(3):setNum(num-1):num==3?setNum(0):setNum(num+1)
    }
  return (
    <Container>
        <Circle onClick={()=>handleClick('left')} left='5vw'><img src={arrow} alt="" /></Circle>
        <Circle onClick={()=>handleClick('right')} right='5vw'><img src={arrow} alt="" /></Circle>
        <Frame>

      
<SlideContainer number={num}>
{data.map(item=>(
    <Slide key={item.company}>
        <Left>
            <Play  src={play}/>
<Image src={item.src}/>
        </Left>
        <Right>
            <h3> <p>{item.title}</p> <img src={item.logo}/></h3>
            <p>{item.text}</p>
        </Right>
    </Slide>
))}
</SlideContainer>  </Frame>
<Bottom>
{data.map((item,i)=>(
    <Dot color={select===item.company?'black':'white'}  onClick={()=>{setNum(i);setSelect(item.company)}}></Dot>
))}
</Bottom>
    </Container>
  )
}

export default Review

const data=[
    {src:photo1,
        logo:logo1,
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi totam ex sapiente ut  eaque officia facilis porro ipsum adipisci autem asperiores placeat mollitia atque impedit. Repellat, nam? Labore, corporis.',
    title:'Caitlin tormey, Cheif Commercial Officer',
    company:'NAADAM'
    },
    {src:photo2,
        logo:logo2,
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi totam ex sapiente ut  eaque officia facilis porro ipsum adipisci autem asperiores placeat mollitia atque impedit. Repellat, nam? Labore, corporis.',
        title:'Brighid Gannon (DNP, PMHNP-BC), Co-Founder',
        company:'Lavender'
        },
        {src:photo3,
            logo:logo3,
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi totam ex sapiente ut  eaque officia facilis porro ipsum adipisci autem asperiores placeat mollitia atque impedit. Repellat, nam? Labore, corporis.',
            title:'Tim and Dan Joo, Co-Founders',
            company:'NAADA'
            },
            {src:photo4,
                logo:logo4,
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi totam ex sapiente ut  eaque officia facilis porro ipsum adipisci autem asperiores placeat mollitia atque impedit. Repellat, nam? Labore, corporis.',
                title:'Kay Kim, Co-Founder',
                company:'NAA'
                },
]

const Dot=styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 0.5px solid black;
    background-color: ${props=>props.color};
`
const Bottom=styled.div`
    display: none;
    gap: 15px;
    
    justify-content: center;
    @media screen and (max-width:600px) {
 display: flex;
    }
`

