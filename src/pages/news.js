import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider.js'
import MosaicBand from '../components/mosaicband.js'

const News = ({data}) => {
  console.log(data);

  //Trim the excerpt from each post to a set number of characters and add trailing ellipsis
  data.allMarkdownRemark.edges.map(({node}) => (node.frontmatter.excerpt = node.frontmatter.excerpt.substring(0, 144) + '…'))

  return(
    <div className="page-content" id="blog">
      <div className="container">
        <h1 className="maintitle">News + Blog</h1>
      </div>
      <MosaicBand/>
      <section className="lightbg">
        {data.allMarkdownRemark.edges.map(({node}) => (
            
            <div key={node.fields.slug} className="blog-post">
              <div className="blog-card">
                <h4 className="blog-title"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h4>
                    <p className="blog-excerpt">{node.frontmatter.excerpt}</p>
                <div className="blog-more">
                  <Link to={node.fields.slug}> More <i className="fa fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
        ))}
      </section>
      <MosaicBand />
    </div>
  )
}

export default News

export const  query = graphql`
query  NewsBlogPageQuery{
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit:9999
  ) 
    {
    totalCount
    edges {
      node {
        fields{
          slug
        },
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