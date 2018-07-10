import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider.js'
import MosaicBand from '../components/mosaicband.js'
import ContactForm from '../components/contactform.js'

class Pricing extends React.Component{

  //Do Stuff

  render(){
    return(
      <div className="page-content" id="pricing">
        <div id="pricing-hero">
          <div className="container">
            <h1 className="maintitle">Pricing</h1>
            <div className="pricing-wrapper">
              <div className="pricing-image">
                <img src="/images/binovi/BinoviTouch.png" />
              </div>
              <div className="pricing-content">
                <h2 className="title">Binovi Touch</h2>
                <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
              </div>
            </div>
          </div>
        </div>
        <section className="darkbg" id="pricing-hero-darkblock">
          <div className="container">
            <div className="pricing-cta">
              <button className="btn btn-eyc">Get Binovi Touch</button>
            </div>
            <div className="pricing-content">
              <div className="pricing-content-priceblock center">
                <h1 className="pricing-content-price"><sup>$</sup>3,000<span className="pricing-content-currency">USD</span></h1>
                <p className="small">+ shipping</p>
              </div>
            </div>
          </div>
        </section>
        <MosaicBand/>
        <section className="lightbg">
          <div className="container">
            <div className="pricing-wrapper">
              <div className="pricing-image">
                <img src="/images/binovi/BinoviMasterHero.png"/>
              </div>
              <div className="pricing-content">
                <h2 className="title">Binovi Platform</h2>
                <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="darkbg">
          <div className="container">
            <div className="pricing-cta">
              <button className="btn btn-eyc">Get Started with Binovi</button>
            </div>
            <div className="pricing-content">
              <div className="pricing-content-priceblock center">
                <div className="pricing-content-priceblock-platform">
                  <div>
                    <h3>Starter</h3>
                    <p>$99<span className="small">/month<br/> + per-patient fee</span></p>
                  </div>
                  <div>
                    <h3>Unlimited</h3>
                    <p>$3,600<span className="small">/year</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MosaicBand/>
        <section className="lightbg">
          <div className="container">
            <div className="pricing-wrapper">
              <div className="pricing-image">
                <img src="/images/binovi/BinoviTouch.png"/>
              </div>
              <div className="pricing-content">
                <h2 className="title">Binovi Kit</h2>
                <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="darkbg">
          <div className="container">
            <div className="pricing-cta">
              <a href="https://www.bernell.com/product/BINOVI/VT-Kits" target="_blank"><button className="btn btn-eyc">Get Binovi Kit for Your Practice</button></a>
            </div>
            <div className="pricing-content">
              <div className="pricing-content-priceblock center">
                <p className="big">Pricing and ordering available through Bernell. Discounts available for large orders.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mosaic">
          <div className="card">
            <ContactForm formId="addd572d-0fb7-4d20-b503-fee7cfce8b97"/>
          </div>
        </section>
      </div>
    )
  }
}

export default Pricing