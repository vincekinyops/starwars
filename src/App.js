import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
const axios = require('axios');

function App() {
  const [starShips, setStarships] = useState([])

  const requestStarships = () => {
    const request = axios.get('https://swapi.dev/api/starships/')
  
    const data = request.then((response) => response.data)
  
    return data
  }

  useEffect(() => {
    requestStarships().then(data => {
      if (data.results && data.results.length > 0) {
        setStarships(data.results)
      } else {
        console.log("All starships were destroyed!!")
      }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {
          starShips.map((ship) => {
            console.log(ship)
            try {
              const imgSrc = `./assets/${ship.name}.png`
              // TODO:  improve design
              //        display details other than name
              return (
                <div key={ship.name}>
                  <img style={{width: 250, height: 180}} alt={``} src={imgSrc} />
                  {ship.name}
                </div>
              )
            } catch (error) {
              return null
            }
            
          })
        }
      </header>
    </div>
  );
}

export default App;
