import { Component } from "react";

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
        { name: "John C.", salary: 800, increase: false, rise: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary: +salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  // onToggleIncrease = (id) => {
  //   this.setState(({ data }) => ({
  //     // data: data.map(item => item.id === id ? {...item, increase: !item.increase} : item),
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }

  //       return item;
  //     }),
  //   }));
  // };

  // onToogleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     // data: data.map(item => item.id === id ? {...item, rise: !item.rise} : item),
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }

  //       return item;
  //     }),
  //   }));
  // };
  
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      // data: data.map(item => item.id === id ? {...item, increase: !item.increase} : item),
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }

        return item;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
