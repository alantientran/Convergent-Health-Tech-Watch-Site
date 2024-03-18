
// import { database } from "./firebaseConfig";
// const firebase = require('./firebase.js');


const database = firebase.database();
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

database.ref().update(sampleData)
  .then(() => console.log('Sample data sent successfully!'))
  .catch(error => console.error('Error sending sample data:', error));

