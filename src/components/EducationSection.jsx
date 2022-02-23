import { Component } from 'react'

class EducationSection extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <section>
        <h2>EducationSection</h2>
        <div>
          <input type="text" name="qualification" id="qualification" />
          <label htmlFor="qualification">Title of qualification</label>
        </div>
        <div>
          <input type="text" name="schoolName" id="school-name" />
          <label htmlFor="school-name">University or Organisation name</label>
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

export default EducationSection
