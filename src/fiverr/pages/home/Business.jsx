import styled from "styled-components"
import right from '../../images/asset 77.svg'
import photo from '../../images/asset 27.png'
const Container=styled.div`
    display: flex;
    justify-content: center;
    background-color: #0d084d;
    align-items: center;
    height: calc(100vh - 110px);
    color:white;
    @media screen and (max-width:600px) {
    height: max-content;
    flex-direction: column;
    padding: 40px 20px;
    gap: 20px;
}
`
const Left=styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 200px;
    gap: 30px;
    padding: 10px;
    @media screen and (max-width:600px) {
    width: 100%;
    gap: 20px;
    padding-right: 0;
 &>h1{
    font-size: 28px;
    margin-top: 12px;
 }
}
    width: 45%;
    &>h3{
        font-weight: 400;
    }
    &>*{
        width: 65%;
        @media screen and (max-width:600px) {
    width: 90%;
}
    }
    &>span{
        &>div{
        display: flex;
        align-items: center;gap: 10px;
margin-top: 15px;
    }
    }
 
`
const Right=styled.div`
       @media screen and (max-width:600px) {
    width: 100%;
}
    width: 45%;
`
const Image=styled.img`
   width: 100%;
`
const Button=styled.button`
    border: none;
    border-radius: 5px;
   padding: 10px 20px;
   color: white;
   width: 40%;
   font-size: 18px;
   margin-top: 40px;
   cursor: pointer;
   background-color: #1dbf73;
   
        @media screen and (max-width:600px) {
    width: 70%;
    
    padding: 10px ;
    }
`
const Circle=styled.div`
   display: flex;
   align-items: center;
   width: 18px;
   height: 18px;
   border-radius: 50%;
   border: 2px solid #62646a;
    &>img{
        width:15px;
        height:12px}
 `
 const New=styled.button`
 border: none;
    border-radius: 15px;
   padding: 5px 10px;
   color: white;
   
   font-size: 14px;
   
   cursor: pointer;
   background-color: #17479f;
 `
const Business = () => {
  return (
    <Container>
        <Left>
            <h2>fiverr business <New>new</New></h2>
<h1>
A solution built for business</h1>
<h3>Upgrade to a curated experience to access vetted talent and exclusive tools</h3>
<span>
<div><Circle> <img src={right} alt="" /></Circle> Talent matching</div>
<div><Circle><img src={right} alt="" /> </Circle>Dedicated account management</div>
<div><Circle><img src={right} alt="" /> </Circle>Team collaboration tools</div>
<div><Circle><img src={right} alt="" /></Circle> Business payment solutions</div>
</span>
<Button>Explore Fiverr Business</Button>
        </Left>
        <Right>
<Image src={photo}/>
        </Right>
    </Container>
  )
}

export default Business