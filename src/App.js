import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import api from './services/api';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

function App() {
  const [City, setCity] = useState(null)

  const id = 456777;
  const dados = `weather?format=json-cors&key=0c2a0623&woeid=`
  const r = dados + id
// useEffect(() => {
//   async function loadTransactions() {
//     const { data } = await api.get(`/${r}`);
//     setCity(data.results.forecast)
//   }
//   loadTransactions()
// }, [r]);


  return (
    <div className="App">
      <Header />

      <a target="_blank" href="https://console.hgbrasil.com/documentation/weather/tools">Busque o codigo de sua Cidade</a>
     <Typist startDelay={1000}>Weather Now</Typist>)

      
      {/* {City ? City.map((res, i) => {
        return (
          <div className="item" key={i}>
          <h1>{res.description}</h1>
          <div className="data">
            <p>{res.weekday}</p>
            <p>{res.date}</p>
          </div>
          <div className="temp">
            <strong>Minima: {res.min}°</strong>
            <strong>Máxima: {res.max}°</strong>
          </div>

        </div> */}
          <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
            <div className="item">
            <h1>description</h1>
            <div className="data">
              <p>weekday</p>
              <p>date</p>
            </div>
            <div className="temp">
              <strong>Minima: min°</strong>
              <strong>Máxima: max°</strong>
            </div>
            </div>
      {/* )}) : null} */}
    </div>
  );
}

export default App;
