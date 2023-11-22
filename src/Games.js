import React from "react"

class Games extends React.Component {
  constructor(props) {
    super(props)

  }
  render = () => {
    return (
      <>
        <table border="1">
          <tr><th>{"id"}</th><th>{"title"}</th><th>{"price"}</th></tr>
          {
            this.props.games.map((game) => (
              <tr><td>{game.id}</td><td>{game.title}</td><td>{game.price}</td></tr>
            ))
          }
        </table>
      </>
    )
  }
  
}
export default Games