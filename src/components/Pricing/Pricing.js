import React from 'react';
import 'animate.css';
import { Player } from '@lottiefiles/react-lottie-player';

import { Badge, Descriptions } from 'antd';
const Pricing = () => (
  <div class="background">
  <div class="container">
    <div class="panel pricing-table">
      
      <div class="pricing-plan">
      <Player
       
       autoplay={true}
       loop={false}
       controls={false}
       src="https://assets1.lottiefiles.com/packages/lf20_aoOp5Bl7k1.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
        <h2 class="pricing-header">Personal</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Custom domains</li>
          <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
        </ul>
        <span class="pricing-price">Free</span>
        <a href="#/" class="pricing-button">Sign up</a>
      </div>
      
      <div class="pricing-plan">
      <Player
       
       autoplay={true}
       loop={false}
       controls={false}
       src="https://assets8.lottiefiles.com/packages/lf20_tCIUzD.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>       <h2 class="pricing-header">Small team</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Never sleeps</li>
          <li class="pricing-features-item">Multiple workers for more powerful apps</li>
        </ul>
        <span class="pricing-price">$150</span>
        <a href="#/" class="pricing-button is-featured">Free trial</a>
      </div>
      
      <div class="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img"/>
        <h2 class="pricing-header">Enterprise</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Dedicated</li>
          <li class="pricing-features-item">Simple horizontal scalability</li>
        </ul>
        <span class="pricing-price">$400</span>
        <a href="#/" class="pricing-button">Free trial</a>
      </div>
      
    </div>
  </div>
</div>
);
export default Pricing;