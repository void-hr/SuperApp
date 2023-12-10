import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import EntertainmentPage from './pages/EntertainmentPage/EntertainmentPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import { Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
      const [isHome, setIsHome ] = useState(false);
      useEffect(()=> {
        setIsHome(localStorage.getItem('fornData') ? true : false)

      }, [isHome, setIsHome])
   
      console.log(isHome)
  return (
   <Routes>
   <Route path='/' element= {isHome ? <HomePage/> : <RegistrationPage /> }/> 
    <Route path='/registration' element={isHome ? <HomePage/> : <RegistrationPage/>}/>
    <Route path='/entertainment' element={<EntertainmentPage/>}/>
    <Route path='/category' element={<CategoryPage setIsHome={setIsHome}/>}/>
   </Routes>
  );
}

export default App;
