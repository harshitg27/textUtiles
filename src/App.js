
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title = 'TextUtiles' aboutText = 'About Us' />
      <div className='container' >
        <TextForm heading = 'Enter the Text to Analyze' />
      </div>
    </div>
  );
}

export default App;
