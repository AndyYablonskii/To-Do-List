import "./ToDoes.css";
import ToDo from "./ToDo";

const ToDoes = (props) => {
  const ToDoes = [
    {
      name: "groceries",
      description: "go to the markert and buy milk",
      date: new Date("2023.02.03"),
      status: true,
      id: 1,
    },
  ];

  return (
    <div className="ToDoesConteiner">
      <ToDo ToDoes={ToDoes} />
    </div>
  );
};

export default ToDoes;
