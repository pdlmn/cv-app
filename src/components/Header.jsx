import { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <h1>
          Reactive CV Creator
        </h1>
      </header>
    )
  } 
}

export { Header }