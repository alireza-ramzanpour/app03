
import React from "react";
import Register from "./Register";
import Games from "./Games";
import Employees from "./Employees";

class Rectangle extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.width)
  }
  render = () => {
    return (
      <>
        <input type="text" value={this.props.width * this.props.length} />

      </>
    )
  }
}

class Student extends React.Component {
  constructor(props) {
    super(props)

    {
      this.avg = this.props.scores.reduce((score, s) => {
        return s + score
      }, 0)
    }

    console.log(this.props.name, this.props.family, this.props.scores)
  }
  render = () => {
    return (
      <>
        <h1>Student Page</h1>
        <br />
        <p>{this.props.name} {this.props.family} {this.avg / this.props.scores.length}</p>
      </>
    )
  }
}




class Login extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.username)
  }
  render = () => {
    return (
      <>
        login page
        <br />
        <input type="text" placeholder="enter your username" value={this.props.username} />
        <br />
        <input type="text" placeholder="enter your password" value={this.props.password} />
        <br />
        <input type="button" value="login" />
      </>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.name = "ahmad1234"
    this.games = [
      { id: 1001, title: "gow", price: 120000 },
      { id: 1003, title: "cod", price: 150000 },
      { id: 1008, title: "gta", price: 100000 }
    ]
    this.employees = [
      { id: 1001, name: "ali", family: "rezaei", salary: 1200000 },
      { id: 1002, name: "reza", family: "alinia", salary: 1000000 },
      { id: 1003, name: "ahmad", family: "hassani", salary: 2000000 }
    ]
  }
  render = () => {
    return (
      <>
        Hello World
        <br />
        <Login username="reza" password="1234" />
        {/* { new Login ({username: "reza" , password : "1234"})} */}
        <br />
        <Rectangle width="3" length="4" />
        <Student name="ali" family="rezaei" scores={[18, 15, 16]} />
        <Games games={this.games} />
        <Register />
        <Employees employees={this.employees} />
        
      </>
    )
  }
}
export default App