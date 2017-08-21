import DataStore from '../flux/stores/DataStore.js';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeGallery: 'dine_gallery',
      images: [],
      activeImageIndex: 0
    }
  }
  changeActiveGallery(gallery, event){
    event.preventDefault();
    this.setState({
      activeGallery: gallery
    })
  }
  componentDidMount(){
    let index = this.state.activeImageIndex;
    document.querySelector(`[data-slide-index='${index}']`).style.left = '0';
  }
  buttonRightClick(event){
    event.preventDefault();
    let currentIndex = this.state.activeImageIndex;
    let nextIndex = this.state.activeImageIndex + 1;
    let page = DataStore.getPageBySlug("gallery");
    if(currentIndex === page.acf[this.state.activeGallery].length-1){
      return;
    }
    document.querySelector(`[data-slide-index='${currentIndex}']`).style.left = '-100%';
    document.querySelector(`[data-slide-index='${nextIndex}']`).style.left = '0';
    this.setState({
      activeImageIndex: nextIndex
    })
  }
  buttonLeftClick(event){
    event.preventDefault();
    let currentIndex = this.state.activeImageIndex;
    let nextIndex = this.state.activeImageIndex - 1;
    if(currentIndex === 0){
      return;
    }
    document.querySelector(`[data-slide-index='${currentIndex}']`).style.left = '100%';
    document.querySelector(`[data-slide-index='${nextIndex}']`).style.left = '0';
    this.setState({
      activeImageIndex: nextIndex
    })
  }
  render(){
    let page = DataStore.getPageBySlug("gallery");
    return (
      <div className="main__wrap main__wrap-gallery">
        <div className="main__content main__content-gallery">
            <a className="home__btn home__btn-beige" href="#"></a>
            <a href="#" className="close-btn"></a>
            <div style={{position: 'relative', overflow: 'hidden', width: '100%'}}>
              {
                page.acf[this.state.activeGallery].map((image, index)=>{
                  return (<div key={index} data-slide-index={index} style={{backgroundImage: `url(${image.guid})`,transition: 'all ease .7s', width: '100%', position: 'absolute', left: '100%'}} className="menu__imgBox gallery__imgBox">
                  </div>)
                })
              }
              <a style={{zIndex: '2'}} onClick={(event)=>this.buttonLeftClick(event)} href="#" className="arrow arrow-left"></a>
              <a style={{zIndex: '2'}} onClick={(event)=>this.buttonRightClick(event)} href="#" className="arrow arrow-right"></a>
            </div>
            <div className="links_wrap gallery__links_wrap">
            <ul className="gallery__links">
                <li><a onClick={(event)=>this.changeActiveGallery('dine_gallery', event)} href="#">{page.acf.name_1}</a></li>
                <li><a onClick={(event)=>this.changeActiveGallery('drinks_gallery', event)} href="#">{page.acf.name_2}</a></li>
                <li><a onClick={(event)=>this.changeActiveGallery('space_gallery', event)} href="#">{page.acf.name_3}</a></li>
            </ul>
              </div>
          </div>
      </div>

    )
  }
}

export default Gallery;
