import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="head">
        <h1 className="capital">Simple Wheather APP</h1>

        <form>
          <input
            type="text"
            placeHolder="City Name"
          />
          <button>Submit</button>
        </form>
      </div>

      <div className="whether">
        <h1 className="cap-1">Jairpur <span>IN</span> </h1>
        <h2 className="temp">9.60oc</h2>
        <img 
        src="http://openweathermap.org/img/w/50d.png"
        />
        <p>FOg</p>
      
      </div>



    </div>
  );
}

export default App;
