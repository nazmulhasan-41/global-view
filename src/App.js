
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Countries from './components/countries/Countries';
import Home from './components/Home/Home';
import { Container } from 'react-bootstrap';
import Details from './components/Details/Details';
import { useEffect, useState } from 'react';
import Filter from './components/filter/Filter';

function App() {

  let [countries,setCountries]=useState([]);
  const url = `https://restcountries.com/v3.1/all`;

  function compare(a, b) {
    if (a.name.common < b.name.common) {
        return -1;
    }
    if (a.name.common > b.name.common) {
        return 1;
    }
    return 0;
}
               
  useEffect(() => {

    fetch(url)
        .then(res => res.json())
        .then(data => {
          data.sort(compare);            
            setCountries(data);
            console.log(data);
            })
}, [])

  return (
    <div >
      <Container>
        <Header></Header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:name" element={<Details/>}/>
          <Route path="/country/filter" element={<Filter countries={countries}/>}/>

        </Routes>
      </Container>

    </div>
  );
}

export default App;
