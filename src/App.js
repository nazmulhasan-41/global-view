
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Countries from './components/countries/Countries';
import Home from './components/Home/Home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div >
      <Container>
        <Header></Header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />

        </Routes>

      </Container>



    </div>
  );
}

export default App;
