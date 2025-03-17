import React from 'react'
import '../styles/Skills.css';
import HTMLIcon from '../assets/icons8-html.svg';
import CSSIcon from '../assets/icons8-css.svg';
import JavaScriptIcon from '../assets/icons8-javascript.svg';
import ReactIcon from '../assets/react.svg';
import ReduxIcon from '../assets/icons8-redux.svg';
import JsonIcon from '../assets/icons8-json-50.png';
import ChakraUiIcon from '../assets/icons8-chakra-ui.svg';
import FireBaseIcon from '../assets/firebase.svg';
import PythonIcon from '../assets/python.svg';
import GitIcon from '../assets/git.svg';
import GitHubIcon from '../assets/icons8-github (1).svg';
import VisualStudioCodeIcon from '../assets/visualstudio.svg';
import OICIcon from '../assets/OIC.png';


const Skills = () => {
  const skills  = [
    {
      name: 'HTML5',
      logo: HTMLIcon
    },
    {
      name: 'CSS3',
      logo: CSSIcon
    },
    {
      name: 'JavaScript',
      logo: JavaScriptIcon
    },
    {
      name: 'React',
      logo: ReactIcon
    },
    {
      name: 'Redux',
      logo: ReduxIcon
    },
    {
      name: 'Firebase',
      logo: FireBaseIcon
    },
    {
      name: 'ChakraUI',
      logo: ChakraUiIcon
    },
    {
      name: 'JSON',
      logo: JsonIcon
    },
    {
      name: 'Python',
      logo: PythonIcon
    },
    {
      name: 'Git',
      logo: GitIcon
    },
    {
      name: 'GitHub',
      logo: GitHubIcon
    },
    {
      name: 'OIC',
      logo: OICIcon
    },
    {
      name: 'Visual Studio Code',
      logo: VisualStudioCodeIcon
    }
  ]
  return (
    <section id='skills' className='section'>
      <h2 className='section-title'>Skills & Technologies</h2>
      <div className='skills-grid'>
        {skills.map((skill, index) => (
          <div key={index} className='skill-card'>
            <img src={skill.logo} alt={skill.name} className='skill-logo' />
            <p className='skill-name'> {skill.name} </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
