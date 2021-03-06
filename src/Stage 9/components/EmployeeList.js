import React, { Component } from "react";

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          {this.props.employees.map(val => (
            <li
              key={val.id}
              onClick={() => {
                this.props.selectEmployee(val);
              }}
              className="listText"
            >
              {val.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
