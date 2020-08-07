import React from 'react';
import './App.css';
import Game from './Component/game/Game';
import bulldogs from './assets/images/bulldogs.jpg';
import eagles from './assets/images/eagles.jpg';
import wildcats from './assets/images/eagles.jpg';
import yellowjackets from './assets/images/yellowjackets.jpg'

function App(props) {
  const bulldog = {
    name: 'Bulldogs',
    logoSrc: bulldogs
  }

  const wildcat = {
    name: 'Wildcats',
    logoSrc: wildcats
  }

  const eagle = {
    name: 'Eagles',
    logoSrc: eagles
  }

  const yellowjacket = {
    name: 'Yellow Jackets',
    logoSrc: yellowjackets
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={bulldog}
        visitingTeam={wildcat}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={eagle}
        visitingTeam={yellowjacket}
      />
    </div>
  )
}


export default App
