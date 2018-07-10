import React from 'react'
import Link from 'gatsby-link'

class MosaicCTASection extends React.Component {
    render() {
        //title is...
        //content is...
        //buttonLabel is...
        //buttonLink is...
        return(
            <section className="mosaic">
                <div className="card">
                    <div className="container center">
                        <h2 className="title">{this.props.title}</h2>
                        <p className="big">{this.props.content}</p>
                        <a href={this.props.buttonLink}><button className="btn btn-eyc">{this.props.buttonLabel}</button></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default MosaicCTASection