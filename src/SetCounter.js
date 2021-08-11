import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";

export const SetCounter = () => {
  const storeCount =useSelector(state=>state.count)
  const update = useDispatch()
  const [NewCount,setNewCount] = useState(storeCount)
  useEffect(()=>{
    setNewCount(storeCount)
  },[storeCount])
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          update(set(NewCount))
          setNewCount(0)
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" value={NewCount}  onChange={(event)=>{return setNewCount(event.target.value)}}/>
        <input type="submit"/>
      </form>
    </section>
  );
};
