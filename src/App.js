import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter steps="2" />
      <Counter steps="5" />
    </div>
  );
}

export default App;
