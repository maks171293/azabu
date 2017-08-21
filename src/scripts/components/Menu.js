import DataStore from '../flux/stores/DataStore.js';

class Menu extends React.Component{
  render(){
    let page = DataStore.getPageBySlug('menu');
    return (
      <div className="main__wrap main__wrap-menu">
      <div className="main__content main__content-menu">
      <a href="#" className="close-btn"></a>
      <div className="menu__imgBox" style={{backgroundImage: `url(${page.acf.image_background})`}}></div>
      <a className="home__btn" href="#"></a>
      <div className="menu__wrap">
         <div className="menu__txt-wrap">
             <h2>menus</h2>
             <div dangerouslySetInnerHTML={ {__html: page.acf.description} } />
             <ul className="menu__ul">
                 <li><a href="" download>lunch</a></li>
                 <li><a href="" download>dinner</a></li>
                 <li><a href="" download>happy hour</a></li>
                 <li><a href="" download>brunch</a></li>
                 <li><a href="" download>kids menu</a></li>
                 <li><a href="" download>drinks</a></li>
             </ul>
             <h2>hours</h2>
             <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf['lunch-time']} } />
             <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf['dinner-time']} } />
             <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf.brunch_time} } />
             <div style={{display: 'inline-block'}} dangerouslySetInnerHTML={ {__html: page.acf.happy_hours} } />
          </div>
      </div>

    </div>
    </div>
    )
  }
}

export default Menu;
