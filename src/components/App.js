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

import {  Layout, Menu, theme ,Row,Col,Divider} from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
   <>
   
      <Header>
     
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      

      </Header>
      
      <HeaderCarousel/>
      <Divider />
      
      <Content
        style={{
          padding: '0 50px',
        }}
      >
     
        <div
          className="siteLayoutContent"
          style={{
            background: colorBgContainer,
            padding: '40px 50px',
            margin:'10% 0'

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
      <Col span={12}>
      <Timelines/>
      </Col>
      <Col span={12}>
      <Features />
     

      </Col>
    </Row>
     
    </FadeIn>
    </div>
         
    <div
          className="siteLayoutContent"
          style={{
            background: colorBgContainer,
            padding: '40px 50px',
            margin:'10% 0'

          }}
        >
    <div className='contentComponent team'>
        <Team />
        </div>
        </div>
        <div
          className="siteLayoutContent"
          style={{
            background: 'blue',
            padding: '40px 50px',
            margin:'10% 0'

          }}
        >
        <div className='contentComponent statistics'>
        <Statistics />
        </div>
        </div>
<div className='contentComponent pricing'>
       <Pricing />
       </div>
        </div>
        <SocialProof />
      </Content> 

    
        <Footere />
      
      </>
  );
};
export default App;