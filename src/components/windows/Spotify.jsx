import React from 'react'
import './spotify.css'
import MacWindow from './MacWindow'
const Spotify = () => {
  return (
    <MacWindow width='25vw'>
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO1Yehzo?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </MacWindow>
  )
}

export default Spotify
