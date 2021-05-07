import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome, stranger 🕵🏻‍♀️'
  const likes = 123456789
  // const person = { name: 'juana', age: 22 };
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;