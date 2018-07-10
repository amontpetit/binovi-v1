import React from 'react'
import Link from 'gatsby-link'

import HubspotForm from '../components/hubspotform.js'
import MosaicDivider from '../components/mosaicdivider.js'

import BinoviLogo from '../assets/binovilogo_web.png'

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-column" id="footer-nameplate">
        <div id="footer-nameplate-logo">
          <img src={BinoviLogo} />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
