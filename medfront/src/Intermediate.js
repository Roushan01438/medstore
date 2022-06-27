import logo from './logo.svg';
import './App.css';
//import NavBar from './component/NavBar';
import Search from './component/Search';
import Footer from './component/Footer';
//import Additional from './component/Additional';
function Intermediate() {
  return (
    <div className="Intermediate">
      

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./med2.jpg" style={{height:600}}className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="./med3.jpg" style={{height:600}} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="./med4.jpg" style={{height:600}} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <div className="b-example-divider"></div>
      <div> <Search /></div>
    
    
    </div>
  );
}

export default Intermediate;
