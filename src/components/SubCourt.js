import React, { Component } from 'react'
import { Col,
         Button, 
         Badge } from 'reactstrap'

class SubCourt extends Component {
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
                 <Col>
                    <div className="text-score">
                      <Badge>{this.state.score}</Badge>
                    </div>
                    <Button className="text-score-button" block color="success" size="md" onClick={ this.add }>+</Button>
                    <Button className="text-score-button" block outline color="danger" size="md" onClick={ this.minus }>-</Button>
                  </Col> 
          )
        }
}

export default SubCourt