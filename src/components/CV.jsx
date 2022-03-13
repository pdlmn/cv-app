import { Component } from 'react'

class CV extends Component {
  render () {
    return (
      <article className='cv'>
        <header className='cv--header'>
          <h1 className='cv--name'>Jonathan Shmoe</h1>
          <div className='cv--info'>
            <div>
              <div className='bold'>Address:</div>
              <div>01 Portlan Green Street</div>
            </div>
            <div>
              <div className='bold'>Phone:</div>
              <div>+1 123 432 21</div>
            </div>
            <div>
              <div className='bold'>Email:</div>
              <div>01 Portlan Green Street</div>
            </div>
          </div>
        </header>
        <section>
          <h2>Summary</h2>
          <p>Proactive teacher and web-developer with an experience of 10+ years. Had an experience of every stage of software development, both with frontend and backend. Know a lof of programming languages and frameworks. Etc etc etc.</p>
        </section>
        <section>
          <h2>Education</h2>
          <ul className='cv--experiences'>
            <li className='cv--experience'>
              <div className='italic cv--date'>
                2008.08.15 - 2016.11.02
              </div>
              <div>
                <h3>University of Lorem Ipsum</h3>
                <p>Software Engineer</p>
              </div>
            </li>
            <li className='cv--experience'>
              <div className='italic cv--date'>
                2016.11.15 - 2017.04.09
              </div>
              <div>
                <h3>Frontend bootcamp</h3>
                <p>Junior Frontend Developer</p>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2>Work experience</h2>
          <ul className='cv--experiences'>
            <li className='cv--experience'>
              <div className='italic cv--date'>
                2019.11.15 - 2020.05.14
              </div>
              <div>
                <h3>ZYX Company</h3>
                <p>Junior Frontend Developer</p>
              </div>
            </li>
            <li className='cv--experience'>
              <div className='italic cv--date'>
                2020.05.14 - 2020.11.24
              </div>
              <div>
                <h3>The IT Corporation</h3>
                <p>Middle Software Engineer</p>
              </div>
            </li>
            <li className='cv--experience'>
              <div className='italic cv--date'>
                2021.01.09 - Present day
              </div>
              <div>
                <h3>Big Software Company</h3>
                <p>Senior Fullstack Developer</p>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2>Languages</h2>

        </section>
      </article>
    )
  }
}

export default CV
