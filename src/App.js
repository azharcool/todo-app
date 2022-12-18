import logo from "./logo.svg";
import "./App.css";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter/counterSlice";
import Todo from "./components/todo/Todo";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <span>{counter.value}</span>
        <div>
          <button onClick={incrementHandler}>Increase</button>
        </div>
        <div>
          <button onClick={decrementHandler}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// }

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
