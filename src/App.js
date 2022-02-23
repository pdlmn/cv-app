import { Component } from 'react'
import Header from './components/Header'
import GeneralInfoSection from './components/GeneralInfoSection'
import EducationSection from './components/EducationSection'
import WorkSection from './components/WorkSection'
import SkillSection from './components/SkillSection'

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
