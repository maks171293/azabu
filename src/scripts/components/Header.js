import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';

class Header extends React.Component{
  render(){
    return  (<header>
      <div className="header-wrap">
            <Link to="/home" className="logo" ><img src={logo}/></Link>
          <div className="social-logo">
              <a href="https://www.facebook.com/azabu/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/azabu/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/channel/azabu"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
              <a href="https://vimeo.com/azabu"><i className="fa fa-vimeo" aria-hidden="true"></i></a>
          </div>
          <div id="input-nav-jumbotron">
          <input id="go" type="checkbox"/>
              <label htmlFor="go" className="main_menu">
                  <div className="hamburger-wrap">
                      <div id="nav-icon3">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                      </div>
                  </div>
              </label>
              <div className="menu_list">
                 <ul className="nav responsive__nav">
                          <li><a href="/index.html">home</a></li>
                          <li><a href="/menu.html">menu</a></li>
                          <li><a href="/gallery.html">gallery</a></li>
                          <li><a href="/preservations.html">reservations</a></li>
                          <li><a href="/events.html">events</a></li>
                          <li><a href="/press.html">press</a></li>
                          <li><a href="/about.html">about</a></li>
                          <li><a href="/contact.html">contact</a></li>
                          <li><a href="/lp.html">the den</a></li>
                  </ul>
                  <div className="social-logo social-responsive">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a>
                  </div>
              </div>
          </div>
      </div>
    </header>)
  }
}

export default Header;
