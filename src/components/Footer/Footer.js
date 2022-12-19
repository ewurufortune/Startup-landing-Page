import { Footer } from "antd/es/layout/layout";
import React from "react";

export default function Footere(){

    return (
      <footer class="footer">
      <div class="container">
       <div class="row">
         <div class="footer-col">
           <h4>company</h4>
           <ul>
             <li><a href="#">about us</a></li>
             <li><a href="#">our courses</a></li>
             <li><a href="#">privacy policy</a></li>
             <li><a href="#">partner program</a></li>
           </ul>
         </div>
         <div class="footer-col">
           <h4>get help</h4>
           <ul>
             <li><a href="#">FAQ</a></li>
             <li><a href="#">technical support</a></li>
             <li><a href="#">payment options</a></li>
             <li><a href="#">account management</a></li>
           </ul>
         </div>
         <div class="footer-col">
           <h4>our courses</h4>
           <ul>
             <li><a href="#">math</a></li>
             <li><a href="#">science</a></li>
             <li><a href="#">history</a></li>
             <li><a href="#">language arts</a></li>
           </ul>
         </div>
         <div class="footer-col">
           <h4>follow us</h4>
           <div class="social-links">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-linkedin-in"></i></a>
           </div>
         </div>
       </div>
      </div>
   </footer>
  
 )
}