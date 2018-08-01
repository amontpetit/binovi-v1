import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider.js'
import MosaicBand from '../components/mosaicband.js'
import MosaicCTASection from '../components/mosaicctasection.js'
import StaticTestimonial from '../components/testimonial-static.js'

class BinoviCoach extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: 0
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.bcsc('init', this.updateInfo));
    }
    
    componentWillUnmount(){
        window.removeEventListener('load', this.bcsc);
    }

    updateInfo = (newState) => {
        console.log(newState);

        this.setState({
            active: newState,
        });
    }

    bcsc = (direction, callback) => {
        const images = document.getElementsByClassName('binovi-coach-image-item');
        const content = document.getElementsByClassName('binovi-coach-content-block');

        var newState = null;
        var existingState = this.state.active;

        switch(direction){
            //When the page first loads, reset the state to the default.
            case 'init':
                images[0].classList.toggle('block');
                content[0].classList.toggle('block');
                setTimeout(function(){
                    images[0].classList.toggle('active');
                    content[0].classList.toggle('active');
                }, 50);
                newState = 0;
                break;
            //When NEXT is pressed, load the next state. If at the end of the line, reset to default state.
            case 'next':
                if (this.state.active >= (images.length - 1))
                {
                    newState = 0;
                }
                else
                {
                    newState = (this.state.active + 1);
                }

                //first
                images[existingState].classList.toggle('active');
                content[existingState].classList.toggle('active');
                //then
                setTimeout(() => {
                    images[existingState].classList.toggle('block');
                    images[newState].classList.toggle('block');
                    content[existingState].classList.toggle('block');
                    content[newState].classList.toggle('block');
                }, 200);
                //then
                setTimeout(() => {
                    images[newState].classList.toggle('active');
                    content[newState].classList.toggle('active');
                }, 250);
                break;
            //When PREVIOUS is pressed, load the previous state. If at the beginning of the line, set to the end.
            case 'previous':
                if (this.state.active == 0)
                {
                    newState = images.length - 1;
                }
                else
                {
                    newState = (this.state.active - 1);
                }
                //first
                images[existingState].classList.toggle('active');
                content[existingState].classList.toggle('active');
                //then
                setTimeout(() => {
                    images[existingState].classList.toggle('block');
                    images[newState].classList.toggle('block');
                    content[existingState].classList.toggle('block');
                    content[newState].classList.toggle('block');
                }, 200);
                //then
                setTimeout(() => {
                    images[newState].classList.toggle('active');
                    content[newState].classList.toggle('active');
                }, 250);
                break;
        }
        
        //Update the data once all is said and done.
        callback(newState);
    }

    render(){
        return(
        <div className="page-content" id="binovi-coach">
            <section id="binovi-coach-hero">
                <div id="binovi-coach-hero-left">
                    <div id="binovi-coach-hero-left-images">
                        <img className="fit shadow-product" src="/images/binovi/BinoviCoachHistory.png"/>
                        <img className="fit shadow-product" src="/images/binovi/BinoviCoachSession.png"/>
                        <img className="fit shadow-product" src="/images/binovi/BinoviCoachDashboard.png"/>
                    </div>
                </div>
                <div id="binovi-coach-hero-right">
                    <h1 className="title-main">Binovi Coach</h1>
                    <p className="deck">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu. </p>
                    <div className="cta light">
                        <button className="btn-cta">Get Yours Today!</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="polygon-flat lightbg" id="binovi-coach-content">
                    <div id="binovi-coach-content-area">
                        <h2 className="title-secondary">Explore Binovi Coach</h2>
                        <div className="binovi-coach-content-block" id="block-0">
                            <p className="deck">Block 0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                            <p>Block 0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                        <div className="binovi-coach-content-block" id="block-1">
                            <p className="deck">Block 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                            <p>Block 0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                        <div className="binovi-coach-content-block" id="block-2">
                            <p className="deck">Block 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                            <p>Block 0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                        </div>
                    </div>
                    <div className="binovi-coach-controls" id="binovi-coach-controls-prev">
                        <div className="binovi-coach-slider-controls-button" id="bcsc-prev" onClick={(e) => this.bcsc('previous', this.updateInfo)}><i className="fa fa-angle-left"></i></div>
                    </div>
                    <div id="binovi-coach-image-area">
                        <img className="binovi-coach-image-item shadow-product" src="/images/binovi/BinoviCoachDashboard.png"/>
                        <img className="binovi-coach-image-item shadow-product" src="/images/binovi/BinoviCoachSession.png"/>
                        <img className="binovi-coach-image-item shadow-product" src="/images/binovi/BinoviCoachHistory.png"/>
                    </div>
                    <div className="binovi-coach-controls" id="binovi-coach-controls-next">
                        <div className="binovi-coach-slider-controls-button" id="bcsc-next" onClick={(e) => this.bcsc('next', this.updateInfo)}><i className="fa fa-angle-right"></i></div>
                    </div>
                    <div className="gradientbreak"></div>
                </div>
            </section>
            <StaticTestimonial 
                imageAsset="/images/testimonials/sample-kickboxing.jpg"
                quote="This is a quote from an important person about our product/service. Short, sweet and persuasive!" 
                source="The person that said the thing"
            />
            <MosaicCTASection 
                title="Get Access to Binovi Coach Today" 
                content="Sign up for Binovi today to get access to Binovi Pro and Binovi Coach as soon as possible!" 
                buttonLabel="Sign up now!" 
                buttonLink="https://itunes.apple.com/us/app/binovi-coach/id1355726787"
            />
        </div>
    )}
}
export default BinoviCoach