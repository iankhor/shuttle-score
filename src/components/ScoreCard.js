import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import ScoreCounter from './ScoreCounter'

class ScoreCard extends Component {
        render(){
          return (
            <Row>
              <Col xs="12" sm="6"> 
                <ScoreCounter side="left"/>
              </Col>
              <Col xs="12" sm="6"> 
                <ScoreCounter side="right"/>
              </Col>
            </Row>
          )
        }
}

export default ScoreCard