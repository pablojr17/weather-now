import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import api from './services/api';
import chuva from './assets/chuva.png'
import sol from './assets/sol.png'

function App() {
  const [City, setCity] = useState(null)
  console.log(City)
  const id = 456777;
  const dados = `weather?format=json-cors&key=2347a232&woeid=`
  const r = dados + id

useEffect(() => {
  async function loadTransactions() {
    const { data } = await api.get(`/${r}`);
    setCity(data.results.forecast)
  }
  loadTransactions()
}, [r]);

  return (
    <div className="App">
      <Header />
      <h2>Previsão do tempo agora em:</h2>
       <h1 className="city">Cotegipe - BA</h1>
      
      {City ? City.map((res, i) => {
        return (
          <div className="item" key={i}>
          <h1 className="titulo">{res.description}</h1>
          <div className="data">
            <p>{res.weekday}</p>
            <p>{res.date}</p>
          </div>
          <div className="temp">
            <strong>Minima: {res.min}°</strong>
            <strong>Máxima: {res.max}°</strong>
          </div>
            <img className="chuva" src={chuva} alt=""/>
          </div>
            )}) : null}
    </div>
  );
}

export default App;
