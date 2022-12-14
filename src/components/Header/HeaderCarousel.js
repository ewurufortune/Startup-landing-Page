import React from 'react';
import { Row, Col } from 'antd';
import { Player } from '@lottiefiles/react-lottie-player';
const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};


const HeaderCarousel = () => (
  <div className=''>
  <Row className='headerCarousel'>
  <Col span={12}>
  <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/private_files/lf30_TBKozE.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
  </Col>
  <Col span={12}>Transform the way you learn with EdTechX - the leading education technology platform.</Col>
</Row>
</div>
);
export default HeaderCarousel;