import React, { useState } from 'react';
import { Col, Row, Slider } from 'antd';
import { Player } from '@lottiefiles/react-lottie-player';

const SocialProof = () => {



    return(
   
<Row gutter={[16, 16]}>
  <Col span={6}>  <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/private_files/lf30_lz607hlz.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
       </Col>
  <Col span={6} > <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/datafiles/aiYllq3ZOQKa9KD7B7nDbmh56pTT5R3IYmnYjc5Q/swiftkey-logo.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
       </Col>
  <Col span={6} > <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/packages/lf20_llmfleqa.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
       </Col>
  <Col span={6} > <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/packages/lf20_tydxuimo.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
       </Col>

 
</Row>
    )

}
export default SocialProof