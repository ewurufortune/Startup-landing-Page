import React from 'react';
import 'animate.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { FadeIn } from 'react-slide-fade-in';


import { Badge, Descriptions } from 'antd';
const Pricing = () => (
  <div class="background">
  <div class="container">
    <div class="panel pricing-table">

      <div class="pricing-plan">
      <FadeIn
      from="left"
      positionOffset={300}
      triggerOffset={200}
      delayInMilliseconds={400}
    >
      <Player
       
       autoplay={true}
       loop={false}
       controls={false}
       src="https://assets1.lottiefiles.com/packages/lf20_aoOp5Bl7k1.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>
        <h2 class="pricing-header">Student</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Basic access to platform and learning resources</li>
          <li class="pricing-features-item">Limited number of courses and learning materials</li>
          <li class="pricing-features-item">No personalized support or coaching</li>
        </ul>
        <span class="pricing-price">Free</span>
        <a href="#/" class="pricing-button">Sign up</a>
        </FadeIn>

      </div>
      <div class="pricing-plan">
      <FadeIn
      from="top"
      positionOffset={300}
      triggerOffset={100}
      delayInMilliseconds={400}
    >
      <Player
       
       autoplay={true}
       loop={false}
       controls={false}
       src="https://assets8.lottiefiles.com/packages/lf20_tCIUzD.json"
       style={{ height: '300px', width: '300px' }}
       ></Player>       <h2 class="pricing-header">Pro</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Unlimited access to all courses and learning materials</li>
          <li class="pricing-features-item">Personalized coaching and support from expert instructorsMultiple workers for more powerful apps</li>
          <li class="pricing-features-item">Additional features such as interactive exercises, quizzes, and assessments</li>
          <li class="pricing-features-item">Priority customer support</li>
 </ul>
        <span class="pricing-price">$150</span>
        <a href="#/" class="pricing-button is-featured">Free trial</a>
        </FadeIn>
      </div>
      
      <div class="pricing-plan">
      <FadeIn
      from="right"
      positionOffset={300}
      triggerOffset={200}
      delayInMilliseconds={400}
    >
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img"/>
        <h2 class="pricing-header">Enterprise</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">All features included in Pro plan</li>
          <li class="pricing-features-item">One-on-one tutoring with top industry experts</li>
          <li class="pricing-features-item">Customized learning plan and progress tracking</li>
 <li class="pricing-features-item">Exclusive access to advanced courses and learning materials</li>
 <li class="pricing-features-item"> Unlimited access to additional resources and tools
</li>
        </ul>
        <span class="pricing-price">$400</span>
        <a href="#/" class="pricing-button">Free trial</a>
        </FadeIn>

      </div>
    </div>
  </div>
</div>
);
export default Pricing;