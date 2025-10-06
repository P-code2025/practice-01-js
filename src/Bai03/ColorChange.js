import { useState } from "react";
import "./ColorChange.css";
import Box from "./Box";
export default function ColorChange(props) {
  const [color, setColor] = useState("");
  return (
    <div
      style={{
        marginLeft: 20,
      }}
    >
      {props.children}
      {/* prettier-ignore */}
      <div >
        <button className="button button-red" onClick={() => {setColor("red")}}>red</button>
        <button className="button button-green"  onClick={() => {setColor("green")}} >green</button>
        <button className="button button-blue" onClick={() => {setColor("blue")}}>blue</button>
        <button className="button button-yellow" onClick={() => {setColor("yellow")}} >yellow</button>
      </div>

      <Box color={color} />
    </div>
  );
}
