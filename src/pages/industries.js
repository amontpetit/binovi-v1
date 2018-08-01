import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'
import MosaicBand from '../components/mosaicband'
import BinoviIntro from '../components/binoviintro.js'
import CaseStudy from '../components/casestudy.js'
import ContactForm from '../components/contactform.js'

import Performance from '../assets/home-performance.jpg'
import Development from '../assets/home-development.jpg'
import Rehabilitation from '../assets/home-rehab.jpg'

const Industries = ({data}) => {
  return(
    <div className="page-content" id="industries">
      <section className="">
        <div className="container" id="industries-intro">
          <div id="industries-title">
            <h1 className="title-main">Who Uses Binovi?</h1>
          </div>
          <img className="fit" src="/images/binovi/BinoviMasterHero.png"/>
        </div>
      </section>
      <section id="industries-performance">
        <div className="polygon reverse darkbg">
          <div className="industries-halfwidth">
            <h1 className="title-main">Performance</h1>
            <p className="deck">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam.</p>
          </div>
          <div className="industries-halfwidth">
            <div className="industries-case-studies">
              {data.PerformanceCS.edges.map(({node}) => (
                  <Link to={node.fields.slug}>
                    <CaseStudy data={node} />
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="darkbg industries-block">
        <div>
          <div className="industries-block-content">
            <h2 className="industries-title">Performance</h2>
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <div className="industries-case-studies">
              {data.PerformanceCS.edges.map(({node}) => (
                  <Link to={node.fields.slug}>
                    <CaseStudy data={node} />
                  </Link>
              ))}
            </div>
          </div>
          <div className="industries-block-image">
            <img src={Performance} />
          </div>
        </div>
      </section>
      <section className="lightbg industries-block">
        <div>
          <div className="industries-block-content">
            <h2 className="industries-title">Development</h2>
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <div className="industries-case-studies">
              {data.DevelopmentCS.edges.map(({node}) => (
                  <Link to={node.fields.slug}>
                    <CaseStudy data={node} />
                  </Link>
              ))}
            </div>
          </div>
          <div className="industries-block-image">
            <img src={Development} />
          </div>
        </div>
      </section>
      <MosaicBand />
      <section className="darkbg industries-block">
        <div>
          <div className="industries-block-content">
            <h2 className="industries-title">Rehabilitation</h2>
            <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere tortor diam, eu maximus erat commodo vitae. Nulla lobortis, diam at suscipit blandit, leo sapien aliquam quam, eu dapibus nulla.</p>
            <div className="industries-case-studies">
              {data.RehabilitationCS.edges.map(({node}) => (
                  <Link to={node.fields.slug}>
                    <CaseStudy data={node} />
                  </Link>
              ))}
            </div>
          </div>
          <div className="industries-block-image">
            <img src={Rehabilitation} />
          </div>
        </div>
      </section>
      <ContactForm formId="addd572d-0fb7-4d20-b503-fee7cfce8b97"/>
    </div>
  )
}

export default Industries

export const  query = graphql`
query InvestPageQuery{
  PerformanceCS: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:3
    filter: { 
      frontmatter: {
        categories: { 
          in: "case study - performance"
        }
      }
    }
  ) 
  {
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
          imageURL
          excerpt
        }
      }
    }
  }
  DevelopmentCS: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:3
    filter: { 
      frontmatter: {
        categories: { 
          in: "case study - development"
        }
      }
    }
  ) 
  {
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
          imageURL
          excerpt
        }
      }
    }
  }
  RehabilitationCS: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:3
    filter: { 
      frontmatter: {
        categories: { 
          in: "case study - rehabilitation"
        }
      }
    }
  ) 
    {
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
          imageURL
          excerpt
        }
      }
    }
  }
}
`