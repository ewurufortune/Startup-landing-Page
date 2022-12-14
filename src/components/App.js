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
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
         <FadeIn
      from="bottom"
      positionOffset={0}
      triggerOffset={0}
      delayInMilliseconds={800}
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
        <Team />
        <Statistics />
       <Pricing />
        {/* <Second call to action /> */}
        
        </div>
        <SocialProof />
      </Content> 

    
        <Footere />
      
      </>
  );
};
export default App;