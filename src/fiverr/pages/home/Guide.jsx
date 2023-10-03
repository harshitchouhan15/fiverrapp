import styled from "styled-components"
import photo from '../../images/asset 62.png'
import photo1 from '../../images/asset 59.png'
import photo2 from '../../images/asset 60.png'
import photo3 from '../../images/asset 61.png'

const Container=styled.div`
    width: 87vw;
    margin-inline: auto;
    height: 135vh;
    display: flex;
    flex-direction: column;
    
    justify-content: space-evenly;
    @media screen and (max-width:600px) {
padding-block:20px;
  height: max-content;
  gap: 30px;
    }
`
const Top=styled.div`
  
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width:600px) {
 &>h1{
    font-size: 26px;
 }
    }
`
const Card=styled.div`
   cursor: pointer;
   width: 31.6%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width:600px) {
 gap: 5px;
  width: 100%;
    }
    &>p{
color: #95979d;
letter-spacing: 0.5px;
    }
    &>h3{
       font-weight: 400;
       @media screen and (max-width:600px) {
 font-size: 16px;
    }
    }
`
const Box=styled.div`
   
    display: flex;
   width: 100%;
 justify-content: space-between;
 @media screen and (max-width:600px) {
  flex-direction: column;
  height: max-content;
 
  gap: 35px;
    }
`

const Bottom=styled.div`
   position: relative;
    display: flex;
    height: 390px;
    overflow: hidden;
    @media screen and (max-width:600px) {
  height: 300px;
    }
   
`
const Image=styled.img`
    position: absolute;
    width: 100%;
    @media screen and (max-width:600px) {
  height: 250px;
    }
`
const Left=styled.div`
    width: 50%;
    padding: 130px 100px;
    z-index: 2;
    @media screen and (max-width:600px) {
padding: 30px;
  width: 100%;
    }
    &>h1{
        font-size: 48px;
        color: white;
        @media screen and (max-width:600px) {
 font-size: 25px;
 letter-spacing: 0.9px;
    }
    }
`
const Button=styled.button`
    border: none;
    border-radius: 4px;
   padding: 10px 27px;
   color: white;
width: max-content;
   font-size: 18px;
   margin-top: 40px;
   cursor: pointer;
   background-color: #1dbf73;
`
const Guide = () => {
  return (
    <Container>
        <Top>
<h1>Guides to help you grow</h1>
<Box>
    <Card>
        <img src={photo1} alt="" />
        <h3>Start an online Business and work from home</h3>
        <p>A complete guide to start a business online.</p>
    </Card>
    <Card>
        <img src={photo2} alt="" />
        <h3>Digital marketing make easy.</h3>
        <p>A practical guide to to understand what is digital marketing.</p>
    </Card>
    <Card>
        <img src={photo1} alt="" />
        <h3>Create a logo for your business</h3>
        <p>A step-by-step guide to create a memorable business logo.</p>
    </Card>
</Box>
        </Top>
        <Bottom>
            <Image src={photo}/>
            <Left>
                <h1>Suddenly it's all so doable.</h1>
<Button>Join fiverr</Button>
            </Left>
        </Bottom>
    </Container>
  )
}

export default Guide