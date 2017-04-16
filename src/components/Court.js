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
                <SubCourt side="left"/>
              </Col>
              <Col xs="12" sm="6"> 
                <SubCourt side="right"/>
              </Col>
            </Row>
          )
        }
}

export default Court