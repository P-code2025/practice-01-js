import { useState } from "react";
import "./Demso.css";

export default function Demso(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*prettier-ignore*/}
      <div 
      style = {{
        marginLeft: 20,
        marginTop: 10,
      }}>

      {props.children}

      <h2>Gia tri hien tai: {count}</h2>
      <button className="button-chung" onClick={() => {setCount(count + 1)}}> tăng </button>
      <button className="button-chung" onClick={() => {setCount(count - 1)}}> giảm </button>
      <button className="button-chung" onClick={() => {setCount(0)}}> reset </button>
  
    </div>
    </>
  );
}
