import "./ToDo.css";
const ToDo = (props) => {
  return (
    <>
      {props.ToDoes.map((item, index) => (
        <div className="ToDoConteiner">
          <div key={index} className="ToDo">
            <div className="leftToDoPart">
              <label className="toDoNameWRadio" id="nameChecker">
                <input type="checkbox" id="nameChecker" />
                <div className="name">{item.name}</div>
              </label>

              <div className="description">{item.description}</div>
            </div>

            <div className="rightToDoPart">
              <div className="dateToDoes">{item.date.toDateString()}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToDo;
