import React from 'react'
import '../dock.scss'
const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon command">
            <img src="..\public\dock-icons\command-line-icon.svg" alt="" />
        </div>
        <div className="icon calender">
            <img src="..\public\dock-icons\calender-icon.svg" alt="" />
        </div>
        <div className="icon github">
            <img src="..\public\dock-icons\github-icon.svg" alt="" />
        </div>
        <div className="icon link">
            <img src="..\public\dock-icons\link-icon.svg" alt="" />
        </div>
        <div className="icon mail">
            <img src="..\public\dock-icons\mail-icon.svg" alt="" />
        </div>
        <div className="icon notes">
            <img src="..\public\dock-icons\notes-icon.svg" alt="" />
        </div>
        <div className="icon pdf">
            <img src="..\public\dock-icons\pdf-icon.svg" alt="" />
        </div>
        <div className="icon spotify">
            <img src="..\public\dock-icons\spotify-icon.svg" alt="" />
        </div>
    </footer>
  )
}

export default Dock
