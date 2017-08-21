import DataStore from '../flux/stores/DataStore.js';
import biglogo from '../../img/biglogo.png';

class SplashPage extends React.Component{
  render(){
    let page = DataStore.getPageBySlug("splash");
    return (
      <div className="main__wrap">
        <div className="main__content main__content-landing-page">
        <div className="main__logo_box main__logo_box-splash">
            <img src={biglogo}/>
            <div dangerouslySetInnerHTML={ {__html: page.acf.destination} }></div>
            <ul className="city-ul">
                <li>{page.acf['city-field-1']}</li>
                <li>{page.acf['city-field-2']}</li>
                <li>{page.acf['city-field-3']}</li>
                <li>{page.acf['city-field-4']}</li>
            </ul>
            <form>
                <input type="text" placeholder="enter email for updates"/>
                <button>go</button>
            </form>
          </div>
      </div>
    </div>
    )
  }
}

export default SplashPage;
