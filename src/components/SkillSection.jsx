import { Component } from 'react'

class SkillSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <h2>SkillSection</h2>
        <div>
          <input type="text" name="skill" id="skill" />
          <label htmlFor="skill">Skill</label>
        </div>
        <div>
          <select>
            <option value="dollar">dollar</option>
          </select>
        </div>
      </section>
    )
  }
}

export default SkillSection
