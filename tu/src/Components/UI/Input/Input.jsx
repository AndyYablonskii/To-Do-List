import "./Input.css";

const Input = () => {
  return (
    <div className="inputConteiner">
      <div className="topInputs">
        <input
          type="text"
          className="TaskNameInput"
          placeholder="name ur task"
          id=""
          required
          tabIndex={1}
        />
        <input
          type="text"
          className="TaskDescriptionInput"
          placeholder="dscribe ur task"
          id=""
          tabIndex={2}
        />
      </div>
      <div className="bottomInputs">
        {/* <input type="date" className="TaskDateInput" id="" tabIndex{3} /> */}
        <input type="button" value="submit ur task" className="AddButton" tabIndex={3} />
      </div>
    </div>
  );
};

export default Input;
