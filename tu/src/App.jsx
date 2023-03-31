import { useState } from "react";
import "./App.css";
import Header from "./Components/UI/Header/Header";
import ToDoesList from "./Components/ToDoes/ToDoesList/ToDoesList";
import Input from "./Components/UI/Input/Input";

function App() {
  const [nameTask, setNameTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");

  const [ToDoes, setToDoes] = useState([
    {
      nameTask: "groceries",
      descriptionTask: "go to the markert and buy milk",
      status: true,
      id: "test",
    },
  ]);

  const newToDo = {
    nameTask,
    descriptionTask,
    status: false,
    id: Math.random(),
  };


  return (
    <div className="App">
      <Header />
      <Input
        setNameTask={setNameTask}
        setDescriptionTask={setDescriptionTask}
        nameTask={nameTask}
        descriptionTask={descriptionTask}
        newToDo={newToDo}
        ToDoes={ToDoes}
        setToDoes={setToDoes}

      />
      <ToDoesList
        setNameTask={setNameTask}
        setDescriptionTask={setDescriptionTask}
        nameTask={nameTask}
        descriptionTask={descriptionTask}
        ToDoes={ToDoes}
      />
    </div>
  );
}

export default App;
