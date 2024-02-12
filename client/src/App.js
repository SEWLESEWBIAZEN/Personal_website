
import './App.css';
import Body from './components/body/Index';
import CopyRight from './components/copyright/Index';
import Footer from './components/footer/Footer';
import NavBar from './components/navigation/nav';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Body/> 
      <hr/>
     <Footer/>
     <CopyRight/>
          
    </div>
  );
}

export default App;
