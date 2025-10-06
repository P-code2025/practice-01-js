import { useState } from "react";
import "./WorkList.css";
export default function WorkList(props) {
  const [tasks, setTasks] = useState([]);
  const [taskText, setaskText] = useState("");
  return (
    <div
      style={{
        marginLeft: 20,
      }}
    >
      {props.children}
      <div>
        <input
          className="input-work"
          placeholder="Nhập công việc"
          value={taskText}
          onChange={(event) => {
            setaskText(event.target.value);
          }}
        />
        <button
          className="button-nhap"
          onClick={() => {
            const newTodo = {
              id: Date.now(),
              text: taskText,
            };
            setTasks([...tasks, newTodo]);
            setaskText("");
          }}
        >
          Nhap
        </button>
      </div>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
}
