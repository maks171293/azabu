import DataStore from '../flux/stores/DataStore.js';

class TheDen extends React.Component{
  render(){
    let page = DataStore.getPageBySlug("den");
    return (
      <div>
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
      </div>
    )
  }
}

export default TheDen;
