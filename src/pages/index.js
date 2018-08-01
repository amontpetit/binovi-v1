import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider.js'
import MosaicBand from '../components/mosaicband.js'
import BinoviIntro from '../components/binoviintro.js'
import StaticTestimonial from '../components/testimonial-static.js'

import Performance from '../assets/home-performance.jpg'
import Development from '../assets/home-development.jpg'
import Rehabilitation from '../assets/home-rehab.jpg'

class IndexPage extends React.Component{

  render(){
    return(
      <div className="page-content" id="home">
        <div id="home-hero">
          <h1 className="title-main">Say Hello to the latest in Vision Health & Vision Performance Training</h1>
        </div>
        <section id="home-intro">
          <div id="home-intro-1">
            <p className="deck">The innovative Binovi platform helps optometric practices treat vision issues with in-office therapy as well as home-based activities by empowering people with a simple, reliable, and powerful way to measure and monitor the alignment between their eyes, body, and mind.</p>
          </div>
          <div id="home-intro-2">
            <p>We’ve partnered with leading experts in Vision Therapy to include content by recognized specialists to ensure that Binovi is up to date with valuable information.</p>
            <p>Together, we are building an unparalleled network of expert knowledge, insights, and data, that will transform human vision performance, and release the untapped potential of millions of people.</p>
            <div id="home-intro-2-cta">
              <button className="btn btn-eyc">Dive Into Binovi</button>
            </div>
          </div>
        </section>
        <section id="home-industries">
          <div className="home-industry-wrapper" id="home-industry-performance">
            <h2>Performance</h2>
            <div className="home-industry shadow-filter">
              <div className="polygon">
                <img className="fill" src={Performance} />
                <div className="home-industry-rollover">
                  <div className="home-industry-rollover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae.</div>
                  <Link to="/industries"><div className="home-industry-link"><span>See How</span><i className="fa fa-angle-right"></i></div></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-industry-wrapper" id="home-industry-development">
            <h2>Development</h2>
            <div className="home-industry shadow-filter">
              <div className="polygon">
                <img className="fill" src={Development} />
                <div className="home-industry-rollover">
                  <div className="home-industry-rollover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae.</div>
                  <Link to="/industries"><div className="home-industry-link"><span>See How</span><i className="fa fa-angle-right"></i></div></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-industry-wrapper" id="home-industry-rehabilitation">
            <h2>Rehabilitation</h2>
            <div className="home-industry shadow-filter">
              <div className="polygon">
                <img className="fill" src={Rehabilitation} />
                <div className="home-industry-rollover">
                  <div className="home-industry-rollover-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae.</div>
                  <Link to="/industries"><div className="home-industry-link"><span>See How</span><i className="fa fa-angle-right"></i></div></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-product" id="home-binovi-touch">
          <div className="polygon lightbg">
            <div className="home-product-description left">
              <h2 className="title-tertiary">Binovi Touch</h2>
              <p className="deck">A Purposeful and Powerful Tool for Vision Training and Vision Therapy.</p>
              <p>The original Wayne Saccadic Fixator defined the industry when it was introduced in the 1970s. Now, almost 50 years on, we have completely re-imagined the device from the inside out. The new Binovi Touch combines the fundamental qualities of the original device with innovation in almost every dimension.</p>
            </div>
          </div>
          <div className="home-product-image right">
            <img className="fit shadow-product" src="/images/binovi/BinoviTouch.png"/>
          </div>
        </section>
        <section className="home-product" id="home-binovi-pro">
          <div className="polygon">
            <div className="home-product-description right">
              <h2 className="title-tertiary">Binovi Pro</h2>
              <p className="deck">The control center of the Binovi platform, managing patients and their vision care programs.</p>
              <p>Our extensive and growing library of activities allow clinicians to create custom home therapy plans that sync automatically with Binovi Coach, communicate securely with patients at any time, and track progress over time for one patient or for all patients.</p>
            </div>
          </div>
          <div className="home-product-image left">
            <img className="fit shadow-product" src="/images/binovi/BinoviPro_Dashboard-1.png"/>
          </div>
        </section>
        <section className="home-product" id="home-binovi-coach">
          <div className="polygon lightbg">
            <div className="home-product-description left">
              <h2 className="title-tertiary">Binovi Coach</h2>
              <p className="deck">A coach ignites passion, motivates, and works with people to help them achieve their goals.</p>
              <p>Binovi Coach allows patients to access their doctor led therapy on their mobile app anywhere at anytime, making it easy for them to complete customized vision therapy. With Binovi Coach, we are improving the way Optometrists and their teams help treat visual issues connected to Learning Disabilities, Amblyopia, Strabismus, Convergence Insufficiency, mTBI/Concussion and related conditions.</p>
            </div>
          </div>
          <div className="home-product-image right">
            <img className="shadow-product" src="/images/binovi/BinoviCoach_Dashboard_angled.png"/>
            <img className="shadow-product" src="/images/binovi/BinoviCoach_List_angled.png"/>
            <img className="shadow-product" src="/images/binovi/BinoviCoach_Session_angled.png"/>
          </div>
        </section>
        <section className="home-product" id="home-binovi-kit">
          <div className="polygon">
            <div className="home-product-description right">
              <h2 className="title-tertiary">Binovi Kit</h2>
              <p className="deck">Everything you need to get started, all in one package!</p>
              <p>A comprehensive collection of industry-standard materials and equipment used to complement home activities. We’ve worked with the distributors to ensure kits are affordable, making it possible to issue one to every patient, ensuring they have access to the tools they need, all the time.</p>
            </div>
          </div>
          <div className="home-product-image left">
            <img className="fit shadow-product" src="/images/binovi/BinoviKit.png"/>
          </div>
        </section>
        <StaticTestimonial 
          imageAsset="/images/testimonials/sample-kickboxing.jpg"
          quote="This is a quote from an important person about our product/service. Short, sweet and persuasive!" 
          source="The person that said the thing"
        />
        <section className="mosaic-cta-wrapper" id="home-webinar">
          <div className="mosaic-wrap">
            <div className="card noshadow center">
              <h2 className="title-secondary">Join a Webinar</h2>
              <p className="deck">Join on of our webinar sessions to see how Binovi works, what it can do for you, and how it can help you deliver a better experience for patients, athletes, and staff.</p>
              <Link to="/getbinovi"><button className="btn btn-eyc">Dive into Binovi</button></Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export const  query = graphql`
query HomePageQuery{
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:3) {
    totalCount
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          date
          author
          categories
          excerpt
        }
      }
    }
  }
}
`

export default IndexPage