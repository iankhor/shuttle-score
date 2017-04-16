import React, { Component } from 'react'
import { Row } from 'reactstrap'

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
              <SubCourt side="left"/>
              <SubCourt side="right"/>           
            </Row>
          )
        }
}

export default Court