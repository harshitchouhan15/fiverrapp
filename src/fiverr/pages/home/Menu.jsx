import styled from "styled-components"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Modal } from "@mui/material";
import { InsertEmoticonRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
const Container=styled.div`
    display: none;
    flex-direction: column;
    height: 100vh;
    gap:30px;
    width: 70vw;
  z-index: -1;
background-color: white;
padding: 20px;
color:#95979d;
font-size:17px;

outline: none;
  letter-spacing:0.5px;
overflow-y: auto;
@media screen and (max-width:600px) {
        display: flex;
            }
`
const MyModal=styled(Modal)`

            
`
const Top=styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    &>:last-child{
        color:green;
        font-weight: 500;
    }
    &>li{
        list-style: none;
    }
`
const Bottom=styled.div`
    display: flex;
    flex-direction: column;
    &>*{
        padding: 10px 0;
        list-style: none;
    }
    &>:first-child{
     border-bottom:0.5px solid #bfbfc1ed   ;
     color:black;
     margin-bottom: 10px;
     font-weight: 500;
     font-size: 15px;
     letter-spacing: 0.1px;
    }
`
const List=styled.div`
    display: flex;
    flex-direction: column;
    height: ${props=>props.hide?'max-content':'25px'};
    overflow: hidden;
    transition: all 5s ease;
   &>li{
    list-style: none;
    padding-left: 25px;
  margin-bottom: 15px;
  font-size:17px;
  letter-spacing:0.5px;
 
   }
`
const Title=styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
   align-items: center; 
    padding-left: 0!important;
`
const First=styled.span`
   
`
const Last=styled.span`
   transform: rotateX(${props=>props.rotate?'180deg':0});
`
const Button=styled.button`
  border: none;
border-radius: 4px;
  background-color: #24a624;
  width: max-content;
  padding: 12px 25px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: white;
  transition: all 0.4s ease;
  
`
const Menu = ({show,close}) => {
    const [height,setHeight]=useState(true)
   const [select,setSelect]=useState(null)
  return (
    <MyModal onBackdropClick={()=>close(false)} open={show}>
  <Container>
    <Top >
<Button>Join Fiverr</Button>
<li>Sign in</li>
{data.map(item=>(
    <List key={item.name} hide={select==item.name?height:false}>
   <Header content={item.name}  selectedBox={setSelect} showBox={setHeight} />
        {item.list.map(cat=>(
            <li>{cat}</li>
        ))}
    </List>
    
))}
<li>Fiverr Business</li>
    </Top>
    <Bottom>
<li>General</li>
<li>Home</li>
<li>English</li>
<li>INR</li>
<li>Open in App</li>
    </Bottom>
  </Container>
  </MyModal>
  )
}

export default Menu

const data=[
    {name:'Browse Categories',
    list:[
        'Graphic & Design',
        'Digital Marketing',
        'Writing & Translation',
        'Video & Animation',
        'Music & Audio',
        'Programming & Tech',
        'Photography',
        'Business',
       ' AI Services'
    ]
    
    },
    {name:'Explore',
    list:[
        'Discover',
        'Guides',
        'Learn',
        'Logo Maker',
        'Community',
        'Podcast',
        'Blog',
        'Fiverr Workspace'


    ]}
]

const Header=({content,showBox,selectedBox})=>{
    const [hide,setHide]=useState(false)
   const [selected,setSelected]=useState(null)
useEffect(()=>{
showBox(hide)
selectedBox(selected)
},[hide])
    return(
        
 <Title onClick={()=>{setHide(!hide);setSelected(content)}}>
        <First>{content}</First>
        <Last rotate={hide}><KeyboardArrowDownIcon/></Last>
        </Title>
      
    )
}
