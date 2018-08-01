import React from 'react'
import Link from 'gatsby-link'

import HubspotForm from '../components/hubspotform.js'
import MosaicDivider from '../components/mosaicdivider.js'

import BinoviLogo from '../assets/binovilogo_web.png'
import EYCLogo from '../assets/eyclogo_web.png'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-column" id="footer-nameplate">
        <div id="footer-nameplate-logo">
          <img src={BinoviLogo} />
        </div>
        <div id="footer-nameplate-eyc">
          A product of<br/>
          <img src={EYCLogo} />
        </div>
      </div>
      <div className="footer-column">
        <h4>Products</h4>
        <Link to="/binovipro">Binovi Pro</Link><br/>
        <Link to="/binovicoach">Binovi Coach</Link><br/>
        <Link to="/binovitouch">Binovi Touch</Link><br/>
        <Link to="/binovikit">Binovi Kit</Link><br/>
        <Link to="/comingsoon">Coming Soon</Link><br/>
      </div>
      <div className="footer-column">
        <h4>Information</h4>
        <Link to="/industries">Who Uses Binovi?</Link><br/>
        <Link to="/pricing">Pricing</Link><br/>
        <Link to="/getbinovi">Get Binovi</Link><br/>
        <Link to="/providers">Providers</Link><br/>
      </div>
      <div className="footer-column">
        <h4>Support</h4>
        <a href="https://support.eyecarrot.com" target="_blank">Support</a><br/>
        <Link to="/contact">Contact Us</Link><br/>
        <h4 id="footer-community">Community</h4>
        <Link to="/news">News + Blog</Link><br/>
      </div>
      <div className="footer-column" id="footer-newsletter">
        <h4>Newsletter</h4>
        <span className="footer-text">Sign up to receive the Persepectives by Eyecarrot newsletter and stay informed on Binovi Products and the Vision Therapy Industry.</span>
        <HubspotForm formId="52b52923-1a55-437d-b13b-f8aba2f13efa" isFooter="true"/>
      </div>
    </div>
    <div className="container">
      <div id="footer-copyright">
        &copy; 2018 Eyecarrot Innovations Corp.
      </div>
    </div>
  </footer>
)

export default Footer
