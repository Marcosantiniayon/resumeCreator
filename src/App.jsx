// Main App Component
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GeneralInfo, GeneralInfoOutput } from './components/GeneralInfo'
import { Education, EducationOutput } from './components/Education'
import { Experience, ExperienceOutput } from './components/Experience'
import './App.css'
import './styles/style.css'


// Default App
function App() {
  // GLOBAL State management for generalInfo, educationEntries, and experienceEntries
  // This is useful since muitlple components need to share the same state (Input and Output components for each of those 3 sections)
  const [generalInfo, updateGeneralInfo] = useState({
    nameInput: "",
    emailInput: "",
    phoneNumberInput: "",
  });
  const [educationEntries, updateEducationEntries] = useState([{
    id: Date.now(),
    degree: "",
    gradYear: "",
    school: "",
    gpa: "",
    skills: ""
  }]);
  const [experienceEntries, updateExperienceEntries] = useState([{
    id: Date.now(),
    position: "",
    company: "",
    location: "",
    startYear: "",
    endYear: "",
    summary: ""
  }]);

  return (
    <div className='container'>
      <div className='header'>
        <img id="headerImg" src="./public/cv.png" alt="CV Logo" />
        <h1>RESUME BUILDER</h1>
      </div>
      <div className='main'>
        <div className='form'>
          <div className='componentsDiv'>
            <GeneralInfo
              generalInfo={generalInfo}
              updateGeneralInfo={updateGeneralInfo}
            />
          </div>
          <div className='componentsDiv'>
            <Education
              educationEntries={educationEntries}
              updateEducationEntries={updateEducationEntries}
            />
          </div>
          <div className='componentsDiv'>
            <Experience
              experienceEntries={experienceEntries}
              updateExperienceEntries={updateExperienceEntries} />
          </div>
        </div>
        <div className='output'>
          <div className='page'>
            <GeneralInfoOutput generalInfo={generalInfo} />
            <EducationOutput educationEntries={educationEntries} />
            <ExperienceOutput experienceEntries={experienceEntries} />

          </div>
        </div>
      </div>
    </div>

  )
}

// Utility Functions
export function formatText (text) {
  return text.split("\n").map((line, index) => {
    if (line.trim().startsWith("* ")) {
      return (
        <li key={index}>
          {line.trim().substring(1).trim()}
        </li>
      );
    } else {
      return <p key={index}>{line}</p>;
    }
  });
};

export default App
