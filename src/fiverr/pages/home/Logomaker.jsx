
import styled from 'styled-components'
const Container=styled.div`
    height: 40vh;
    width: 87vw;
   margin-bottom: 100px;
    margin-inline:auto;
  background-color: #446ee7;
  overflow: hidden;
    display: flex;
    position: relative;
    align-items: center;
    
        @media screen and (max-width:600px) {
  flex-direction: column;
  height: max-content;
  width: 100%;
  padding-top: 20px;
  margin-bottom: 20px;
    }
`
const Left=styled.div`
 width: 50%;
 padding-left: 100px;
  color: white;
    gap: 20px;
    z-index: 2;
    display: flex;
   flex-direction: column;
   @media screen and (max-width:600px) {
  flex-direction: column;
  height: max-content;
  
  padding: 20px;
  padding-right: 50px;
  width: 100%;
    }
   &>h2{
    font-weight: 400;
   }
 &>h1{
    width: 55%;
    @media screen and (max-width:600px) {
  
  width: 100%;
    }
 }
`

const Image=styled.img`
   width: 100%;
   position: absolute;
   @media screen and (max-width:600px) {
  position: static;
  width: 300%;
transform: translateX(-50vw);
    }
`
const Button=styled.button`
  border: none;
border-radius: 4px;
  background-color: white;
  width: max-content;
  padding: 12px 25px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: blue;
  transition: all 0.4s ease;
  &:hover{
opacity: 0.8;
  }
`
const Logomaker = () => {
  return (
   <Container>
   <Left>
<h2>
fiverr logo maker
</h2>
<h1>Make an incredible logo
in minutes</h1>
<p>Pre-designed by top talent. Just add your touch.</p>
<Button>Try Fiverr Logo Maker</Button>
   </Left>
       <Image src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png'/>
      
   </Container>
  )
}

export default Logomaker