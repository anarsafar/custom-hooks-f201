import useStateCustom from "./hook/useState";
import Example from "./Example";
import useOnline from "./hook/useOnline";

function App() {
  const { count, increment } = useStateCustom();

  const { isOnline } = useOnline();
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <Example />
      <p>{isOnline ? "Online ✅" : "offline ❌"}</p>
    </div>
  );
}

export default App;
