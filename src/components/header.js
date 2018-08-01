import React from 'react'
import Link from 'gatsby-link'

import BinoviLogo from '../assets/binovilogo_web.png'

class Header extends React.Component {
  render() {
    return (
      <header id="mainheader">
        <div className="" id="header-logo">
          <div id="header-logo-image">
            <Link to="/">
              <img src={BinoviLogo}/>
            </Link>
          </div>
          <div id="header-logo-buttons">
            <button className="header-buttons" id="header-button-signup">Sign Up</button>
            <button className="header-buttons">Login</button>
          </div>
        </div>  
        <div id="header-navigation">
          <span className="header-navigation-listitem" onClick={ToggleProductsNav}>Products</span>
          <div id="header-products-list-wrapper">
              <ul id="header-products-list">
                <Link to="/binovipro"><li className="header-products-listitem">Binovi Pro</li></Link>
                <Link to="/binovicoach"><li className="header-products-listitem">Binovi Coach</li></Link>
                <Link to="/binovitouch"><li className="header-products-listitem">Binovi Touch</li></Link>
                <Link to="/binovikit"><li className="header-products-listitem">Binovi Kit</li></Link>
                <Link to="/comingsoon"><li className="header-products-listitem">Coming Soon</li></Link>
              </ul>
          </div>
          <Link to="/industries" className="header-navigation-listitem">Who Uses Binovi?</Link>
          <Link to="/pricing" className="header-navigation-listitem">Pricing</Link>
          <Link to="/news" className="header-navigation-listitem">News + Blog</Link>
          <Link to="/getbinovi" className="header-navigation-listitem">Get Binovi</Link>
          <Link to="/providers" className="header-navigation-listitem">Providers</Link>
          <Link to="/contact" className="header-navigation-listitem">Contact Us</Link>
        </div>
        <div id="header-navigation-small">
          <button id="header-navigation-small-trigger" onClick={ToggleSmallNavigation}>
            <i className="fa fa-navicon" id="header-navigation-small-trigger-icon"></i>
          </button>
          <ul id="header-navigation-list-small">
            <Link to="/products"><li className="header-navigation-listitem-small">Products</li></Link>
            <Link to="/industries"><li className="header-navigation-listitem-small">Who Uses Binovi?</li></Link>
            <Link to="/pricing"><li className="header-navigation-listitem-small">Pricing</li></Link>
            <Link to="/news"><li className="header-navigation-listitem-small">News + Blog</li></Link>
            <Link to="/getbinovi"><li className="header-navigation-listitem-small">Get Binovi</li></Link>
            <Link to="/providers"><li className="header-navigation-listitem-small">Providers</li></Link>
            <Link to="/contact"><li className="header-navigation-listitem-small">Contact Us</li></Link>
          </ul>
        </div>
      </header>
    )
  }
}
function ToggleProductsNav()
{
  const div = document.getElementById('header-products-list-wrapper');
  const list = document.getElementById('header-products-list');
  const listitems = document.getElementsByClassName('header-products-listitem');

  if (div.classList.contains('in'))
  {
    list.classList.remove('visible');
    setTimeout(function(){div.classList.remove('expanded');}, 100);
    setTimeout(function(){div.classList.remove('in');}, 300);
  }
  else
  {
    div.classList.add('in');
    setTimeout(function(){div.classList.add('expanded')}, 100);
    setTimeout(function(){list.classList.add('visible')}, 300);
  }
}

function ToggleSmallNavigation()
{
  const nav = document.getElementById('header-navigation-list-small');
  nav.classList.toggle('in');
}

document.addEventListener('click', function()
{
  if (document.getElementById('header-navigation-list-small').classList.contains('in'))
  {
    ToggleSmallNavigation();
  }
});

export default Header