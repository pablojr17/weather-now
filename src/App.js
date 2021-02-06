import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import api from './services/api';

function App() {
  const [codeCity, setCodeCity] = useState(null)

  const id = 430480
  const dados = `weather?format=json-cors&key=0c2a0623&woeid=`
  const r = dados + id
useEffect(() => {
  async function loadTransactions() {
    const { data } = await api.get(`/${r}`);
    console.log(data)
  }
  loadTransactions()
}, [r]);

  return (
    <div className="App">
      <Header />
      <h1>Cote Clima</h1>
    </div>
  );
}

export default App;
