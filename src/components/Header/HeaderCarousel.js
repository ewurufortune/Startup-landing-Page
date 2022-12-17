import React from 'react';
import { Row, Col,Button } from 'antd';
import {ThunderboltTwoTone} from '@ant-design/icons';
import { Player } from '@lottiefiles/react-lottie-player';
import 'animate.css';
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
  <Col flex={'1 1 200px'}>
  <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets8.lottiefiles.com/private_files/lf30_TBKozE.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
        <Player
       
       autoplay={true}
       loop={true}
       controls={false}
       src="https://assets3.lottiefiles.com/packages/lf20_l4ny0jjm.json"
       style={{ height: '300px', width: '300px',marginRight:'10%' }}
       ></Player>
  </Col>
  <Col flex={'1 1 200px'}>
  <h1 className=' headerText animate__animated'>Transform the way you learn with EdTechX </h1>
  <h2 className='headerTag'>- the leading education technology platform.</h2>
  <Button icon={<ThunderboltTwoTone />} size={'large'} href="https://www.google.com" ghost>Signup</Button>
  </Col>
</Row>
</div>
);
export default HeaderCarousel;