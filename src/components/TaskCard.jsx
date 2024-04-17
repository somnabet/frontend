export const TaskCard = ({ title, description, onDelete, onEdit, dueDate }) => {
  return (
    <div className="card">
      <h5>{title}</h5>
      <p>{description}</p>
      <p>{dueDate}</p>
      <button onClick={onDelete}>Borrar</button>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
};
