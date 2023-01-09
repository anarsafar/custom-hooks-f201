import useStateCustom from "./hook/useState";

const Example = () => {
  const { count, increment } = useStateCustom(5);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Example;
