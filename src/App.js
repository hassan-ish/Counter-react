import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter onIncrement="2" onDecrement="2" />
      <Counter onIncrement="5" onDecrement="10" />
    </div>
  );
}

export default App;
