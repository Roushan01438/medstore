import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Location from './component/Location';
import Contact from './component/Contact';
import CheckKart from './component/CheckKart';
import Intermediate from './Intermediate';
import Search from './component/Search';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
//import Location from './component/Location';
function App() {
  return (<div className="App">
    <Router>
    <NavBar />
      {/* <Intermediate /> */}


      <div className='container 'style={{marginTop:200}} >
        <Route exact path="/"> <Intermediate/></Route>
        <Route exact  path="/location"> <Location/></Route>
        <Route exact path="/contact" > <Contact/></Route>
        <Route exact path="/checkKart"> <CheckKart/></Route>
        </div>
        {/* <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={9} country="in" category="entertainment" /></Route> */}
        {/* <Route exact path="/general"> <News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={9} country="in" category="general" /></Route> */}
        {/* <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={9} country="in" category="health" /></Route>
            <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={9} country="in" category="science" /></Route>
            <Route exact path="/sports"> <News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={9} country="in" category="sports" /></Route>
            <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={9} country="in" category="technology" /></Route> */}

      
    </Router>
    <Footer/>
  </div>
  )
}

export default App;
