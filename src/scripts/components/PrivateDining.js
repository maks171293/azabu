import DataStore from '../flux/stores/DataStore.js';

class PrivateDining extends React.Component{
  render(){
    let page = DataStore.getPageBySlug("private-dining");
    return (
      <div>
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
      </div>
    )
  }
}

export default PrivateDining;
