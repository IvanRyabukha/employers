import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map((employee) => (
        <EmployeesListItem
          key={employee.id}
          name={employee.name}
          salary={employee.salary}
          increase={employee.increase}
        />
        // <EmployeesListItem {...employee} />
      ))}
    </ul>
  );
};

export default EmployeesList;