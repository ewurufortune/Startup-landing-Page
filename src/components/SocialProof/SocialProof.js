import React, { useState } from 'react';
import { Col, Row, Slider } from 'antd';
import { Player } from '@lottiefiles/react-lottie-player';

const SocialProof = () => {



    return(
   
<Row gutter={[16, 16]}>
  <Col xs={24} sm={24} md={24} lg={6} xl={6}>  
  <div>
  <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/private_files/lf30_lz607hlz.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
  </div>
  
       </Col>
  <Col xs={24} sm={24} md={24} lg={6} xl={6} >
  <div>
  <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/datafiles/aiYllq3ZOQKa9KD7B7nDbmh56pTT5R3IYmnYjc5Q/swiftkey-logo.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
  </div>

       </Col>
  <Col xs={24} sm={24} md={24} lg={6} xl={6} > 
  <div>
  <Player
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/packages/lf20_llmfleqa.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
  </div>
  
       </Col>
  <Col xs={24} sm={24} md={24} lg={6} xl={6} > 
  <div>
  <Player
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/packages/lf20_tydxuimo.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
  </div>
 
       </Col>

 
</Row>
    )

}
export default SocialProof