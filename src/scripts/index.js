import {render}             from 'react-dom';
import DataActions          from './flux/actions/DataActions.js'
require('../css/style.css');
require('../css/responsive.css');
// require('../css/font-awesome.min.css');


import NavMenu              from './components/NavMenu.js';
import Home                 from './components/Home.js';
import About                from './components/About.js';
import Menu                 from './components/Menu.js';
import Header               from './components/Header.js';
import Reservations         from './components/Reservations.js';
import Contact              from './components/Contact.js';
import Gallery              from './components/Gallery.js';
import Events               from './components/Events.js';
import Press                from './components/Press.js';
import PrivateDining        from './components/PrivateDining.js';
import SplashPage           from './components/SplashPage.js';
import TheDen               from './components/TheDen.js';
import Footer               from './components/Footer.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {

  templates = {
    'about': About,
    'menu': Menu,
    'reservations': Reservations,
    'contact': Contact,
    'menu': Menu,
    'press': Press,
    'gallery': Gallery,
    'private-dining': PrivateDining,
    'splash': SplashPage,
    'den': TheDen,
    'events': Events
  }
  buildRoutes(data){
    return data.pages.map((page, i)=>{
      return(
        <Route
          key={i}
          component={this.templates[page.slug]}
          path={`/${page.slug}`}
          exact
        />
      )
    })
  }

    run() {
      DataActions.getPages((response)=>{
        render(
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={ Home } exact />
                        {this.buildRoutes(response)}
                        <Route render={() => { return <Redirect to="/" /> }} />
                    </Switch>
                    <Footer />
                </div>
            </Router>

            , document.getElementById('app')
        );
      })

    }
}

new AppInitializer().run();
