import React from 'react'
import Link from 'gatsby-link'

class StaticTestimonial extends React.Component {
    render() {
        //imageAsset is an image URL imported through the parent object
            //If no imageAsset is provided, default is a black background
        //quote is a text string used to fill the large bold text
        //source is a text string used to denote who the testimonial is from
        return(
            <section className="testimonial-section clearfix darkbg">
                <div className="testimonial-static">
                    <div className="testimonial-static-background" style={{backgroundImage: 'url(' + this.props.imageAsset + ')'}}></div>
                    <div className="testimonial-static-content container">
                    <blockquote className="testimonial">
                        <p>{this.props.quote}</p>
                        <h3>{this.props.source}</h3>
                    </blockquote>
                    </div>
                </div>
            </section>
        )
    }
}
export default StaticTestimonial