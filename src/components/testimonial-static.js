import React from 'react'
import Link from 'gatsby-link'

class StaticTestimonial extends React.Component {
    render() {
        //imageAsset is an image URL imported through the parent object
        //quote is a text string used to fill the large bold text
        //source is a text string used to denote who the testimonial is from
        return(
            <section className="testimonial">
                <div className="testimonial-image-wrapper shadow-filter">
                    <div className="testimonial-image polygon">
                        <img className="fill" src={this.props.imageAsset} />
                    </div>
                </div>
                <div className="testimonial-content">
                    <p className="testimonial-quote">{this.props.quote}</p>
                    <p className="testimonial-source">{this.props.source}</p>
                </div>
            </section>
        )
    }
}
export default StaticTestimonial