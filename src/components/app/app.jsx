import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id),
      }
    });
  };

  addItem = (name, salary) => {
    const newId = this.maxId;
    this.maxId += 1;

    this.setState(({ data }) => {
      return {
        data: [...data, {
          name,
          salary: +salary,
          increase: false,
          id: newId,
        }]
      }
    });
  };

  

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm onSubmit={this.addItem}/>
      </div>
    );
  }
}

export default App;
