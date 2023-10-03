import styled from "styled-components"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import fiverr from '../../images/asset 81.svg'
import photo1 from '../../images/asset 82.svg'
import photo2 from '../../images/asset 83.svg'
import photo3 from '../../images/asset 84.svg'
import photo4 from '../../images/asset 85.svg'
import photo5 from '../../images/asset 86.svg'
import photo6 from '../../images/asset 87.svg'
import { useState } from "react";
const Container=styled.div`
    padding-top: 80px;
    border-top: 0.5px solid #d1d2d3;
    @media screen and (max-width:600px) {
 padding-top: 20px;
    }
`
const List=styled.div`
     @media screen and (max-width:600px) {
 min-width: 100%;
 height: ${props=>props.height?'max-content':'23px'};
overflow: hidden;

    }
`
const FirstItem=styled.li`
 display: none;
     @media screen and (max-width:600px) {
        display: flex;
justify-content: space-between;
width: 100%;
align-items: center;



    }
`
const Arrow=styled.div`
    transform: rotateX(${props=>props.rotate?'180deg':0});
`

const Top=styled.div`
    display: flex;
    width: 87vw;
    margin-inline: auto;
    @media screen and (max-width:600px) {
 flex-direction: column;
 gap: 20px;
    }
&>*{
    display: flex;
    width: 20%;
    flex-direction: column;
    gap: 20px;
   
    &>:first-child{
        font-weight: 500;
        color: black;
     
    }
    &>li{
        list-style: none;
        color: #95979d;
        font-size: 17px;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
}
`
const Bottom=styled.div`
    display: flex;
    width: 87vw;
    margin-top: 60px;
    @media screen and (max-width:600px) {
  margin-top: 30px;
  flex-direction: column;
  padding: 20px 0;
  gap: 20px;
  height: max-content;
    }
    height: 80px;
    border-top: 0.5px solid #dcdddf;
    margin-inline: auto;
    justify-content: space-between;
    align-items: center;
    color: #95979d;
`
const Left=styled.div`
    display: flex;
   gap: 20px;
   align-items: center;
   @media screen and (max-width:600px) {
  flex-direction: column;
    }
   &>img{
    width: 80px;
   }
`
const Right=styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    @media screen and (max-width:600px) {
 flex-wrap: wrap;
 width: 60%;
 gap: 20px;
 justify-content: center;
    }
    &>*{
        cursor: pointer;
        
    }
`

const Footer = () => {
    const [show,setShow]=useState(false)
    const [num,setNum]=useState(1)
  return (
    <Container>
        <Top>
       <List height={num==1?show:false}>
        <FirstItem onClick={()=>{setShow(!show);setNum(1)}} >Categories <Arrow rotate={num==1?show:false}><KeyboardArrowDownIcon /></Arrow> </FirstItem>
        <li>Data </li>
        <li>Business</li>
        <li>Lifestyle</li>
        <li>Data </li>
        <li>Sitemap</li>
        <li>Business</li>
        <li>Lifestyle</li>
        <li>Sitemap</li>
        <li>Data </li>
        <li>Business</li>
        <li>Lifestyle</li>
        <li>Data </li>
        <li>Sitemap</li>
        <li>Business</li>
       </List>
       <List  height={num==2?show:false}>
        <FirstItem onClick={()=>{setShow(!show);setNum(2)}}>About <Arrow rotate={num==2?show:false}><KeyboardArrowDownIcon /></Arrow></FirstItem>
        <li>Careers</li>
        <li>Press and News</li>
        <li>Partnership</li>
        <li>Privacy policy</li>
        <li>Press and News</li>
        <li>Partnership</li>
        <li>Privacy policy</li>
       </List>
       <List  height={num==3?show:false}>
        <FirstItem onClick={()=>{setShow(!show);setNum(3)}}>Support <Arrow rotate={num==3?show:false}><KeyboardArrowDownIcon /></Arrow></FirstItem>
        <li>Help & Support</li>
        <li>Trust & Safety</li>
        <li>Selling on Fiverr</li>
        <li>Fiverr Guides</li>
        <li>Trust & Safety</li>
        <li>Selling on Fiverr</li>
        <li>Fiverr Guides</li>
       </List>
       <List  height={num==4?show:false}>
        <FirstItem onClick={()=>{setShow(!show);setNum(4)}}>Community <Arrow rotate={num==4?show:false}><KeyboardArrowDownIcon /></Arrow></FirstItem>
        <li>Customer success story</li>
        <li>Forum</li>
        <li>Events</li>
        <li>Blog</li>
        <li>Customer success story</li>
        <li>Forum</li>
        <li>Events</li>
        <li>Blog</li>
        <li>Customer success story</li>
        <li>Forum</li>
        <li>Events</li>
        <li>Blog</li>
       </List>
       <List  height={num==5?show:false}>
       <FirstItem onClick={()=>{setShow(!show);setNum(5)}}>More from fiverr<Arrow rotate={num==5?show:false}><KeyboardArrowDownIcon /></Arrow></FirstItem>
        <li>Fiverr Pro</li>
        <li>Get inspired</li>
        <li>Fiverr select</li>
        <li>Learn</li>
        <li>More from fiverr</li>
        <li>Fiverr Pro</li>
        <li>Get inspired</li>
        <li>Fiverr select</li>
        <li>Learn</li>
        <li>More from fiverr</li>
        <li>Fiverr Pro</li>
        <li>Get inspired</li>
        <li>Fiverr select</li>
        <li>Learn</li>
       </List>
        </Top>
        <Bottom>
            <Left>
<img src={fiverr} alt="" />
<p>© Fiverr International Ltd. 2023</p>
            </Left>
            <Right>
<img src={photo1} alt="" />
<img src={photo2} alt="" />
<img src={photo3} alt="" />
<img src={photo4} alt="" />
<img src={photo5} alt="" />
<span>English</span>
<span>INR</span>
<img src={photo6} alt="" />
            </Right>
        </Bottom>
    </Container>
  )
}

export default Footer