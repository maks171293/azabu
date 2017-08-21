import DataStore from '../flux/stores/DataStore.js';
import biglogo from '../../img/biglogo.png';

class TheDen extends React.Component{
  render(){
    let page = DataStore.getPageBySlug("den");
    return (
      <div className="main__wrap">
        <div className="main__content main__content-landing-page">
        <div className="main__logo_box">
            <img src={biglogo}/>
            <p className="destination">choose your destination</p>
            <ul className="city-ul">
                <li>{page.acf['city-field-1']}</li>
                <li>{page.acf['city-field-2']}</li>
                <li>{page.acf['city-field-3']}</li>
                <li>{page.acf['city-field-4']}</li>
            </ul>
        </div>
    </div>
</div>
    )
  }
}

export default TheDen;
