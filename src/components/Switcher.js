import AboutMe from './AboutMe'
import EmploymentHistory from './EmploymentHistory'
import Education from './Education'
import Courses from './Courses'
import Skills from './Skills'
import Projects from './Projects'

function Switcher(props) {

  const { activeItem } = props
  switch (activeItem) {
    case 'ABOUT ME':
      return <AboutMe />;
    case 'EMPLOYMENT HISTORY':
      return <EmploymentHistory />;
    case 'EDUCATION':
      return <Education />;
    case 'CERTIFICATES & COURSES':
      return <Courses />;
    case 'SKILLS':
      return <Skills />;
    case 'PROJECTS':
      return <Projects />;
    default:
    return <AboutMe />;

  }

}

export default Switcher
