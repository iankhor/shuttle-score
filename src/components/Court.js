import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import SubCourt from './SubCourt'

class Court extends Component {
        constructor(props){
          super(props)

          this.state = {
            score:0
          }

        }

        render(){
          return (
            <Row>
              <Col xs="12" sm="6"> 
                test 1
              </Col>
              <Col xs="12" sm="6"> 
                test 2
              </Col>
              {/*<SubCourt side="left"/>*/}
              {/*<SubCourt side="right"/>*/}           
            </Row>
          )
        }
}

export default Court