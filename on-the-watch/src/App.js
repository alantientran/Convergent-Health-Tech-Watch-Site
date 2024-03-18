import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB7ChVjIIrdywd0g4IXyGn_BltcJcm8cwU",
  authDomain: "on-the-watch-4cbe8.firebaseapp.com",
  projectId: "on-the-watch-4cbe8",
  storageBucket: "on-the-watch-4cbe8.appspot.com",
  messagingSenderId: "289350361106",
  appId: "1:289350361106:web:c1805eff124363886a78cb",
  measurementId: "G-K82BJWPHPR"
};
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const sampleData = {
users: {
  user1: {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  },
  user2: {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
  }
},
// Add more data as needed
};

async function addData() {
  try {
    await addDoc(collection(database, "test"), sampleData);
    console.log("successful");
  } catch(e) {
    console.error(e)
  }
}

function App() {

// database.ref().update(sampleData)
//   .then(() => console.log('Sample data sent successfully!'))
//   .catch(error => console.error('Error sending sample data:', error));
  addData();
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
