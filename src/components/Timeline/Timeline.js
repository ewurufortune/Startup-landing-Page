import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
const Timelines = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      {/* <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group> */}
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