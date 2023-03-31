import { ImBin } from "react-icons/im";
import "./ToDo.css";
const ToDo = (props) => {

  return (
    <>
      {props.ToDoes.map((item, index) => (
        <div key={index} className="ToDoConteiner">
          <div className="ToDo">
            <div className="leftToDoPart">
              <label className="toDoNameWCheckbox" id="nameChecker">
                <input type="checkbox" id="nameChecker" />
                <div className="name">{item.nameTask}</div>
              </label>
              <div className="description">{item.descriptionTask}</div>
            </div>

            <div className="rightToDoPart">
              {/* <div className="dateToDoes">{item.date.toDateString()}</div> */}
              <ImBin />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ToDo;
