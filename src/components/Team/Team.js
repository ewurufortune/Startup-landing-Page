import React from 'react';
import { FadeIn } from 'react-slide-fade-in';

const Team = () => (
  <div class="row">
  
  <div class="profile col-md-8 col-12"> 
  <div class="">
       <FadeIn
      from="bottom"
      positionOffset={0}
      triggerOffset={100}
      delayInMilliseconds={400}
   >
  <div class="card profile-card-3">
      <div class="background-block">
          <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
      </div>
      <div class="profile-lgthumb-block">
          <img src="https://pbs.twimg.com/profile_images/1529219489916665856/TZApu9r9_400x400.jpg" style={{width:'300px'}} alt="profile" class="profile"/>
      </div>
      <div class="card-content">
          <h2>Fortune Ewuru<small>CEO</small></h2>
          <div class="icon-block"><a href="www.linkedin.com/in/fortuneewuru"><i class="fa fa-linkedin"></i></a><a href="https://twitter.com/ewurufortune"> <i class="fa fa-twitter"></i></a><a href="https://www.fiverr.com/share/Eojp60"> <i class="fa fa-burger-fries"></i></a></div>
          </div>
      </div>
      </FadeIn>

</div>
</div>
  <div class="bio col-md-4 col-12">
  <h1>Meet Our Creator</h1>
  <h6>Fortune Ewuru is passionate about disrupting traditional education models and empowering learners of all ages to take control of their own learning journey. He believes that technology has the power to break down barriers and create new opportunities for students, and he is dedicated to using his skills and experience to drive innovation in the field of education.</h6>
  </div>
</div>
 
);
export default Team;
