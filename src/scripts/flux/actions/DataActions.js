import axios from 'axios';
import alt from '../alt/Alt.js';

class DataActions {

  constructor(){
    const appUrl = 'http://cl-azabu.springs.pw/';

    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
  }

  // Method for getting data from the provided end point url
  api(endPoint){
    return new Promise((resolve, reject)=>{
      axios.get(endPoint).then((response)=>{
        resolve(response.data);
      }).catch((error)=>{
        reject(error);
      });
    });
  }

  //Method for getting pages data
  getPages(cb){
    this.api(this.pagesEndPoint).then((response)=>{
      this.getPosts(response, cb)
    });
    return true;
  }


  //Method for getting posts data
  getPosts(pages, cb){
    this.api(this.postsEndPoint).then((response)=>{
      const posts =  response;
      const payload = {pages, posts};
      this.getSuccess(payload);
      cb(payload);
    });
    return true;
  }

  // This returnes an object with Pages and Posts data together
  // The Alt Store will listen for this method to fire and will store the returned data
  getSuccess(payload){
      return payload;
  }

}

export default alt.createActions(DataActions);
