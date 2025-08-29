import 'bootstrap/dist/css/bootstrap.min.css'
import React,{useState} from "react"
import "./home.css"
import {Container,Row,Col} from 'react-bootstrap';
import Card from "./Card"
import Basketcounter from "./Basketdis";
import { Tilt } from 'react-tilt'
import Carousel from 'react-bootstrap/Carousel';
import StarIcon from '@mui/icons-material/Star';
function Home(props)
{
    return(
        <div className={props.isToggled?"home_containerd":"home_containerl"}>
        <Carousel>
          <Carousel.Item><img className="home_image" alt="samsung m340"src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/619-8HSBytL._SX3000_.jpg"></img></Carousel.Item>
          <Carousel.Item><img className="home_image" alt="image2"src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61gpcWo7gzL._SX3000_.jpg"></img></Carousel.Item>
          <Carousel.Item><img className="home_image" alt="image3"src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71wWLa+GZXL._SX3000_.jpg"></img></Carousel.Item>
          <Carousel.Item><img className="home_image" alt="image4"src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81FSJQ1i5eL._SX3000_.jpg"></img></Carousel.Item>
          </Carousel>
            <Container className="container">
            <Row>
            <Col className={props.isToggled?"card_cold":"card_coll"}>
                <Card isToggled={props.isToggled} id="1" title="The Learn StartUp:How Constant Innovation Creates Radically Succesful Buisness PaperBack" img="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" price={1199} rate={<div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>} />
                </Col>
                <Col className={props.isToggled?"card_cold":"card_coll"}>
                    <Card isToggled={props.isToggled} id="2" title="Adidas Orignals Superstar White(Size-12 UK)" img="https://www.transparentpng.com/thumb/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png" price={8199} rate={<div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>} />
                </Col>
            </Row>
            <Row>
                <Col className={props.isToggled?"card_cold":"card_coll"}>
                <Card isToggled={props.isToggled} id="3" title="Apple Airpods Pro (2nd Gen,White)" img="https://assets.stickpng.com/images/60b79e8771a1fd000411f6be.png" price={24999} rate={<div><StarIcon/><StarIcon/><StarIcon/></div>}/>
                </Col>
                <Col className={props.isToggled?"card_cold":"card_coll"}>
                <Card isToggled={props.isToggled} id="4" title="Amazon Echo(3rd Gen) | Smart Speaker with inbuilt Alexa" img="https://www.pngarts.com/files/8/Alexa-Echo-Transparent-Background-PNG.png" price={3499} rate={<div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>}/>
                </Col>
                <Col className={props.isToggled?"card_cold":"card_coll"}>
                <Card isToggled={props.isToggled} id="5" title="New Apple iPad Pro (12.9-inch,Wi-Fi,128 GB,Silver,4th Gen)" img="https://assets.stickpng.com/images/61d4a70f8b51e20004664d4d.png" price={81999} rate={<div><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>}/>
                </Col>
            </Row>
            <Row>
                <Col className={props.isToggled?"card_cold":"card_coll"}>
                <Card isToggled={props.isToggled} id="6" title="New iPhone 14 (White,256 GB)" img="https://www.pngarts.com/files/18/iPhone-13-Edge-PNG-HQ-Pic-1.png" price={79999} rate={<div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>}/>
                </Col>
            </Row>
            <Row>
                <Col className={props.isToggled?"card_cold":"card_coll"}>
                <Card isToggled={props.isToggled} id="7" title="Sony PS5 PlayStation Console + God Of War Ragnarok | Standard Edition" img="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1675760265/Croma%20Assets/Gaming/Gaming%20Consoles/Images/267452_ipcrdh.png/mxw_640,f_auto" price={49990} rate={<div><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>}/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default Home;
