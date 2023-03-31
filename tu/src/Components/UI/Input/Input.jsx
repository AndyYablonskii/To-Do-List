import { useState } from "react";
import "./Input.css";

const Input = (props, { ToDoes, setToDoes, newTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setToDoes(props.ToDoes.push(props.newTodo));
  };

  return (
    <div className="inputConteiner">
      <form>
        <div className="topInputs">
          <input
            type="text"
            className="TaskNameTask"
            placeholder="name ur task"
            id=""
            required
            tabIndex={1}
            value={props.nameTask}
            onChange={(e) => props.setNameTask(e.target.value)}
          />
          <input
            type="text"
            className="TaskDescriptionTask"
            placeholder="dscribe ur task"
            id=""
            tabIndex={2}
            value={props.descriptionTask}
            onChange={(e) => props.setDescriptionTask(e.target.value)}
          />
        </div>
      </form>
      <div className="bottomInputs">
        <button className="AddButton" tabIndex={3} onClick={handleSubmit}>
          submit ur task
        </button>
      </div>
    </div>
  );
};

export default Input;
