import React from 'react'
import {Rnd} from 'react-rnd'
import './macwindow.scss'
const MacWindow = ({children}) => {
  return (
    <Rnd>
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red-dot"></div>
                    <div className="dot yellow-dot"></div>
                    <div className="dot green-dot"></div>
                </div>
                <p>sakshamjain -zsh</p>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
