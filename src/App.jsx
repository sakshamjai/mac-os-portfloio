import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
const App = () => {
const [windowsState, setWindowsState] = useState({
  github: false,
  resume: false,
  notes: false,
  spotify: false,
  cli: false
})
  return (
      <main>
        <Dock windowsState = {windowsState} setWindowsState = {setWindowsState} />
        <Nav />
        {windowsState.github && <Github windowName = 'github' setWindowsState = {setWindowsState} />}
        {windowsState.notes && <Notes windowName = 'notes' setWindowsState = {setWindowsState}/>}
        {windowsState.resume && <Resume windowName = 'resume' setWindowsState = {setWindowsState} />}
        {windowsState.spotify && <Spotify windowName = 'spotify' setWindowsState = {setWindowsState} />}
        {windowsState.cli && <Cli windowName = 'cli' setWindowsState = {setWindowsState} />}
      </main>
  )
}

export default App

