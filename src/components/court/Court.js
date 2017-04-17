import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Court extends Component {
    render(){
        return(
          <div className="court">

            {/* Left Side line */}
            <div className=""> 
              {/* Side Back Court*/}
              <div className="court-line sideline-back"></div>
              {/* Side Mid Court*/}
              <div className="court-line sideline-mid"></div>
              {/* Side Front Court*/}
              <div className="court-line sideline-front"></div>
            </div>

            {/* Left Mid court*/}
            <div className=""> 
              {/* Mid Back Court*/}
              <div className="court-line midcourt-back"></div>
              {/* Mid Mid Court Left*/}
              <div className="court-line midcourt-mid"></div>
              {/* Mid Front Court*/}
              <div className="court-line midcourt-front"></div>
            </div>

            {/* Left Mid court Left*/}
            <div className=""> 
              {/* Mid Back Court*/}
              <div className="court-line midcourt-back"></div>
              {/* Mid Mid Court Left*/}
              <div className="court-line midcourt-mid"></div>
              {/* Mid Front Court*/}
              <div className="court-line midcourt-front"></div>
            </div>

             {/* Right Side line */}
            <div className=""> 
              {/* Side Back Court*/}
              <div className="court-line sideline-back"></div>
              {/* Side Mid Court*/}
              <div className="court-line sideline-mid"></div>
              {/* Side Front Court*/}
              <div className="court-line sideline-front"></div>
            </div>


            

          </div>
        )

    }
}

export default Court

