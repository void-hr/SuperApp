import './App.css';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import EntertainmentPage from './pages/EntertainmentPage/EntertainmentPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import { Routes, Route} from 'react-router-dom';
function App() {

    const isHome = localStorage.getItem('fornData') ? true : false
    const isCat = localStorage.getItem("categories") ? true : false
  return (
   <Routes>
   <Route path='/' element= {isHome ? <HomePage/> : <RegistrationPage /> }/> 
    <Route path='/registration' element={isHome ? <HomePage/> : <RegistrationPage/>}/>
    <Route path='/entertainment' element={isCat ? <EntertainmentPage/> : <CategoryPage />}/>
    <Route path='/category' element={<CategoryPage/>}/>
   </Routes>
  );
}

export default App;
