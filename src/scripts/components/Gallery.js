import DataStore from '../flux/stores/DataStore.js';

class Gallery extends React.Component{
  render(){
    let page = DataStore.getPageBySlug("gallery");
    return (
      <div>
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
      </div>
    )
  }
}

export default Gallery;
