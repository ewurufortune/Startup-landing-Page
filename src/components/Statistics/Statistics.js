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
      <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
      <FadeIn
      from="top"
      positionOffset={30}
      triggerOffset={50}
      delayInMilliseconds={200}
    >
   <ActiveStats/>
    </FadeIn>

      </Col>
      <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
      <FadeIn
      from="left"
      positionOffset={30}
      triggerOffset={200}
      delayInMilliseconds={200}
    >
    <div className='basicStats'>
    <BasicStats />

    </div>
    </FadeIn>


      </Col>
      <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
      <FadeIn
      from="right"
      positionOffset={30}
      triggerOffset={200}
      delayInMilliseconds={200}
    >
    <div>
    <CardStats /> 

    </div>

    </FadeIn>
     </Col>
      
    </Row>

  </>
)
  }
  export default Statistics