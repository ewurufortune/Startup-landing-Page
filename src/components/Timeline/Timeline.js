import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
const Timelines = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <h3>Features That Help You</h3>
      <Timeline mode={mode}>
        <Timeline.Item label="Ease">Mobile app for on-the-go learning
</Timeline.Item>
        <Timeline.Item label="Focus On You">Personalized learning plans
</Timeline.Item>
        <Timeline.Item>Expert-led courses and workshops</Timeline.Item>
        <Timeline.Item label="Satifaction">Gamified rewards system
</Timeline.Item>
      </Timeline>
    </>
  );
};
export default Timelines;