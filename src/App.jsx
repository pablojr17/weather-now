import React, { useEffect, useState, useCallback, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import { Form } from "@unform/web";
import api from './services/api';
import chuva from './assets/chuva.png'
import nublado from './assets/nublado.png'
import parcialnub from './assets/parcial-nub.png'
import sol from './assets/sol.png'
import neve from './assets/neve.png'
import trov from './assets/trov.png'
import Input from './components/Input';

function App() {
  const [city, setCity] = useState("");
  const [value, setValue] = useState();
  const formRef = useRef();

  const handleSubmit = useCallback(async (res) => {
    const { data } = await api.get(`/weather?format=json-cors&key=47a032f6&city_name=${res.cidade}`);
    setCity(data.results)
    setValue('')
    setValue()
    console.log(data)
  }, []);

  return (
    <div className="App">
      <Header />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="city-name">
          <label htmlFor="cidade" className="form-label">
            Nome da Cidade:
          </label>
          <Input className="input" autocomplete="off" name="cidade" value={value} placeholder="Informe o nome da cidade" />
        </div>
      </Form>
      {city ?
        <>
          <div className="principal" >
            <h4 className="titulo">Previsão do tempo agora em: {city.city}</h4>
            <div className="temp-principal">
              <h3>Nascer do sol às {city.sunrise} da manhã</h3>
              <h3>Por do sol às {city.sunset} da noite</h3>
            </div>
            <div className="temp">
              <h3>Velocidade do vendo {city.wind_speedy}</h3>
            </div>
          </div>
        </>

        : null}
      {city ? city.forecast.map((res, i) => {
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
            {res.description === 'Tempestades' ? <img className="chuva" src={chuva} alt="" /> : null}
            {res.description === 'Chuvas esparsas' ? <img className="chuva" src={chuva} alt="" /> : null}
            {res.description === 'Tempestades isoladas' ? <img className="chuva" src={chuva} alt="" /> : null}
            {res.description === 'Alguns chuviscos' ? <img className="chuva" src={chuva} alt="" /> : null}
            {res.description === 'Tempo nublado' ? <img className="chuva" src={nublado} alt="" /> : null}
            {res.description === 'Trovoadas dispersas' ? <img className="chuva" src={trov} alt="" /> : null}
            {res.description === 'Parcialmente nublado' ? <img className="chuva" src={parcialnub} alt="" /> : null}
            {res.description === 'Ensolarado com muitas nuvens' ? <img className="chuva" src={parcialnub} alt="" /> : null}
            {res.description === 'Ensolarado' ? <img className="chuva" src={sol} alt="" /> : null}
            {res.description === 'Tempo limpo' ? <img className="chuva" src={sol} alt="" /> : null}
            {res.description === 'Neve' ? <img className="chuva" src={neve} alt="" /> : null}
            {res.description === 'Misto de neve e chuva' ? <img className="chuva" src={neve} alt="" /> : null}
            {res.description === 'Tempestade com neve' ? <img className="chuva" src={neve} alt="" /> : null}
          </div>
        )
      }) : null}
    </div>
  );
}

export default App;
