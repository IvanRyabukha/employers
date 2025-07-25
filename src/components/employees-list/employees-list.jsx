import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="app-list list-group">
      {data.map((employee) => (
        <EmployeesListItem
          key={employee.id}
          name={employee.name}
          salary={employee.salary}
          increase={employee.increase}
          rise={employee.rise}
          onDelete={() => onDelete(employee.id)}
          onToggleProp={(e) => onToggleProp(employee.id, e.currentTarget.getAttribute('data-toggle'))}
        />
        // <EmployeesListItem {...employee} />
      ))}
    </ul>
  );
};

export default EmployeesList;