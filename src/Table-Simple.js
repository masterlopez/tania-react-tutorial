import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Carlos</td>
        <td>Junior Developer</td>
      </tr>
      <tr>
        <td>Javier</td>
        <td>Senior Developer</td>
      </tr>
      <tr>
        <td>Alberto</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Parse</td>
        <td>Developer Manager</td>
      </tr>
    </tbody>
  );
};

class Table2 extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table2;
