import DataStore from '../flux/stores/DataStore.js';

class Contact extends React.Component{
  render(){
    let page = DataStore.getPageBySlug("contact");
    return (
      <div className="main__wrap main__wrap-contact">
    <div className="main__content main__content-contact">
      <a className="home__btn home__btn-beige" href="#"></a>
       <a href="#" className="close-btn"></a>
       <div id="map">
       </div>
       <div className="contact__txt-wrap">
           <h2 className="title contact__title">{page.acf.main_greeting}</h2>
           <div dangerouslySetInnerHTML={ {__html: page.acf.contact_info} } />
       </div>
    </div>
</div>
    )
  }
}

export default Contact;
