import React from 'react'
import Link from 'gatsby-link'

import MosaicDivider from '../components/mosaicdivider'
import MosaicBand from '../components/mosaicband';

class BinoviCoach extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        //window.addEventListener('load', this.bpsc('init', this.updateInfo));
    }
    
    componentWillUnmount(){
        //window.removeEventListener('load', this.bpsc);
    }

    render(){
        return(
        <div id="binovi-coach"></div>
    )}
}
export default BinoviCoach