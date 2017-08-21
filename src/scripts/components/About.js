import DataStore from '../flux/stores/DataStore.js';

class About extends React.Component{
  render(){
    let page = DataStore.getPageBySlug('about');
    return (
        <div className="main__wrap main__wrap-about">
        <div className="main__content main__content-about">
            <a className="home__btn home__btn-beige" href="#"></a>
            <a href="#" className="close-btn"></a>
       <div className="video__wrap">
           <div className="video__box">
               <a href="#" className="play__btn"></a>
           </div>
            <div className="about__txt-wrap">
                <h2 className="about__title">{page.acf.title}</h2>
                <div dangerouslySetInnerHTML={ {__html: page.acf.text} }></div>
            </div>
      </div>
      </div>
      </div>
    )
  }
}

export default About;
