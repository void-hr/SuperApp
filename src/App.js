import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import EntertainmentPage from './pages/EntertainmentPage/EntertainmentPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import { Routes, Route} from 'react-router-dom';
function App() {

  return (
   <Routes>
   <Route path='/' element= {<HomePage/> }/> 
    <Route path='/registration' element={<RegistrationPage/>}/>
    <Route path='/entertainment' element={<EntertainmentPage/>}/>
    <Route path='/category' element={<CategoryPage/>}/>
   </Routes>
  );
}

export default App;
