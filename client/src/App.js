
import './App.css';
import Body from './components/body/Index';
import Footer from './components/footer/Footer';
import NavBar from './components/navigation/nav';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Body/> 
      <hr/>
      <Footer/>
          
    </div>
  );
}

export default App;
