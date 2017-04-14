import React from 'react'
import App from './App'
import Score from './Score'

const Public = (props) => {
        return (
            <App> 
              <div className="color-blue"> 
                <h1>Score board</h1>
              </div>
              <Score />
            </App>
        )
}

export default Public