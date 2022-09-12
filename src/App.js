
import './App.css';
import'./components/Header';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {Routes , Route} from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';


function App() {
  return (
    <div className="App">
   <>
     
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
        </Routes>
        
        <Footer/>
   </>
   
    </div>
  );
}

export default App;
