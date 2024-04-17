import "./styles/TaskForm.css";

const TaskForm = ({ setTitle, setDescription, setDueDate, addTaskAnSync }) => {
  return (
    <div className="form">
      <h1>To-Do App</h1>
      <label>Title</label>
      <input onChange={(e) => setTitle(e.currentTarget.value)} />
      <label>Description</label>
      <textarea onChange={(e) => setDescription(e.currentTarget.value)} />
      <label>Due Date</label>
      <input type="date" onChange={(e) => setDueDate(e.currentTarget.value)} />
      <button className="add-button" onClick={addTaskAnSync}>
        Add
      </button>
    </div>
  );
};

export default TaskForm;
