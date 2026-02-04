import React from 'react'
import './spotify.scss'
import MacWindow from './MacWindow'
const Spotify = ({windowName, setWindowsState}) => {
  return (
    <MacWindow width='25vw' windowName={windowName} setWindowsState={setWindowsState}>
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1Yehzo?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </MacWindow>
  )
}

export default Spotify
