import { Component } from 'react'

class GeneralInfoSection extends Component {
  render () {
    return (
      <section>
        <h2>General Information</h2>
        <div>
          <input type='text' name='firstName' id='first-name' />
          <label htmlFor='first-name'>First name</label>
        </div>
        <div>
          <input type='text' name='lastName' id='last-name' />
          <label htmlFor='last-name'>Last name</label>
        </div>
        <div>
          <input type='email' name='email' id='email' />
          <label htmlFor='email'>Email</label>
        </div>
        <div>
          <input type='tel' name='phone' id='phone' />
          <label htmlFor='phone'>Phone number</label>
        </div>
      </section>
    )
  }
}

export default GeneralInfoSection
