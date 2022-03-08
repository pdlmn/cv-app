import { Component } from 'react'
import Header from './components/Header'
// import GeneralInfoSection from './components/GeneralInfoSection'
// import EducationSection from './components/EducationSection'
// import WorkSection from './components/WorkSection'
// import SkillSection from './components/SkillSection'
import CV from './components/CV'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      education: [
        {
          qualification: "",
          schoolName: "",
          from: "",
          to: "",
          ongoing: false
        }
      ],
      work: [
        {
          title: "",
          employer: "",
          from: "",
          to: "",
          ongoing: false
        }
      ],
      skills: [
        {
          skill: "",
          icon: ""
        }
      ]
    }
  }

  render () {
    return (
      <>
        <Header/>
        {/* <form> */}
          {/*   <fieldset> */}
          {/*     <legend>CV Creator</legend> */}
          {/*     <GeneralInfoSection /> */}
          {/*     <EducationSection /> */}
          {/*     <WorkSection /> */}
          {/*     <SkillSection /> */}
          {/*   </fieldset> */}
        {/* </form> */}
        <CV />
      </>
    )
  }
}

export default App;
