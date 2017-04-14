import React, { Component } from 'react'
import { Container,
         Row,
         Col,
         Button, 
         ButtonGroup } from 'reactstrap'

class Score extends Component {
        constructor(props){
          super(props)

          this.state = {
            player1: 0,
            player2: 0
          }

        }


        add = (playerID) => {
          switch(playerID){
            case "p1":
              this.setState( { player1: 1 + this.state.player1 } )
              console.log("Player 1 points increased")
              break
            case "p2":
              this.setState( { player1: 1 + this.state.player2 } )
              this.setState = 1 + this.state.player2
              console.log("Player 2 points increased")
              break
            default:
              console.log("Error : nothing added")

          }
        }


        render(){
          return (
            <Row>
              <Col className="border">
                 <div className="border">
                    Player 1 Score : {this.state.player1}
                 </div>
                <Button color="danger" onClick={ this.add.bind(null, "p1") }>Add Player 1</Button>
              </Col> 
              <Col className="border">
                Player 2
              </Col> 
            
            </Row>
          )
        }
}

export default Score