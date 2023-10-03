import styled from "styled-components"
import photo1 from '../../images/service1.svg'
import photo2 from '../../images/service2.svg'
import photo3 from '../../images/service3.svg'
import photo4 from '../../images/service4.svg'
import photo5 from '../../images/service5.svg'
import photo6 from '../../images/service6.svg'
import photo7 from '../../images/service7.svg'
import photo8 from '../../images/service8.svg'
import photo9 from '../../images/service9.svg'
import photo10 from '../../images/service10.svg'

const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
height: 67vh;
gap: 15px;
@media screen and (max-width:600px) {
    height: max-content;
    padding-block:20px 0;
}
`
const Title=styled.h1`
   width: 87%;
   @media screen and (max-width:600px) {
    font-size: 28px;
    letter-spacing: 0.9px;
}
    margin-inline:auto
`
const CardsContainer=styled.div`
    display: flex;
   flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 87%;
    margin-inline:auto;
    padding: 20px;
    @media screen and (max-width:600px) {
   padding-bottom:0;
   width: 95%;
}
`
const Card=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
gap: 8px;
    width: 20%;
  cursor: pointer;
    padding: 20px;
    &:hover{
        &>hr{
            width: 70px;
        }
    }
    @media screen and (max-width:600px) {
   width: 50%;
   
}
`
const Image=styled.img`
    width: 50px;
`
const Hr=styled.hr`
height: 2px;
width: 45px;
border:  none;
background-color: green;
transition: all 0.7s ease;
`

const Services = () => {
  return (
    <Container>
<Title>
You need it, we've got it
</Title>

<CardsContainer>
{data.map(item=>(
    <Card key={item.id}>
<Image src={item.src}/>
<Hr />
<span>{item.name}</span>
</Card>
))}
</CardsContainer>



    </Container>
  )
}

export default Services

   const data=[
       {src:photo1,
        id:1,
       name:'Graphics & Design'},
       {src:photo2,
        id:2,
       name:'Digital Marketing'},
       {src:photo3,
        id:3,
       name:'Writing & Translation'},
       {src:photo4,
        id:4,
       name:'Video & Animation'},
       {src:photo5,
        id:5,
       name:'Music & Audio'},
       {src:photo6,
        id:6,
       name:'Programming & Tech'},
       {src:photo7,
        id:7,
       name:'Business'},
       {src:photo8,
        id:8,
       name:'Lifestyle'},
       {src:photo9,
        id:9,
       name:'Data'},
       {src:photo10,
        id:10,
       name:'Photography'},
   ]
  