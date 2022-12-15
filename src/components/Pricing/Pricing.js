import React from 'react';
import 'animate.css';
import { Badge, Descriptions } from 'antd';
const Pricing = () => (
  <div id="pricing">
  <div class="price_card  animate__animated alpha animate__flipInX">
    <div class="header">
      <span class="price">$10</span>
      <span class="name">Alpha Pack</span>
    </div>
    <ul class="features">
      <li>Complete documentation</li>
      <li>Working materials in PSD and Sketch format</li>
    </ul>
    <button>Add to cart</button>
    <span class="tip">* Great for beginners!</span>
  </div>
  <div class="price_card bravo   animate__animatedanimate__flipInX">
    <div class="header">
      <span class="price">$15</span>
      <span class="name">Bravo Pack</span>
    </div>
    <ul class="features">
      <li>Complete documentation</li>
      <li>Working materials in PSD, Sketch and EPS format</li>
      <li>6 months access to the library</li>
    </ul>
    <button>Add to cart</button>
    <span class="tip">* Most popular!</span>
  </div>
  <div class="price_card charlie  animate__animated animate__flipInX">
    <div class="header">
      <span class="price">$25</span>
      <span class="name">Charlie Pack</span>
    </div>
    <ul class="features">
      <li>Complete documentation</li>
      <li>Working materials in PSD, Sketch and EPS format</li>
      <li>1 year access to the library</li>
    </ul>
    <button>Add to cart</button>
  </div>
</div>
);
export default Pricing;