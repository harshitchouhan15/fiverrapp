import styled from "@emotion/styled"
import photo from '../../images/asset 16.png'
import right from '../../images/asset 77.svg'

const Container=styled('div')(({theme})=>({
    display:'flex',
    alignItems:'center',
    height:'calc(100vh - 110px)',
    backgroundColor:'#f1fdf7',
    justifyContent:'center',
    [theme.breakpoints.down('sm')]:{
       flexDirection:'column',
       height:'max-content',
       gap:20,
       padding:'50px 25px'
            },
}))
const Left=styled('div')(({theme})=>({
    display:'flex',
    [theme.breakpoints.down('sm')]:{
        width:'100%'
            },
    
    flexDirection:'column',
    gap:25,
    width:'43%',
    '&>*':{
        width:'75%',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
                },
    },
    '&>div':{
'&>p':{
    fontSize:18,
    color:'#62646a',
    lineHeight:'24px',
    letterSpacing:1
},
'&>h3':{
    fontSize:19,
    fontWeight:500,
    lineHeight:'26px',
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
        fontSize:17
            },
   marginBottom:8,
   gap:10
}
    }
    
}))
const Right=styled('div')(({theme})=>({
    display:'flex',
    width:'45%',
    [theme.breakpoints.down('sm')]:{
        width:'100%'
            },
}))
const Circle=styled('div')({
    display:'flex',
    alignItems:'center',
    height:18,
    width:18,
   borderRadius:'50%',
   border:'2px solid #62646a',
    justifyContent:'center',
    '&>img':{
        width:15,
        height:12
    }
})

const Image=styled('img')(({theme})=>({
    width:'100%',
    height:'55vh',
    [theme.breakpoints.down('sm')]:{
       height:230
            },
}))

const Bestpart = () => {
  return (
    <Container>
        <Left>
<h1>The best part? Everything.</h1>
<div>
    <h3><Circle><img src={right} alt="" /></Circle> Stick to your budget</h3>
    <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
</div>
<div>
    <h3><Circle><img src={right} alt="" /></Circle> Get quality work done quickly </h3>
    <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
</div>
<div>
    <h3><Circle><img src={right} alt="" /></Circle> Pay when you're happy</h3>
    <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
</div>
<div>
    <h3><Circle><img src={right} alt="" /></Circle> Count on 24/7 support</h3>
    <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
</div>

        </Left>

        <Right>
<Image src={photo}/>
        </Right>
    </Container>
  )
}

export default Bestpart
