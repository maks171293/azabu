import DataStore from '../flux/stores/DataStore.js';

class Menu extends React.Component{
  render(){
    let page = DataStore.getPageBySlug('menu');
    return (
      <div style={{backgroundImage: `url(${page.acf.image_background})`}}>
        <h1>{page.title.rendered}</h1>

        <div dangerouslySetInnerHTML={ {__html: page.acf.description} } />
        <div dangerouslySetInnerHTML={ {__html: page.acf['lunch-time']} } />
        <div dangerouslySetInnerHTML={ {__html: page.acf['dinner-time']} } />
        <div dangerouslySetInnerHTML={ {__html: page.acf.brunch_time} } />
        <div dangerouslySetInnerHTML={ {__html: page.acf.happy_hours} } />

      </div>
    )
  }
}

export default Menu;
