import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Court extends Component {
    render(){
        return(
          <div className="court">
            <Row className=""> {/* Side line*/}
              <Col className="court-line sideline"> {/* Side Back Court*/}
                back
              </Col>
              <Col className="court-line sideline"> {/* Side Mid Court*/}
                Mid
              </Col>
              <Col className="court-line sideline"> {/* Side Front Court*/}
                Front
              </Col>
            </Row>

            <Row> {/* Mid Court Left */}
              <Col className="court-line midcourt"> {/* Side Back Court*/}
                back
              </Col>
              <Col className="court-line midcourt"> {/* Side Mid Court*/}
                Mid
              </Col>
              <Col className="court-line midcourt"> {/* Side Front Court*/}
                Front
              </Col>
            </Row>

            <Row> {/* Mid Court Right */}
              <Col className="court-line midcourt"> {/* Side Back Court*/}
                back
              </Col>
              <Col className="court-line midcourt"> {/* Side Mid Court*/}
                Mid
              </Col>
              <Col className="court-line midcourt"> {/* Side Front Court*/}
                Front
              </Col>
            </Row>

            <Row className=""> {/* Side line*/}
              <Col className="court-line sideline"> {/* Side Back Court*/}
                back
              </Col>
              <Col className="court-line sideline"> {/* Side Mid Court*/}
                Mid
              </Col>
              <Col className="court-line sideline"> {/* Side Front Court*/}
                Front
              </Col>
            </Row>

          </div>
        )

    }
}

export default Court

