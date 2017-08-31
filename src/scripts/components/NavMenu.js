import {Link} from 'react-router-dom';
import DataStore from '../flux/stores/DataStore';
import axios from 'axios';


class NavMenu extends React.Component{
  constructor(props){
    super(props);
    axios
      .get('http://cl-azabu.springs.pw/wp-json/menus/v1/menus/main')
      .then(({ data })=> {
        let menus = data.items;
        this.setState({
          menus
        })
      })
      .catch((err)=> {console.log(err);})
    this.state = {
      menus: []
    }
  }
  componentWillMount(){

  }
  render(){
    let allPages = DataStore.getAllPages();
    // allPages = _.sortBy(allPages, [function(page){return page.menu_order;}]); // Sort pages by order
    return(
      <div className="main__wrap main__wrap-nav">
      <div className="main__content main__content-nav">
        <div className="nav_wrap">
          <div className="nav__img"></div>
          <div className="nav__menu-wrap">
            <ul id="menu-main-1" className="nav main__nav">
              {
                this.state.menus.map((menu, index) => {
                    let slug = menu.url.split('/');
                    slug = slug[slug.length - 2];
                    if(slug.indexOf('.') === -1){
                    return (
                      <li key={index} className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${menu.id}`}>
                        <Link
                          to={`/${slug}`}
                          style={{marginRight: '10px'}}>
                            {menu.title}
                        </Link>
                    </li>
                    )
                  }else{
                    return (
                      <li key={index} className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-49"><Link to="/" >{menu.title}</Link></li>
                    )
                  }
                })
              }
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default NavMenu;
