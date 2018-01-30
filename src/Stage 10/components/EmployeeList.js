import React, { Component } from "react";

export default class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          {this.props.employees.map(val => (
            <li
              className="listText"
              key={val.id}
              onClick={() => {
                this.props.selectEmployee(val);
              }}
            >
              {val.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
