import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider.js'
import MosaicBand from '../components/mosaicband.js';
import MosaicCTASection from '../components/mosaicctasection.js';
import StaticTestimonial from '../components/testimonial-static.js';

class BinoviTouch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: 0
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.btsc('init', this.updateInfo));
    }
    
    componentWillUnmount(){
        window.removeEventListener('load', this.btsc);
    }

    updateInfo = (existingState, newState) => {
        console.log(newState);
        const imageArea = document.getElementById('binovi-touch-image-area');
        imageArea.classList.remove('block-' + existingState);
        imageArea.classList.add('block-' + newState);
        this.setState({
            active: newState
        });
    }

    btsc = (direction, callback) => {
        console.log(direction);
        const blocks = document.getElementsByClassName('binovi-touch-content-block');

        var existingState = this.state.active;
        var newState = null;

        switch(direction){
            //When the page first loads, reset the state to the default.
            case 'init':
                newState = 0;
                blocks[newState].classList.add('block');
                setTimeout(function(){
                    blocks[newState].classList.add('active');
                    document.getElementById('binovi-touch-image-area').classList.add('block-' + newState);
                }, 200);
                break;
            //When NEXT is pressed, load the next state. If at the end of the line, reset to default state.
            case 'next':
                if (this.state.active >= 4)
                {
                    newState = 0;
                }
                else
                {
                    newState = (this.state.active + 1);
                }
                blocks[existingState].classList.remove('active');
                setTimeout(function(){
                    blocks[existingState].classList.remove('block');
                    blocks[newState].classList.add('block');
                }, 200);
                setTimeout(function(){
                    blocks[newState].classList.add('active');
                    callback(existingState, newState);
                }, 400);
                break;
            //When PREVIOUS is pressed, load the previous state. If at the beginning of the line, set to the end.
            case 'previous':
                if (this.state.active == 0)
                {
                    newState = 4;
                }
                else
                {
                    newState = (this.state.active - 1);
                }
                blocks[existingState].classList.remove('active');
                setTimeout(function(){
                    blocks[existingState].classList.remove('block');
                    blocks[newState].classList.add('block');
                }, 200);
                setTimeout(function(){                    
                    blocks[newState].classList.add('active');
                    callback(existingState, newState);
                }, 400);
                break;
        }
    }

    render(){
        return(
        <div className="page-content" id="binovi-touch">
            <section id="binovi-touch-hero">
                <div id="binovi-touch-hero-left">
                    <img className="shadow-product fit" src="https://www.eyecarrot.com/wp-content/uploads/sf-flat-e1495051585566.png"/>
                </div>
                <div id="binovi-touch-hero-right">
                    <h1 className="title-main">Binovi Touch</h1>
                    <p className="deck">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu. </p>
                    <div className="cta light">
                        <button className="btn-cta">Get Yours Today!</button>
                    </div>
                </div>
            </section>
            <section id="binovi-touch-content-wrapper">
                <div className="polygon-flat lightbg" id="binovi-touch-content">
                    <div id="binovi-touch-content-area">
                        <h2 className="title-secondary">Explore Binovi Touch</h2>
                        <div className="binovi-touch-content-block" id="block-0">
                            <div className="binovi-touch-content-title">
                                <h3>My Feature Name (0)</h3>
                            </div>
                            <p>Block 0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                        <div className="binovi-touch-content-block" id="block-1">
                            <div className="binovi-touch-content-title">
                                <h3>My Feature Name (1)</h3>
                            </div>
                            <p>Block 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                        <div className="binovi-touch-content-block" id="block-2">
                            <div className="binovi-touch-content-title">
                                <h3>My Feature Name (2)</h3>
                            </div>
                            <p>Block 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                        <div className="binovi-touch-content-block" id="block-3">
                            <div className="binovi-touch-content-title">
                                <h3>My Feature Name (3)</h3>
                            </div>
                            <p>Block 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                        <div className="binovi-touch-content-block" id="block-4">
                            <div className="binovi-touch-content-title">
                                <h3>My Feature Name (4)</h3>
                            </div>
                            <p>Block 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                    </div>
                    <div id="binovi-touch-controls">
                        <div className="binovi-touch-slider-controls-button" id="btsc-prev" onClick={(e) => this.btsc('previous', this.updateInfo)}><i className="fa fa-angle-left"></i></div>
                        <div className="binovi-touch-slider-controls-button" id="btsc-next" onClick={(e) => this.btsc('next', this.updateInfo)}><i className="fa fa-angle-right"></i></div>
                    </div>
                    <div id="binovi-touch-image-area"></div>
                    <div className="gradientbreak"></div>
                </div>
            </section>
            <StaticTestimonial 
                imageAsset="/images/testimonials/sample-kickboxing.jpg"
                quote="This is a quote from an important person about our product/service. Short, sweet and persuasive!" 
                source="The person that said the thing"
            />
            <section id="binovi-touch-video">
                <div className="container">
                    <h2 className="title-secondary center">Binovi Touch in Action</h2>
                    <div id="binovi-touch-action-video"></div>
                </div>
            </section>
            <MosaicCTASection 
                title="Get Binovi Touch Today" 
                content="Download the Binovi Touch App from the Apple App Store or Google Play Store now to order your Binovi Touch Saccadic Fixator. Learn the ins and outs of the Binovi Touch App" 
                buttonLabel="Get Your Binovi Touch Today" 
                buttonLink="https://itunes.apple.com/us/app/binovi-touch/id1355726787"
            />
        </div>
    )}
}
export default BinoviTouch