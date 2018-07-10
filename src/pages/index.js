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
  
  componentDidMount(){
    window.addEventListener('load', this.animateSlider);
  }
  
  componentWillUnmount(){
    window.removeEventListener('load', this.animateSlider);
  }

  animateSlider = () => {
    console.log('Starting Slider');
    const sliderbox = document.getElementById('home-hero-slider-frames');
    const slides = document.getElementsByClassName('home-hero-slider-frame');
    const slideDesc = document.getElementById('home-hero-subcontent-productname');
    var sliderText = [];
    var position = 0;
    var nextPosition = 1;

    for (var i = 0; i < slides.length; i++)
    {
      sliderText.push(slides[i].alt);
    }

    var sliderInterval = setInterval(function(){
      if (position > 3)
      {
        position = 0;
        nextPosition = 1;
      }
      else
      {
        if (nextPosition == 4)
        {
          nextPosition = 0;
        }
        setTimeout(function(){
          sliderbox.classList.add('blur');
          slideDesc.classList.add('blur');
        });
        setTimeout(function(){
          sliderbox.classList.replace(('frame' + position), ('frame' + nextPosition));
        });
        setTimeout(function(){
          sliderbox.classList.remove('blur');
          slideDesc.innerText = sliderText[nextPosition];
          position++;
          nextPosition++;
        }, 200);        
        setTimeout(function(){
          slideDesc.classList.remove('blur');
        }, 400);
      }
    }, 4000);
  }

  render(){
    return(
      <div className="page-content" id="home">
        <section id="home-hero">
          <div id="home-hero-content">
            <div id="home-hero-content-inner">
              <h2>Say hello to the latest in Vision Health &amp; Vision Performance Training</h2>
            </div>
            <div id="home-hero-slider">
              <div id="home-hero-slider-frames" className="frame0">
                <img className="home-hero-slider-frame" src="https://wwwe.eyecarrot.com/wp-content/uploads/sf-flat.png"alt="Binovi Touch"/>
                <img className="home-hero-slider-frame" src="https://www.eyecarrot.com/wp-content/uploads/BinoviPro_Dashboard-1.png" alt="Binovi Pro"/>
                <img className="home-hero-slider-frame" src="https://www.eyecarrot.com/wp-content/uploads/BinoviCoach_Hero-1-e1486650383124.png" alt="Binovi Coach"/>
                <img className="home-hero-slider-frame" src="https://www.eyecarrot.com/wp-content/uploads/BinoviKit.png" alt="Binovi Kit"/>
              </div>
            </div>
            <h1>Hello Binovi</h1>
          </div>
          <div id="home-hero-subcontent">
            <div id="home-hero-subcontent-productname">Binovi Touch</div>
          </div>
          <div id="home-hero-intro">
            <div className="container">
              <div id="home-hero-intro-deck">
                <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
              </div>
              <div id="home-hero-intro-content">
                <p>Sed id lorem tellus. Quisque a tristique nibh, eu egestas ex. Aliquam eget nulla vel sapien convallis aliquam consequat eget nunc. Duis pulvinar mi gravida viverra fringilla. Sed quis consequat purus. Nullam non velit blandit, mattis augue eu, porttitor nunc. Morbi mattis dui eu ante viverra, ut porttitor tellus pulvinar. Morbi augue nulla, luctus ut convallis vel, porta non velit. Cras non leo sit amet odio venenatis ornare non eu elit. Sed molestie dignissim massa eu vulputate.</p>
                <div className="cta">
                  <button className="btn-cta">Dive into Binovi</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MosaicBand />
        <section id="home-intro" className="clearfix darkbg">
          <h2 className="title space-top-none space-bottom-none center">Binovi In Action</h2>
          <BinoviIntro 
            title1="Performance"
            image1={Performance}
            title2="Development"
            image2={Development}
            title3="Rehabilitation"
            image3={Rehabilitation}
          />
          <div className="container">
            <div className="cta">
              <Link to="/industries"><button className="btn-cta">See who is using Binovi right now!</button></Link>
            </div>
          </div>
        </section>
        <section id="home-overview" className="clearfix lightbg">
          <div className="container">
            <h2 className="title center space-top-none">Get to know Binovi</h2>
          </div>
          <div className="full-width space-bottom-huge">
            <div className="home-overview-image" id="home-overview-pro">
              <img src="https://www.eyecarrot.com/wp-content/uploads/TouchApp_TestSelect.png"/>
            </div>
            <div className="home-overview-content">
              <div className="home-overview-content-half">
                <h2 className="smalltitle center">Binovi Pro</h2>
              </div>
              <div className="home-overview-content-half">
                <h2 className="smalltitle center">Binovi Coach</h2>
              </div>
              <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
              <div className="home-overview-content-half">
                <div className="center">
                  <Link to="/binovipro"><button className="btn btn-eyc">Explore Binovi Pro</button></Link>
                </div>
              </div>
              <div className="home-overview-content-half">
                <div className="center">
                  <Link to="/binovicoach"><button className="btn btn-eyc">Explore Binovi Coach</button></Link>
                </div>
              </div>
            </div>
            <div className="home-overview-image center" id="home-overview-coach">
              <img src="https://www.eyecarrot.com/wp-content/uploads/BinoviCoach_Hero-1-e1486650383124.png" alt="Binovi Coach"/>
            </div>
          </div>
          <div className="full-width space-top-huge">
            <div className="home-overview-image" id="home-overview-touch">
              <img src="https://wwwe.eyecarrot.com/wp-content/uploads/sf-flat.png" alt="Binovi Touch"/>
            </div>
            <div className="home-overview-content">
              <div className="home-overview-content-half">
                <h2 className="smalltitle center">Binovi Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
                <div className="center">
                  <Link to="/binovitouch"><button className="btn btn-eyc">Explore Binovi Touch</button></Link>
                </div>
              </div>
              <div className="home-overview-content-half">
                <h2 className="smalltitle center">Binovi Kit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
                <div className="center">
                  <Link to="/binovikit"><button className="btn btn-eyc">Explore Binovi Kit</button></Link>
                </div>
              </div>
            </div>
            <div className="home-overview-image" id="home-overview-kit">
              <img src="https://www.eyecarrot.com/wp-content/uploads/BinoviKit.png" alt="Binovi Kit"/>
            </div>
          </div>
          <div className="container center">
            <h2 className="title">Coming Soon</h2>
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <div className="cta">
              <Link to="/comingsoon"><button className="btn-cta">Get a Sneak Peek!</button></Link>
            </div>
          </div>
        </section>
        <StaticTestimonial 
          imageAsset="/images/testimonials/sample-kickboxing.jpg"
          quote="This is a quote from an important person or company about our product or service. It should be short and sweet and persuasive!" 
          source="The person that said the thing"
        />
        <section className="mosaic clearfix" id="home-webinar">
          <div className="card" id="home-webinar-card">
            <div id="home-webinar-intro">
              <h2 className="title">Join a Webinar</h2>
              <p>Join on of our webinar sessions to see how Binovi works, what it can do for you, and how it can help you deliver a better experience for patients, athletes, and staff.</p>
              <div id="home-webinar-button">
                <button className="btn btn-eyc">Sign up today!</button>
              </div>
            </div>
            <div id="home-webinar-video"></div>
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