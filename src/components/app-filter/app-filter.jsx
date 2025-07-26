import "./app-filter.css";

const AppFilter = ({ filterRule, onFilterSelect }) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "salary", label: "З/П больше 1000$" },
  ];

  return (
    <div className="btn-group">
      {buttonsData.map((btn) => {
        return (
          <button
            key={btn.name}
            className={`${filterRule === btn.name ? "btn btn-light" : "btn btn-outline-light"}`}
            type="button"
            onClick={() => {onFilterSelect(btn.name)}}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default AppFilter;
