import React from "react"

class Employees extends React.Component {
  constructor(props) {
    super(props)

  }
  render = () => {
    return (
      <>
        <table border="1">
          <tr><th>{"id"}</th><th>{"name"}</th><th>{"family"}</th><th>{"salary"}</th></tr>
          {
            this.props.employees.map((employee) => (
              <tr><td>{employee.id}</td><td>{employee.name}</td><td>{employee.family}</td><td>{employee.salary}</td></tr>
            ))
          }
        </table>
      </>
    )
  }
}
export default Employees