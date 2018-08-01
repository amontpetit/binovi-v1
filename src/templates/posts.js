import React from "react";
import Link from 'gatsby-link';

import MosaicDivider from '../components/mosaicdivider.js';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-wrapper lightbg">
      <section className="blog-page">
        <div className="card">
          <div className="container space-bottom-huge">
            <h2 className="title">{post.frontmatter.title}</h2>
            <MosaicDivider />
            <div className="blog-sidebar">
              <h4 className="blog-author">{post.frontmatter.author}</h4>
              <h4 className="blog-date">{post.frontmatter.date}</h4>
              <div className="blog-categories">
                <ul className="blog-categories-list">
                {post.frontmatter.categories.map((category, index) => {
                  return (
                    <li key={category} className="category-tag">
                      <Link to={`/categories/${category}`}>{category}</Link>
                    </li>
                  )
                })}
                </ul>
              </div>
            </div>
            <div className="blog-content">
              <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
            </div>
          </div>
          <MosaicDivider />
        </div>
      </section>
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
        categories
        excerpt
      }
    }
  }
`;