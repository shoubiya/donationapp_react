import React from 'react';
import "./About.css";
import DonationNavbar from './DonationNavbar';

export default function About() {
  return (
    <div>
        <DonationNavbar/>
        <h1 className='abt'><b>ABOUT US</b></h1>
            <div className="container-fluid">
        <div className="col-lg-6 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
          <figure>
            <div className="media" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/donation-concept-donation-box-with-donation-clothes-charity-helping-poor-needy-people_122732-236.jpg?w=2000)'}} />
            <figcaption>
              <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="mask" x={0} y={0} width="100%" height="100%">
                    <rect id="alpha" x={0} y={0} width="100%" height="100%" />
                    {/* <text className="title" dx="50%" dy="2.5em">ABOUT US</text> */}
                    {/* <text className="title" dx="50%" dy="3.5em">US</text> */}
                    {/* <text className="title" dx="50%" dy="4.5em">MOMENT</text> */}
                  </mask>
                </defs>
                <rect id="base" x={0} y={0} width="100%" height="100%" />
              </svg>
            <div className="body">
            <p><b>We Rise By Liftting Others!!</b><br/>We’ve revolutionized the crowdfunding industry with our one-of-its-kind platform that allows people anywhere in the world to donate towards products needed by NGOs. With trust, transparency and empathy, we’re striving hard to create a better world by bringing people together to create a lasting impact.</p>
              </div>
            </figcaption><a href="#" />
          </figure>
        </div>
        {/* <div className="col-lg-6 col-md-6 hidden-sm hidden-xs">
          <figure>
            <div className="media" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_5.png)' }} />
            <figcaption>
              <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="mask" x={0} y={0} width="100%" height="100%">
                    <rect id="alpha" x={0} y={0} width="100%" height="100%" />
                    <text className="title" dx="50%" dy="2.5em">ENJOY</text>
                    <text className="title" dx="50%" dy="3.5em">EVERY</text>
                    <text className="title" dx="50%" dy="4.5em">MOMENT</text>
                  </mask>
                </defs>
                <rect id="base" x={0} y={0} width="100%" height="100%" />
              </svg>
              <div className="body">
                <p>Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone. Plaid skateboard man braid wayfarers.</p>
              </div>
            </figcaption><a href="#" />
          </figure>
        </div> */}
      </div>
    </div>
  )
}
