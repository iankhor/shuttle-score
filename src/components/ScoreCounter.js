import React, { Component } from 'react'
import { Button, 
         Badge } from 'reactstrap'

class ScoreCounter extends Component {
        constructor(props){
          super(props)

          this.state = {
            score: 0,
          }

        }

        add = () => {
            this.setState( { score: this.state.score + 1 } )
        }

        minus = () => {
            ( this.state.score - 1 ) < 0 ? 
               this.setState( { score: 0 } ) :
               this.setState( { score: this.state.score - 1 } )
        }


        render(){
          return (
                 <div>
                    <div className="text-score">
                      <Badge pill color="danger" >{this.state.score}</Badge>
                    </div>
                      <Button className="text-score-button" block color="success" size="md" onClick={ this.add }>+</Button>
                      <Button className="text-score-button" block outline color="danger" size="md" onClick={ this.minus }>-</Button>
                  </div> 
          )
        }
}

export default ScoreCounter