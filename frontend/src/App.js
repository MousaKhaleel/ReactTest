import logo from './logo.svg';
import './App.css';
import toyotaImg from './assets/001.jpg';
import fordImg from './assets/2024-ford-f-150-raptor-08-64ff719e63c9b.jpg';
import dmcImg from './assets/Delorean_DMC-12_side.jpg';
import lambor from './assets/R.jpg'
import Car from './Car';
import carStyle from './carStyle.css'

function App() {
  return (
    <div className="App">
    <div className='s'>
    <div>
    <Car src={toyotaImg} discription='good old toyota' color='black' brand='toyota'/>
    <Car src={fordImg} discription='idk i ran out of ideas' color='brown' brand='ford'/>
    </div>
    <div>
    <Car src={dmcImg} discription='a classic' color='grey' brand='dmc'/>
    <Car src={lambor} discription='a better classic' color='red' brand='lamborghini'/>
    </div>
    </div>
    </div>
  );
}

export default App;
