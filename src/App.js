import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count Your Luck!</h1>

      <h3>Count: {counter}</h3>

      <button className="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default App;
