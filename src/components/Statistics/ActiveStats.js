import React, { useState } from 'react';
import { Col, Row, Statistic } from 'antd';

const { Countdown } = Statistic;




const ActiveStats = () => {
   const [users,setUsers]=useState('000')

  const count= setInterval(randomNum,3000)
   function randomNum(){
    const selectNo=Math.floor(Math.random()*1000+203844)
   setUsers(selectNo)
   clearInterval(count)

  }
  
    return (
      <Row gutter={16}>
        <Col span={24}>
        <Statistic align='left' title="CurrentlyOnline" value={users} suffix="" />
    </Col>
        
      </Row>
    );
  };
  export default ActiveStats;