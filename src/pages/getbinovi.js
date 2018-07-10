import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'
import ContactForm from '../components/contactform.js'

class GetBinovi extends React.Component{

  //Do Stuff

  render(){
    return(
      <div className="page-content" id="get-binovi">
        <div id="get-binovi-hero">
          <div className="container">
            <h1 className="maintitle space-bottom-none">Get Binovi</h1>
            <div className="get-binovi-hero-image">
              <img src="/images/binovi/BinoviTouch.png" />
            </div>
            <div className="get-binovi-hero-image">
              <img src="/images/binovi/BinoviMasterHero.png" />
            </div>
          </div>
        </div>
        <section className="darkbg">
          <div className="container" id="get-binovi-content-wrapper">
            <div className="get-binovi-content">
              <h2 className="title center">Binovi Touch</h2>
              <div className="get-binovi-content-price" id="get-binovi-content-price-binovitouch">
                <h2><sup>$</sup>3,000<span className="small">USD</span></h2>
                <p className="small">+ shipping</p>
              </div>
              <p className="big">We have re-engineered the Wayne Saccadic Fixator —an industry standard for over three decades to measure and improve visual memory, reaction time and peripheral vision training— to integrate it with our Binovi platform.</p>
              <ul className="get-binovi-content-features">
                <li>Uses Bluetooth wireless to the Binovi Touch App for wireless control and data capture.</li>
                <li>Tried-and-tested activities ported to the new Binovi Touch App</li>
                <li>Best-in-class charting and data visualization</li>
                <li>Customizable tests to drill down into specific aspects of a patient’s vision skill.</li>
                <li>New 49-Light Red/Green/Blue tactile array</li>
                <li>4 <span className="sc">led</span>-Matrix Displays.</li>
                <li>Expandable with optional accessories, coming soon.</li>
              </ul>
              <div id="get-binovi-touch-addon">
                <h2 className="smalltitle">Add On</h2>
                <img src="/images/binovi/BinoviTouchSlider.png"/>
                <p>Add an optional adjustable wall mount for the new Binovi Touch to make changing the position of your new Binovi Touch as easy as possible.</p>
                <div className="get-binovi-content-price" id="get-binovi-content-price-addon">
                  <h2><sup>$</sup>500<span className="small">USD</span></h2>
                  <p className="small left">+ shipping</p>
                </div>
              </div>
              <div className="get-binovi-cta center">
                <button className="btn btn-eyc">Get Binovi Touch</button>
              </div>
            </div>
            <div className="get-binovi-content">
              <h2 className="title center">Binovi Platform</h2>
              <div className="get-binovi-content-price">
                <div>
                  <h3>Starter</h3>
                  <p>$99<span className="small">/month<br/> + per-patient fee</span></p>
                </div>
                <div>
                  <h3>Unlimited</h3>
                  <p>$3,600<span className="small">/year</span></p>
                </div>
              </div>
              <p className="big">Whether you are a new vision therapy practice looking to get started with the latest technology, or a power player trying to get the most efficient and effective care for your patients, Binovi has a package that can work for you.</p>
              <h2>Starter Package</h2>
              <ul className="get-binovi-content-features">
                <li>Binovi Vision Therapy Library complete with <span className="sc">hd</span> videos created with expert contribution from Dr. Robert Sanet.</li>
                <li>Practical Instruction Set by Dr. Leonard Press.</li>
                <li>Binovi Pro (i<span className="sc">os</span>) for you and your organization.</li>
                <li>Binovi Coach (i<span className="sc">os</span> & Android) for all your patients.</li>
                <li>Binovi Training library to get your staff up and running.</li>
                <li>Access to Binovi Academy educational content.</li>
                <li>Custom Activity Creator.</li>
                <li>Access to purchase Binovi Kit.</li>
              </ul>
              <h2>Unlimited Package</h2>
              <ul className="get-binovi-content-features">
                <li><strong>Everything from the Starter Package</strong></li>
                <li>Unlimited patient accounts.</li>
                <li>Automated patient import for existing patients.</li>
              </ul>
              <div className="get-binovi-cta center">
                <button className="btn btn-eyc">Get Access to Binovi</button>
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

export default GetBinovi