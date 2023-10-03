import styled from "styled-components"
import arrow from '../../images/asset 76.svg'
import profile7 from '../../images/asset 38.png'
import profile2 from '../../images/asset 40.png'
import profile6 from '../../images/asset 44.png'
import profile1 from '../../images/asset 42.jpeg'
import profile3 from '../../images/asset 46.jpeg'
import profile4 from '../../images/asset 48.jpeg'
import profile5 from '../../images/asset 50.jpeg'
import profile8 from '../../images/asset 52.jpeg'
import profile9 from '../../images/asset 54.jpeg'
import profile10 from '../../images/asset 56.jpeg'
import profile11 from '../../images/asset 58.png'
import { useState } from "react"

const Container=styled.div`
    height: 70vh;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Box=styled.div`
    width: 90vw;
   flex-direction: column;
    display: flex;
    position: relative;
align-items: center;
justify-content: center;
`
const Title=styled.h1`
    width: 87vw;
    color: black;
`
const Frame=styled.div`
padding: 27px 0;
   display: flex;
  width: 87vw;
  
   overflow: hidden;
   @media screen and (max-width:600px) {
  overflow-x: auto;
    }
`
const CardContainer=styled.div`
    display: flex;
    transition: all 1s ease;
    transform: translateX(-${props=>props.number*89.5}vw);
  
`
const Card=styled.div`
    display: flex;
    margin-right: calc((87vw - 1220px) / 3);
    overflow: hidden;
    @media screen and (max-width:600px) {
 margin-right: 20px;
    }
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 0.14px 2.29266px 0px, rgba(0, 0, 0, 0.047) 0px 0.37px 4.42626px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px;
    cursor: pointer;
    flex-direction: column;
    &>div{
        display: flex;
        gap: 10px;
        padding:  20px;
        background-color: white;
        align-items: center;
        &>img{
            border-radius: 50%;
            width: 35px;
            height: 35px;
        }
        &>span{
            display: flex;
            flex-direction: column;
            &>p{
                color: #95979d;
                font-size: 14px;
                line-height: 21px;
            }
            &>h3{
                color: #404145;
                font-size: 14px;
            }
        }
    }
`
const Image=styled.img`
    height: 240px;
    width: 305px;
`
const Circle=styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: ${props=>props.left};
    transform: rotate(${props=>props.left===0&&'180deg'});
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px;
    right: ${props=>props.right};
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius:25px;
    @media screen and (max-width:600px) {
  display: none;
    }
    z-index: 2;
    cursor: pointer;
    background-color: white;
    &>img{
        width: 9px;
    }
`


const Work = () => {
    const [num,setNum]=useState(0)
    const handleClick=(c)=>c==='left'?num>0?setNum(num-1):setNum(2):num<2?setNum(num+1):setNum(0)
  return (
    <Container>
        <Box>
            <Circle onClick={()=>handleClick('left')} left={0}><img src={arrow} alt="" /></Circle>
            <Circle onClick={()=>handleClick('r')} right={0}><img src={arrow} alt="" /></Circle>
            <Title>
            Inspiring work made on Fiverr
            </Title>
            <Frame>
                <CardContainer number={num}>
            {data.map(item=>(
                <Card >
                    <Image src={item.src}/>
                    <div>
                        <img src={item.profile} alt="" />
                        <span>
                            <h3>{item.title}</h3>
                            <p>{item.name}</p>
                        </span>
                    </div>
                </Card>
            ))}
                </CardContainer>
            </Frame>
        </Box>
    </Container>
  )
}

export default Work

const data=[
   {src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png',
    profile:profile1,
    name:'by passionshake',
    title:'Product Photography'
},
{src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png',
    profile:profile2,
    name:'by noneyn',
    title:'Product Photography'
},
{src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png',
    profile:profile3,
    name:'by passionshake',
    title:'Product Photography'
},
{   src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png',
    profile:profile4,
    name:'by passionshake',
    title:'Product Photography'
},
{   src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg',
    profile:profile5,
    name:'by passionshake',
    title:'Product Photography'
},
{   src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg',
    profile:profile6,
    name:'by passionshake',
    title:'Product Photography'
},
{   src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png',
    profile:profile7,
    name:'by passionshake',
    title:'Product Photography'
},
 {  src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png',
    profile:profile8,
    name:'by passionshake',
    title:'Product Photography'
},
{  src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg',
    profile:profile9,
    name:'by passionshake',
    title:'Product Photography'
},
{  src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png',
    profile:profile10,
    name:'by passionshake',
    title:'Product Photography'
},
{  src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png',
    profile:profile11,
    name:'by passionshake',
    title:'Product Photography'
},
{   src:'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png',
    profile:profile4,
    name:'by passion',
    title:'Product Photography'
}
]