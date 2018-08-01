import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider.js'
import MosaicBand from '../components/mosaicband.js';
import MosaicCTASection from '../components/mosaicctasection.js';

class BinoviPro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: 0,
            position: 0 
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.bpsc('init', this.updateInfo));
    }
    
    componentWillUnmount(){
        window.removeEventListener('load', this.bpsc);
    }

    updateInfo = (newState, newPosition) => {
        console.log(newState, newPosition);

        this.setState({
            active: newState,
            position: newPosition
        });
    }

    bpsc = (direction, callback) => {
        const imageFrames = document.getElementsByClassName('binovi-pro-slider-images-item');
        const contentFrames = document.getElementsByClassName('binovi-pro-slider-content-item');
        const sliderImages = document.getElementById('binovi-pro-slider-images-wrapper');
        const sliderContent = document.getElementById('binovi-pro-slider-content-item-wrapper');

        var newState = null;
        var newPosition = null;
        
        switch(direction){
            //When the page first loads, reset the state to the default.
            case 'init':
                imageFrames[0].classList.toggle('active');
                newState = 0;
                newPosition = 0;
                break;
            //When NEXT is pressed, load the next state. If at the end of the line, reset to default state.
            case 'next':
                if (this.state.active >= 3)
                {
                    newState = 0;
                    newPosition = 0;
                }
                else
                {
                    newState = (this.state.active + 1);
                    newPosition = (newState * 60);
                }
                imageFrames[this.state.active].classList.toggle('active');
                imageFrames[newState].classList.toggle('active');
                contentFrames[this.state.active].classList.toggle('active');
                contentFrames[newState].classList.toggle('active');

                sliderImages.style.left = '-' + newPosition + '%';
                sliderContent.style.left = '-' + newPosition + '%';
                break;
            //When PREVIOUS is pressed, load the previous state. If at the beginning of the line, set to the end.
            case 'previous':
                if (this.state.active == 0)
                {
                    newState = 3;
                    newPosition = (newState * 60);
                }
                else
                {
                    newState = (this.state.active - 1);
                    newPosition = (newState * 60);
                }
                imageFrames[this.state.active].classList.toggle('active');
                imageFrames[newState].classList.toggle('active');
                contentFrames[this.state.active].classList.toggle('active');
                contentFrames[newState].classList.toggle('active');
                
                sliderImages.style.left = '-' + newPosition + '%';
                sliderContent.style.left = '-' + newPosition + '%';
                break;
        }
        //Update the data once all is said and done.
        callback(newState, newPosition);
    }

    render(){
        return(
        <div className="page-content" id="binovi-pro">
            <section>
                <div id="binovi-pro-hero">
                    <div id="binovi-pro-hero-left">
                        <h1 className="title-main">Binovi Pro</h1>
                        <p className="deck">The control center of the Binovi platform, enabling you to manage your patients and their vision care programs.</p>
                        <div className="cta light">
                            <button className="btn-cta">Sign up now!</button>
                        </div>
                    </div>
                    <div id="binovi-pro-hero-right">
                        <img className="fit shadow-product" src="https://www.eyecarrot.com/wp-content/uploads/MobileProductHero.png"/>
                    </div>
                </div>
                <div className="polygon reverse lightbg" id="binovi-pro-sliderblock">
                    <h2 className="title-secondary center">Explore Binovi Pro</h2>
                    <div id="binovi-pro-slider-images">
                        <div id="binovi-pro-slider-images-wrapper">
                            <div className="binovi-pro-slider-images-item" id="bpsi-1">
                                <img className="fit shadow-product" src="https://www.eyecarrot.com/wp-content/uploads/TouchApp_TestSelect.png"/>
                            </div>
                            <div className="binovi-pro-slider-images-item" id="bpsi-2">
                                <img className="fit shadow-product" src="https://www.eyecarrot.com/wp-content/uploads/TouchApp_TestSelect.png"/>
                            </div>
                            <div className="binovi-pro-slider-images-item" id="bpsi-3">
                                <img className="fit shadow-product" src="https://www.eyecarrot.com/wp-content/uploads/TouchApp_TestSelect.png"/>
                            </div>
                            <div className="binovi-pro-slider-images-item" id="bpsi-4">
                                <img className="fit shadow-product" src="https://www.eyecarrot.com/wp-content/uploads/TouchApp_TestSelect.png"/>
                            </div>
                        </div>
                    </div>
                    <div id="binovi-pro-slider-controls-wrapper">
                        <div id="binovi-pro-slider-controls">
                            <button className="binovi-pro-slider-controls-button" id="bpsc-left" onClick={(e) => this.bpsc('previous', this.updateInfo)}><i className="fa fa-angle-left"></i></button>
                            <button className="binovi-pro-slider-controls-button" id="bpsc-right" onClick={(e) => this.bpsc('next', this.updateInfo)}><i className="fa fa-angle-right"></i></button>
                        </div>
                    </div>
                    <div id="binovi-pro-slider-content">
                        <div id="binovi-pro-slider-content-item-wrapper">
                            <div className="binovi-pro-slider-content-item active" id="bpsc-content-1">
                                <div className="binovi-pro-slider-content-item-title">
                                    <h3>My Feature Name</h3>
                                </div>
                                <div className="binovi-pro-slider-content-item-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu. Praesent eget risus eros. Aliquam blandit aliquam lectus. Curabitur tempor, urna ac vestibulum viverra, justo quam placerat nisl, eget porta ante dui ut enim. </p>
                                </div>
                            </div>
                            <div className="binovi-pro-slider-content-item" id="bpsc-content-2">
                                <div className="binovi-pro-slider-content-item-title">
                                    <h3>My Feature Name</h3>
                                </div>
                                <div className="binovi-pro-slider-content-item-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu. Praesent eget risus eros. Aliquam blandit aliquam lectus. Curabitur tempor, urna ac vestibulum viverra, justo quam placerat nisl, eget porta ante dui ut enim. </p>
                                </div>
                            </div>
                            <div className="binovi-pro-slider-content-item" id="bpsc-content-3">
                                <div className="binovi-pro-slider-content-item-title">
                                    <h3>My Feature Name</h3>
                                </div>
                                <div className="binovi-pro-slider-content-item-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu. Praesent eget risus eros. Aliquam blandit aliquam lectus. Curabitur tempor, urna ac vestibulum viverra, justo quam placerat nisl, eget porta ante dui ut enim. </p>
                                </div>
                            </div>
                            <div className="binovi-pro-slider-content-item" id="bpsc-content-4">
                                <div className="binovi-pro-slider-content-item-title">
                                    <h3>My Feature Name</h3>
                                </div>
                                <div className="binovi-pro-slider-content-item-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu. Praesent eget risus eros. Aliquam blandit aliquam lectus. Curabitur tempor, urna ac vestibulum viverra, justo quam placerat nisl, eget porta ante dui ut enim. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="binovi-admin-block">
                <div id="binovi-admin-image">
                    <img src="https://www.eyecarrot.com/wp-content/uploads/BinoviAdmin_Hero-2.png"/>
                </div>
                <div id="binovi-admin-description">
                    <h2 className="title-secondary">Total Control with Binovi Admin</h2>
                    <p className="deck">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus, pretium pulvinar arcu. </p>
                </div>
            </section>
            <MosaicCTASection 
                title="Sign up for Binovi" 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus suscipit ipsum vel mattis. Donec ante orci, vulputate et congue condimentum, luctus id ipsum. Nulla quam lorem, gravida id purus dapibus." 
                buttonLabel="Sign Up Now!" 
                buttonLink="/getbinovi"
            />
        </div>
    )}
}
export default BinoviPro