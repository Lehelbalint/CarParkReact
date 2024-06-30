import './App.css'
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Home from "./components/navigation/home"
import Favourites from './components/navigation/favourites';
import Basket from './components/navigation/basket';
import Update from './components/navigation/update';

function App() {
  return (
      <div className="App">
          <div>
              <div style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  background: 'lightblue',
                  fontSize: '20px',
              }}>
                  <Link to={'/'}
                      style={{ color: 'white' }}>
                      Home
                  </Link>
                  <Link to={'/favourites'}
                      style={
                          {
                              color: 'white'
                          }}>
                      Favourites
                  </Link>
                  <Link to={'/basket'}
                      style={
                          {
                              color: 'white'
                          }}>
                      Basket
                  </Link>
                  <Link to={'/update'}
                      style={
                          {
                              color: 'white'
                          }}>
                      Update
                  </Link>
              </div>
          </div>
          <Routes>
              <Route path="/"
                  element={<Home />} />
              <Route path="/favourites"
                  element={<Favourites />} />
              <Route path="/basket"
              element={<Basket />} />
              <Route path="/update"
                  element={<Update />} />
          </Routes>
      </div>
  );
}

export default App;