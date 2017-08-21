import DataStore from '../flux/stores/DataStore.js';
import NavMenu from './NavMenu.js';

class Home extends React.Component{
  render(){
    let allData = DataStore.getAll();
    console.log(allData);
    return(
      <NavMenu />
    );
  }
}

export default Home;
