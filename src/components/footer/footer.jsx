import React from 'react';
import './footer.css'; // Footer'a özgü stilleri içe aktarın

function Footer() {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="single_widget_area d-flex mb-30">
              <div className="footer-logo mr-50">
                <a href="#"><img src="img/core-img/logo2.png" alt="" /></a>
              </div>
              <div className="footer_menu">
                <ul>
                  <li><a href="shop.html">Shop</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="single_widget_area mb-30">
              <ul className="footer_widget_menu">
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Shipping and Delivery</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_heading mb-30">
                <h6>Subscribe</h6>
              </div>
              <div className="subscribtion_form">
                <form action="#" method="post">
                  <input type="email" name="mail" className="mail" placeholder="Your email here" />
                  <button type="submit" className="submit"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_social_area">
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Youtube"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>
              Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;