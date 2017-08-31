import DataStore from '../flux/stores/DataStore.js';

class Reservations extends React.Component{
  componentDidMount(){
  }
  render(){
    let page = DataStore.getPageBySlug('reservations');
    return (
      <div className="main__wrap main__wrap-reserve">
        <div className="main__content main__content-pres">
        <div dangerouslySetInnerHTML={ {__html: page.content.rendered} } ></div>
      </div>
    </div>
    )
  }
}

export default Reservations;
