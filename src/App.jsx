import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import { useEffect } from 'react';

function App() {
  const navigate =  useNavigate()
  const location = useLocation()
  console.log(location);
  useEffect(()=>{
    if(window.localStorage.getItem('key') != 'token'){
      navigate('/login')
    }
  },[location])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
