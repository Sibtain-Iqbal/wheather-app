import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [whther ,setwhether] = useState('')
  const [citydetail ,setdetail] = useState()


  const handles =(e)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${whther}&appid=751d66e130befad396405dc13796a57c&units=metrics`)
    .then((response)=> response.json())
    .then((finaldata)=>{
      if(finaldata.cod =="404"){
        setdetail(undefined)
      }
      else{
        setdetail(finaldata)
      }
    })

    e.preventDefault()
    console.log(whther);
    setwhether('')
  }

  return (
    <div className="App">

      <div className="head">
        <h1 className="capital">Simple Wheather APP</h1>

        <form onSubmit={handles}>
          <input  
            type="text"
            placeHolder="City Name"
            value={whther}
          onChange={(e)=> setwhether(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>

      <div className="whether">

        {
          citydetail !== undefined
          ?
          <>
          <h1 className="cap-1">{citydetail.name} <span>{citydetail.sys.country}</span> </h1>
        <h2 className="temp">{citydetail.main.temp}</h2>
        <img 
        src={`http://openweathermap.org/img/w/${citydetail.weather[0].icon}.png`}
        />
        <p>{citydetail.weather[0].description}</p>
          </>
          :
          "No data found"

        }





        
      
      </div>



    </div>
  );
}

export default App;
