import DataStore from '../flux/stores/DataStore.js';

let eventWrapStyle = {
    width: '84%',
    overflow: 'hidden',
}


class Events extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeEvents: 0,
      currentWidth: 0
    }
  }
  componentDidMount(){
    document.querySelector(`[data-event-index='0']`).style.position = 'relative';
    document.querySelector(`[data-event-index='1']`).style.position = 'relative';
    document.querySelector(`[data-event-index='2']`).style.position = 'relative';
    document.querySelector(`[data-event-index='0']`).style.left = '0%';
    document.querySelector(`[data-event-index='1']`).style.left = '0%';
    document.querySelector(`[data-event-index='2']`).style.left = '0%';
    document.querySelector(`[data-event-index='0']`).style.display = 'block';
    document.querySelector(`[data-event-index='1']`).style.display = 'block';
    document.querySelector(`[data-event-index='2']`).style.display = 'block';
  }
  rightEventsArrowClick(event){
    event.preventDefault();
    let posts = DataStore.getAllPosts();
    let nextEvents = this.state.activeEvents+3;
    let items = document.querySelectorAll('[data-event-index]').length -1;
    if(nextEvents > items){
      return;
    }
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.position = 'absolute';
    document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.position = 'absolute';
    document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.position = 'absolute';
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.left = '-100%';
    document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.left = '-100%';
    document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.left = '-100%';
    document.querySelector(`[data-event-index='${nextEvents}']`).style.left = '0%';
    if(document.querySelector(`[data-event-index='${nextEvents+1}']`)){document.querySelector(`[data-event-index='${nextEvents+1}']`).style.left = '0%';}
    if(document.querySelector(`[data-event-index='${nextEvents+2}']`)){document.querySelector(`[data-event-index='${nextEvents+2}']`).style.left = '0%';}
    document.querySelector(`[data-event-index='${nextEvents}']`).style.position = 'relative';
    if(document.querySelector(`[data-event-index='${nextEvents+1}']`)){document.querySelector(`[data-event-index='${nextEvents+1}']`).style.position = 'relative';}
    if(document.querySelector(`[data-event-index='${nextEvents+2}']`)){document.querySelector(`[data-event-index='${nextEvents+2}']`).style.position = 'relative';}
    this.setState({
      activeEvents: this.state.activeEvents+3
    })
  }
  leftEventsArrowClick(event){
    event.preventDefault();
    let nextEvents = this.state.activeEvents-3;
    if(nextEvents < 0){
      return;
    }
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.position = 'absolute';
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`)){document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.position = 'absolute';}
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`)){document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.position = 'absolute';}
    document.querySelector(`[data-event-index='${this.state.activeEvents}']`).style.left = '100%';
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`)){document.querySelector(`[data-event-index='${this.state.activeEvents+1}']`).style.left = '100%';}
    if(document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`)){document.querySelector(`[data-event-index='${this.state.activeEvents+2}']`).style.left = '100%';}
    document.querySelector(`[data-event-index='${nextEvents}']`).style.left = '0%';
    document.querySelector(`[data-event-index='${nextEvents+1}']`).style.left = '0%';
    document.querySelector(`[data-event-index='${nextEvents+2}']`).style.left = '0%';
    document.querySelector(`[data-event-index='${nextEvents}']`).style.position = 'relative';
    document.querySelector(`[data-event-index='${nextEvents+1}']`).style.position = 'relative';
    document.querySelector(`[data-event-index='${nextEvents+2}']`).style.position = 'relative';
    this.setState({
      activeEvents: this.state.activeEvents-3
    })
  }
  render(){
    let posts = DataStore.getAllPosts();
    return (
      <div className="main__wrap main__wrap-events">
       <div className="main__content main__content-events">
        <a className="home__btn home__btn-beige" href="#"></a>
        <a href="#" className="close-btn"></a>
        <div className="events__content">
            <a onClick={(event)=>this.leftEventsArrowClick(event)} href="#" style={{zIndex: '5'}}  className="arrow arrow-left arrow-left-pos"></a>
            <div style={{width: '84%', overflow: 'hidden', justifyContent: 'flex-start'}} className="events__wrap">
              {
                posts.map((post, index)=>{
                  return(
                    <div key={index} data-event-index={index} style={{backgroundImage: `url(${post.acf.thumbnail})`, transition: 'all .7s ease', left: '100%', position: 'absolute', marginLeft: '25px', marginRight: '25px'}} className="events__block">
                        <p className="events__txt">{post.title.rendered}</p>
                        <p className="event__info">{post.date}, {post.title.rendered}</p>
                    </div>
                  )
                })
              }

            </div>
            <a onClick={(event)=>this.rightEventsArrowClick(event)} href="#" style={{zIndex: '5'}} className="arrow arrow-right arrow-right-pos"></a>
        </div>
    </div>
    </div>

    )
  }
}

export default Events;
