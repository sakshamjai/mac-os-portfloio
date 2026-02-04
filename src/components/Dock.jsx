import React from 'react'
import '../dock.scss'

const Dock = ({windowsState, setWindowsState}) => {
  return (
    <footer className='dock'>
        <div onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }} className="icon command">
            <img src="..\public\dock-icons\command-line-icon.svg" alt="" />
        </div>
        <div onClick={()=>{window.open('https://calendar.google.com/','_blank')}} className="icon calender">
            <img src="..\public\dock-icons\calender-icon.svg" alt="" />
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, github: true })) }} className="icon github">
            <img src="..\public\dock-icons\github-icon.svg" alt="" />
        </div>
        <div onClick={()=>{window.open('https://www.linkedin.com/in/saksham-jain-532587272','_blank')}} className="icon link">
            <img src="..\public\dock-icons\link-icon.svg" alt="" />
        </div>
        <div onClick={()=>{window.open("mailto:sakshamjain3493@gmail.com",'_blank')}} className="icon mail">
            <img src="..\public\dock-icons\mail-icon.svg" alt="" />
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, notes: true })) }} className="icon notes">
            <img src="..\public\dock-icons\notes-icon.svg" alt="" />
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }} className="icon pdf">
            <img src="..\public\dock-icons\pdf-icon.svg" alt="" />
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }} className="icon spotify">
            <img src="..\public\dock-icons\spotify-icon.svg" alt="" />
        </div>
    </footer>
  )
}

export default Dock
