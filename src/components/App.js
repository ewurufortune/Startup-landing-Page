import React from 'react';
import HeaderCarousel from './Header/HeaderCarousel';
import Statistics from './Statistics/Statistics'
import Team from './Team/Team'
import Features from './Features/Features';
import { FadeIn } from 'react-slide-fade-in';
import Timelines from './Timeline/Timeline';
import Pricing from './Pricing/Pricing';
import SocialProof from './SocialProof/SocialProof';
import Footere from './Footer/Footer';
import { Space } from 'antd';
import Navbar from './Navbar/Navbar';
import { Typography } from 'antd';


import {  Layout, Menu, theme ,Row,Col,Divider} from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  const winSize=getWindowSize().innerWidth
  function selSize(){
    let size
    if (winSize<700){
  size='100% 0'
  
    }else{
      size='100% 0'
  
    }
    return size
  }
  const marge=selSize()
  console.log(getWindowSize().innerWidth);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
   <>
   
     
        <div className="logo" />
       <Navbar />
      <div className='header'>
      <HeaderCarousel/>

      </div>
      

      <Divider />
      
      <Content
        style={{
          padding: '0 50px',
        }}
      >
     
        <div
          className=" siteLayoutContent"
          style={{
            background: colorBgContainer,
            padding: '40px 50px',
        margin:'30% 0'

          }}
        >
        <div className='contentComponent features'>
         <FadeIn
      from="bottom"
      positionOffset={0}
      triggerOffset={0}
      delayInMilliseconds={600}
    >
    <Row>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
      <Timelines/>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
      <Features />
     

      </Col>
    </Row>
     
    </FadeIn>
    </div>
    </div>

    <div
          className="siteLayoutContent"
          style={{
            background: 'blue',
            padding: '40px 50px',
            marginTop:'10%',
            backgroundColor:' #25008a',
backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'
          }}
        >
        <div className='statisticsComponent statistics'>
        <Title>
        <Statistics />

        </Title>
        </div>
        </div>

    <div
          className="siteLayoutContent"
          style={{
            padding: '40px 50px',
            margin:'10% 0',
         

          }}
        >
    <div className='contentComponent team'>
        <Team />
        </div>
        </div>
   
<div className='contentComponent pricing'>
       <Pricing />
       </div>
      
        <SocialProof />
      </Content> 

    
        <Footere />
      
      </>
  );
};
export default App;