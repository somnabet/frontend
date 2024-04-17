import { useState } from "react";
import "./styles/TaskEditForm.css";

const TaskEditForm = ({
  initialTitle,
  initialDescription,
  initialDueDate,
  initialStatus,
  onUpdate,
  onCancel,
}) => {
  const formattedInitialDueDate = initialDueDate
    ? new Date(initialDueDate).toISOString().split("T")[0]
    : "";

  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [editedDescription, setEditedDescription] =
    useState(initialDescription);
  const [editedDueDate, setEditedDueDate] = useState(formattedInitialDueDate);
  const [editedStatus, setEditedStatus] = useState(initialStatus);

  const handleUpdate = () => {
    const updatedTaskData = {
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      status: editedStatus,
    };
    onUpdate(updatedTaskData);
  };

  return (
    <>
      <div className="edit form">
        <label>Title</label>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <label>Due Date</label>
        <input
          type="date"
          value={editedDueDate}
          onChange={(e) => setEditedDueDate(e.target.value)}
        />
        <label>Status</label>
        <select
          value={editedStatus}
          onChange={(e) => setEditedStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button onClick={handleUpdate}>Save</button>
      <button className="cancel-button" onClick={onCancel}>
        Cancel
      </button>
    </>
  );
};

export default TaskEditForm;
