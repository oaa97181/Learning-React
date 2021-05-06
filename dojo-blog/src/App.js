import './App.css';

function App() {
  const title = 'Welcome, stranger 🕵🏻‍♀️'
  const likes = 123456789
  // const person = { name: 'juana', age: 22 };
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site Link</a>
      </div>
    </div>
  );
}

export default App;