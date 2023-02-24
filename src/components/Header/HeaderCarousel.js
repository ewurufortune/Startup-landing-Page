import React from 'react';
import { Row, Col, Button } from 'antd';
import { ThunderboltTwoTone } from '@ant-design/icons';
import { Player } from '@lottiefiles/react-lottie-player';
import { FadeIn } from 'react-slide-fade-in';

import 'animate.css';
const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};

const HeaderCarousel = () => (
  <div className="headerCarousel">
    <Row className="" type="flex" justify="center" align="middle">
      <Col 
      xs={4}
      //  sm={12}
      >
      <div className='changeOpacity'>
      <Player
          autoplay
          loop
          controls={false}
          src="https://assets8.lottiefiles.com/private_files/lf30_TBKozE.json"
          style={{ height: '300px', width: '300px' }}
        ></Player>
        <Player
          autoplay
          loop
          controls={false}
          src="https://assets3.lottiefiles.com/packages/lf20_l4ny0jjm.json"
          style={{ height: '300px', width: '300px', marginRight: '10%' }}
        ></Player>
      </div>

      </Col>
      <Col 
      xs={8} 
      // sm={12}
      >
      <div class="row">
       <FadeIn
      from="bottom"
      positionOffset={100}
      trigerOffset={0}
      delayInMilliseconds={400}
   >
      <h1 className="headerText ">
          Transform the way you learn with EdTechX
        </h1>
        </FadeIn>
        <h2 className="headerTag"  style={{marginTop:'2rem'}}>- the leading education technology platform.</h2>
        <div className='signupButton'>
        <Button
          icon={<ThunderboltTwoTone />}
          size={"large"}
          href="https://www.google.com"
          ghost
        >
          SIGN UP
        </Button>
        </div>
     
      </div>
        
      </Col>
    </Row>
  </div>
);
export default HeaderCarousel;
