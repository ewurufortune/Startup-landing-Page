import React from 'react';
import { Badge, Descriptions } from 'antd';
const Pricing = () => (
  <div id="pricing">
  <div class="price_card alpha">
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
  <div class="price_card bravo">
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
  <div class="price_card charlie">
    <div class="header">
      <span class="price">$25</span>
      <span class="name">Charlie Pack</span>
    </div>
    <ul class="features">
      <li>Complete documentation</li>
      <li>Working materials in PSD, Sketch and EPS format</li>
      <li>1 year access to the library</li>
      <li>2GB cloud storage</li>
    </ul>
    <button>Add to cart</button>
  </div>
</div>
);
export default Pricing;