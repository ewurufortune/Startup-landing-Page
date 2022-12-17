import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Card,Row,Col} from 'antd';
const { Meta } = Card;
const Features = () => (
  <>
  
  <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
      <div className='cards'>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={      <Player
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets4.lottiefiles.com/private_files/lf30_Fy9W8c.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
}
  >
    <Meta title="Interactive lessons and exercises
" description="www.instagram.com" />
  </Card>
  </div>

      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
      <div className='cards'>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={      <Player
      
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets3.lottiefiles.com/packages/lf20_ufkrusj2.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
}
  >
    <Meta title="Collaborative tools for group work
" description="www.instagram.com" />
  </Card>
  </div>
      </Col>
    </Row>
  
  </>
);
export default Features;