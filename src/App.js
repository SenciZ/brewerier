import React from 'react';
import axios from 'axios'
import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'

function App() {

  const [breweries, setBreweries] = useState([])
  const [searchWord, setSearchWord] = useState('')

  useEffect(()=>{
    axios.get(`https://api.openbrewerydb.org/breweries/search?query=${searchWord}`)
    .then(res => {const brews = res.data; setBreweries(brews)})
    .catch(err => console.log(err))
  },[searchWord])

  return (
    <div className="App">
      <h1> Search For Breweries </h1>
      <input onChange={ e => setSearchWord(e.target.value)} type='text' placeholder='Search breweries by keyword, city, state, or zip'></input>
      <div className='cardContainer'>

      {breweries.map((item,index)=> <div className="breweryCard" key={index}><h3 className='breweryName'>{item.name}</h3><h4>{item.city}, {item.state}</h4></div>)}
      </div>
    </div>
  );
}

export default App;
