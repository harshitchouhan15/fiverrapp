import { Search } from "@mui/icons-material"
import { AppBar, Box, Button, Container, styled } from "@mui/material"
import fiverr from '../../images/asset 81.svg'
import internet from '../../images/asset 75.svg'
import hamburger from '../../images/asset 72.svg'

const MyAppBar=styled('div')(({show,theme})=>({
    height:show?'maxContent':70,
    color:show?'black':'white',
    width:'100vw',
  position:'fixed',
  zIndex:999,
  top:0,
  backgroundColor:show?'white':'transparent',
    boxShadow:'none',
    overflow:'hidden',
    [theme.breakpoints.down('sm')]:{
        backgroundColor:'white',
        position:'sticky'
          },
}))

const MyBox=styled(Box)(({color})=>({
  width:'87%',
    height:70,
 
    marginInline:'auto',
    display:'flex',
    alignItems:'center',
   
    justifyContent:'space-between',
   
}))
const Left=styled('div')(({theme})=>({
    cursor:'pointer',
  fontSize:35,
  display:'flex',
alignItems:'flex-end',
fontWeight:700,
gap:2,
[theme.breakpoints.down('sm')]:{
  color:'black!important'
    },
}))
const Dot=styled('div')({
  width:7,
  height:7,
  borderRadius:'50%',
  backgroundColor:'#1dbf73',
  marginBottom:8
})
const Center=styled('div')(({display,theme})=>({
    width:'35vw',
   
   borderRadius:5,
   overflow:'hidden',
   display:display?'flex':'none',
  border:'0.5px solid #333',
  [theme.breakpoints.down('sm')]:{
display:'none'
  },
   '&>input':{
    flex:9,
    fontSize:17,
    border:'none',
    padding:'10px 15px',
    '&:focus':{
        outline:'none'
    }
   },
   '&>span':{
flex:1,
backgroundColor:'black',
display:'flex',
alignItems:'center',
justifyContent:'center'
   }
}))
const Right=styled('div')(({color,theme})=>({
   fontWeight:500,
   display:'flex',
   fontSize:17,
alignItems:'center',

gap:25,
[theme.breakpoints.down('sm')]:{
    display:'none'
      },
'&>*':{
    cursor:'pointer',
    '&:hover':{
    color:color&&'#0a9f37'
    }
}
}))

const MyButton=styled('button')(({color})=>({
border:color?'1px solid green':'1px solid white',
borderRadius:5,
padding:'8px 16px',
backgroundColor:color?'white':'transparent',
color:color?'green':'white',
transition:'all 0.3s ease',
fontSize:16,

fontWeight:500,
cursor:'pointer',
'&:hover':{
    color:'white',

backgroundColor:'green'
}
}))


const Bottom=styled('div')(({theme})=>({
    width:'100%',
    [theme.breakpoints.down('sm')]:{
        display:'none'
          },
    height:40,
    borderBottom:'0.2px solid #e8eaf0',
   borderTop:'0.2px solid #e2e4ec',
    marginInline:'auto',
    display:'flex',
    alignItems:'center',
    gap:20,
    justifyContent:'center',
    '&>li':{
        listStyle:'none',
        fontSize:18
    }
}))
const Menu=styled('div')(({theme})=>({
    [theme.breakpoints.up('sm')]:{
        display:'none'
          },
          '&>img':{

          }
}))
const Join=styled('div')(({theme})=>({
    [theme.breakpoints.up('sm')]:{
        display:'none'
          },
          color:'black',
          fontSize:18
          
}))
const Navbar = ({scroll,menu}) => {
  return (
    <MyAppBar show={scroll}>
<MyBox>
<Menu onClick={()=>menu(true)}><img src={hamburger} alt="" /></Menu>
<Left>
fiverr < Dot/>
</Left>

<Center  display={scroll}>
<input type="text"  placeholder="What service are you looking for today?"/>
<span><Search htmlColor="white"/></span>
</Center>
<Right  color={scroll}>
<span>Fiverr Business</span>
<span>Explore</span>
<span style={{display:'flex',alignItems:'center', gap:10}}> <img src={internet} alt="" /> English</span>
<span>Become a Seller</span>
<span>Sign in</span>
<MyButton color={scroll} >Join</MyButton>
</Right>
<Join>Join</Join>
</MyBox>


<Bottom>
    <li>Graphic & Design</li>
    <li>Digital Marketing</li>
    <li>Writing & Translation</li>
    <li>Video & Animation</li>
    <li>Music & Audio</li>
    <li>Programming & Tech</li>
    <li>Photography</li>
    <li>Business</li>
    <li>AI Services</li>
</Bottom>

    </MyAppBar>
  )
}

export default Navbar