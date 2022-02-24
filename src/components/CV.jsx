import { Component } from 'react'

class CV extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <article className="cv">
        <header className="cv--header">
          <h1 className="cv--name">Jonathan Shmoe</h1>
          <div className="cv--info">
            <div>
              <div className="bold">Address:</div>
              <div>01 Portlan Green Street</div>
            </div>
            <div>
              <div className="bold">Phone:</div>
              <div>+1 123 432 21</div>
            </div>
            <div>
              <div className="bold">Email:</div>
              <div>01 Portlan Green Street</div>
            </div>
          </div>
        </header>
      </article>
    )
  }
}

export default CV
