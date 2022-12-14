import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import { Col, Divider, Row } from 'antd';
import BasicStats from './BasicStats';
import ActiveStats from './ActiveStats';
import CardStats from './CardStats';

function Statistics(){

return(
<>
    <Divider orientation="left">Look At The Numbers</Divider>
    <Row justify="center" align="top">
      <Col span={24}>
      <FadeIn
      from="top"
      positionOffset={100}
      triggerOffset={50}
      delayInMilliseconds={800}
    >
   <ActiveStats/>
    </FadeIn>

      </Col>
      <Col span={12}>
      <FadeIn
      from="left"
      positionOffset={400}
      triggerOffset={200}
      delayInMilliseconds={400}
    >
<BasicStats />
    </FadeIn>


      </Col>
      <Col span={12}>
      <FadeIn
      from="right"
      positionOffset={400}
      triggerOffset={200}
      delayInMilliseconds={600}
    >
     <CardStats /> 

    </FadeIn>
     </Col>
      
    </Row>
{/* 
    <Divider orientation="left">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider orientation="left">Align Bottom</Divider>
    <Row justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row> */}
  </>
)
  }
  export default Statistics