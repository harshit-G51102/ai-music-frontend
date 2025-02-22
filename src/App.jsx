import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Music from './components/Music';

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/Home' element={<Home></Home>}></Route>
      <Route path='/music' element={<Music></Music>}></Route>
    </Routes>
  </Router>
  )
}

export default App
