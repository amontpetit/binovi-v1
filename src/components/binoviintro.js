import React from 'react'
import Link from 'gatsby-link'

class BinoviIntro extends React.Component {    
    render() {
        return (
        <div id="binovi-intro">
            <div className="container space-bottom-gigantic">
                <div className="binovi-intro-block" id="binovi-intro-item1">
                    <img src={this.props.image1}/>
                    <h2>{this.props.title1}</h2>
                </div>
                <div className="binovi-intro-block" id="binovi-intro-item2">
                    <img src={this.props.image2}/>
                    <h2>{this.props.title2}</h2>
                </div>
                <div className="binovi-intro-block" id="binovi-intro-item3">
                    <img src={this.props.image3}/>
                    <h2>{this.props.title3}</h2>
                </div>
            </div>
            <div className="container">
                <p className="big center">Binovi products are in use in over 5,000 practices worldwide and are used to train and treat tens of thousands of people, from children to professional athletes, and everywhere in between.</p>
            </div>
        </div>
        )
    }
}

export default BinoviIntro