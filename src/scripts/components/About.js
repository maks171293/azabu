import DataStore from '../flux/stores/DataStore.js';

class About extends React.Component{
  render(){
    let page = DataStore.getPageBySlug('about');
    return (
      <div>
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
      </div>
    )
  }
}

export default About;
