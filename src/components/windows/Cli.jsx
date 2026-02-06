import React from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './MacWindow'
import './cli.scss'
const Cli = ({windowName, setWindowsState}) => {
    const commands = {
about: {
  description: 'About me',
  usage: 'about',
  fn: () =>
    'I am a full-stack web developer and BTech CSE student who enjoys building real-world web apps using React, Node.js, and MongoDB. I focus on writing clean code, understanding how systems work end-to-end, and improving through hands-on projects.'
},

skills: {
  description: 'List technical skills',
  usage: 'skills',
  fn: () => `Frontend: React, JavaScript, HTML5, CSS/SCSS
            Backend: Node.js, Express.js
            Databases: MongoDB, MySQL
            Languages: JavaScript, C++
            Tools: Git, GitHub
            Core CS: OOPS, Problem Solving`
},

projects: {
  description: 'View my projects',
  usage: 'projects',
  fn: () => `1. Precripto – Healthcare Appointment Booking System
   - MERN stack app with JWT authentication, booking system & slot management
   - Live: https://prescripto.vercel.app/

            2. StrategiXchess – Real-Time Multiplayer Chess App
   - Real-time multiplayer chess using React, Node.js & Socket.IO
   - Live: https://strategixchess.onrender.com/

            3. Empower – Employee Task Management Tool
   - Task assignment & tracking system built with React`
},

experience: {
  description: 'Display experience',
  usage: 'experience',
  fn: () => `Full-Stack Developer (Projects & Practice)
  - Built multiple MERN stack projects with authentication, REST APIs, and real-time features
  - Implemented CRUD operations, protected routes, and database schemas
  - Experience with debugging, API integration, and frontend-backend coordination

  Open to internships and entry-level full-stack roles.`
},

        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: sakshamjain3493@gmail.com
            Phone: +91 8930531261
            Location: Panipat, Haryana`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com', '_blank')
                return 'Opening GitHub...'
            }
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Instagram: @5ak5ham.ja1n
            LinkedIn: /in/saksham-jain-532587272`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

const welcomeMessage = `
Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring!`
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="cli-window">
            <Terminal
                commands={commands}
                welcomeMessage={welcomeMessage}
                promptLabel={'me@React:~$'}
                promptLabelStyle={{ color: '#0f208d' }}>
            </Terminal>
        </div>
    </MacWindow>
  )
}

export default Cli
