import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'
import ContactForm from '../components/contactform.js'

const Contact = ({data}) => {
  console.log(data);
  return(
    <div className="page-content" id="contact">
      <section className="lightbg">
        <div className="container">
          <div id="contact-hero">
            <ContactForm formId="addd572d-0fb7-4d20-b503-fee7cfce8b97"/>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Contact
