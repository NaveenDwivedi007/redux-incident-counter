import { useDispatch, useSelector } from "react-redux";
import { decrement,increment, set} from "./actions";
// userselector use to assign the value to the variable 
// usedispatch use to assign the the action to the dom value

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(set(0))}>Reset</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
