import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="contact">
        <div>
          <h3>Stay in the loop</h3>
          <p>We'd love to hear from you! Send us your questions, comments, or ideas.</p>
          <form>
            <input className="input1" placeholder="Your email address" />
            <input className='input2' type="submit" value="Sign up" />
          </form>
        </div>
        <div>
          <h3>Follow us</h3>
          <div className="btn-social">
            <button className='btn-1'><i className="fa fa-facebook" aria-hidden="true"></i></button>
            <button><i className="fa fa-twitter" aria-hidden="true"></i></button>
            <button><i className="fa fa-envelope-o" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className="btn-help">
          <h3>Need Help?</h3>
          <button>Contact Support</button>
        </div>
      </div>
      <hr />
      <div className="footer-content">
        <div>
          <img src="logo.png" alt="logo" className="logo" />
          <p>The world's first platform for auctioning premium products. Buy, sell, and exchange your items.</p>
        </div>
        <div className="footer-link">
          <ul>
            <h3>Auctions</h3>
            <li><a href="#">Upcoming Auction</a></li>
            <li><a href="#">Private Sales</a></li>
            <li><a href="#">Antique</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Collectibles</a></li>
          </ul>
          <ul>
            <h3>Account</h3>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Absentee bids</a></li>
            <li><a href="#">Purchases</a></li>
            <li><a href="#">Follow searches</a></li>
            <li><a href="#">Update details</a></li>
          </ul>
          <ul>
            <h3>Resources</h3>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Taxes</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Developer platform</a></li>
          </ul>
          <ul>
            <h3>Company</h3>
            <li><Link to="/about">About</Link></li> {/* Add Link to About */}
            <li><a href="#">Career</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Auction Houses</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="p-footer">@ 2024 Nhom 6 Networks, Inc</p>
    </div>
  );
}

export default Footer;
