import "./ToDoesList.css";
import ToDo from "../ToDoItem/ToDo";
import { useState } from "react";

const ToDoesList = (props) => {
  // const [ToDoes, setToDoes] = useState([
  //   {
  //     name: "groceries",
  //     description: "go to the markert and buy milk",
  //     status: true,
  //     id: "test",
  //   },
  // ]);

  // const newToDo = {
  //   name: props.name,
  //   description: props.description,
  //   status: false,
  //   id: Math.random(),
  // };


  return (
    <div className="ToDoesConteiner">
      <ToDo ToDoes={props.ToDoes} />
    </div>
  );
};

export default ToDoesList;
