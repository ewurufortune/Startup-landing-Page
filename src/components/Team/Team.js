import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import Typography from 'antd/es/typography/Typography';
const data = Array.from({
  length: 1,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `Our Team`,
  avatar: 'https://picsum.photos/id/64/200/300',
  description:
    'EdTechX is a personal study tool that enable learners aquire any skill on-demand.',
  content:
    ' Our team is made up of passionate educators and top-notch technologists, dedicated to improving the learning experience for students everywhere. Educators and innovative technologists who are committed to providing the best possible learning experience for students.',
}));

const Team = () => (
  <List
    itemLayout="vertical"
    size="large"
    
    dataSource={data}

    renderItem={(item) => (
      <List.Item
        key={item.title}
      
        extra={
          <Player
       
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets8.lottiefiles.com/packages/lf20_BRtbrvuraq.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        <Typography>
        {item.content}
        </Typography>
      </List.Item>
    )}
  />
);
export default Team;