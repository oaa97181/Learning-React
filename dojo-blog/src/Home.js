import { useState } from "react";

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('mario');
  let [age, setAge] = useState(10);
  const [expression, setExpression] = useState('omg');

  const handleClick = () => {
    // name = 'luigi';
    setName('luigi');
    setAge(age+=1);
    setExpression(expression+'g')
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old { expression }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;