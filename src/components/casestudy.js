import React from 'react'
import Link from 'gatsby-link'

class CaseStudy extends React.Component {
    componentWillMount(){
        console.log(this.props.data);
    }
    render() {
        return (
        <div className="case-study-wrapper" id={this.props.data.fields.slug}>
            <img src={this.props.data.frontmatter.imageURL} />
            <h2>{this.props.data.frontmatter.title}</h2>
        </div>
        )
    }
}

export default CaseStudy