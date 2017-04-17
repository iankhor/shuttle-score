import React from 'react'
import AppContainer from './AppContainer'
import ScoreCard from './ScoreCard'
import Court from './court/Court'

const App = (props) => {
        return (
            <AppContainer> 
              <ScoreCard />
              <br />
              <Court />
            </AppContainer>
        )
}

export default App