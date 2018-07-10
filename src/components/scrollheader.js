import React from 'react'

class ScrollHeader extends React.PureComponent{
    state = {
        classList: [],
        direction: 'down',
        value: 0
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var thisVal = window.scrollY;
        var header = document.getElementById('mainheader');
        
        if (thisVal > this.state.value)
        {
            this.setState({
                direction: 'down',
                value: thisVal
            });
            if (this.state.value > 112)
            {
                this.setState({
                    classList: ['collapsed']
                });
            }
        }
        else if (thisVal < this.state.value)
        {
            this.setState({
                classList: [],
                direction: 'up',
                value: thisVal
            });
        }
    }

    render(){
        return(
            <div className={this.state.classList.join(' ')}>{this.props.children}</div>
        )
    }
}

export default ScrollHeader