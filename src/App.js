import './App.css';

function App() {
  return (
    <div className = "app">
        <h1 className = "counter">0</h1>
        <button className = "counterButton">+</button>
        <button className = "counterButton">-</button>
        <input className = "newInput" name = "newNumber" />
    </div>
  );
}

export default App;
