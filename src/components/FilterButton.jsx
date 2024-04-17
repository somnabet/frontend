const FilterButtons = ({ onFilterChange, filter }) => {
  return (
    <div className="filter-buttons">
      <button
        className={filter === "ALL" ? "active" : ""}
        onClick={() => onFilterChange("ALL")}
        aria-label="Show all tasks"
      >
        All
      </button>
      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => onFilterChange("pending")}
        aria-label="Show pending tasks"
      >
        Pending
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => onFilterChange("completed")}
        aria-label="Show completed tasks"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
