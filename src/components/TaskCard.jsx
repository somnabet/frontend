import { useState } from "react";
import "./styles/TaskCard.css";
import TaskEditForm from "./TaskEditForm";
import formatDate from "./FormatedDate";

export const TaskCard = ({
  title,
  description,
  onDelete,
  onUpdate,
  onComplete,
  dueDate,
  status,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedTaskData) => {
    onUpdate(updatedTaskData);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <TaskEditForm
          initialTitle={title}
          initialDescription={description}
          initialDueDate={dueDate}
          initialStatus={status}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
          <p>{formatDate(dueDate)}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
          {status === "completed" ? (
            <button className="completed-button">Completed</button>
          ) : (
            <button className="complete-button" onClick={() => onComplete()}>
              Complete
            </button>
          )}
        </div>
      )}
    </div>
  );
};
