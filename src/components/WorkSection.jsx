import { Component } from 'react'

class WorkSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section>
        <h2>Work experience</h2>
        <div>
          <input type="text" name="title" id="title" />
          <label htmlFor="title">Occupation title</label>
        </div>
        <div>
          <input type="text" name="employer" id="employer" />
          <label htmlFor="employer">Employer</label>
        </div>
        <div>
          <input type="date" name="from" id="from" />
          <label htmlFor="from">From</label>
        </div>
        <div>
          <input type="date" name="to" id="to" />
          <label htmlFor="to">To</label>
        </div>
        <div>
          <input type="checkbox" name="ongoing" id="ongoing" />
          <label htmlFor="ongoing">Ongoing</label>
        </div>
      </section>
    )
  }
}

export default WorkSection
