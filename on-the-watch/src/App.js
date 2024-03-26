import logo from './logo.svg';
import './App.css';
import NavBar from './Screens/Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.


function App() {

// database.ref().update(sampleData)
//   .then(() => console.log('Sample data sent successfully!'))
//   .catch(error => console.error('Error sending sample data:', error));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
