import { Component } from 'react'
import Header from './components/Header'
import GeneralInfoSection from './GeneralInfo'
import EducationSection from './EducationSection'
import WorkSection from './WorkSection'
import SkillSection from './SkillSection'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <>
        <Header/>
        <form>
          <fieldset>
            <legend>CV Creator</legend>
            <GeneralInfoSection />
            <EducationSection />
            <WorkSection />
            <SkillSection />
          </fieldset>
        </form>
        </>
    )
  }
}

export default App;
