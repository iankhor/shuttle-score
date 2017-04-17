import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Court extends Component {
    render(){
        return(
          <div className="court">

            {/* Top Side line */}
            <div className=""> 
              {/* Left Side Back Court*/}
              <div className="court-line sideline-back"></div>
              {/* Left Side Mid Court*/}
              <div className="court-line sideline-mid"></div>
              {/* Left Side Front Court*/}
              <div className="court-line sideline-front"></div>

              {/* Right Side Front Court*/}
              <div className="court-line sideline-front"></div>
              {/* Right Side Mid Court*/}
              <div className="court-line sideline-mid"></div>
              {/* Right Side Back Court*/}
              <div className="court-line sideline-back"></div>
            </div>

            {/* Top Mid court*/}
            <div className=""> 
              {/* Left Mid Back Court*/}
              <div className="court-line midcourt-back"></div>
              {/* Left Mid Court Left*/}
              <div className="court-line midcourt-mid"></div>
              {/* Left Mid Front Court*/}
              <div className="court-line midcourt-front"></div>

              {/* Right Mid Front Court*/}
              <div className="court-line midcourt-front"></div>
              {/* Right Mid Court Left*/}
              <div className="court-line midcourt-mid"></div>
              {/* Right Mid Back Court*/}
              <div className="court-line midcourt-back"></div>
            </div>

            {/* Bottom Mid court*/}
            <div className=""> 
              {/* Left Mid Back Court*/}
              <div className="court-line midcourt-back"></div>
              {/* Left Mid Court Left*/}
              <div className="court-line midcourt-mid"></div>
              {/* Left Mid Front Court*/}
              <div className="court-line midcourt-front"></div>

              {/* Right Mid Front Court*/}
              <div className="court-line midcourt-front"></div>
              {/* Right Mid Court Left*/}
              <div className="court-line midcourt-mid"></div>
              {/* Right Mid Back Court*/}
              <div className="court-line midcourt-back"></div>
            </div>

             {/* Bottom Side line */}
            <div className=""> 
              {/* Left Side Back Court*/}
              <div className="court-line sideline-back"></div>
              {/* Left Side Mid Court*/}
              <div className="court-line sideline-mid"></div>
              {/* Left Side Front Court*/}
              <div className="court-line sideline-front"></div>

              {/* Right Side Front Court*/}
              <div className="court-line sideline-front"></div>
              {/* Right Side Mid Court*/}
              <div className="court-line sideline-mid"></div>
              {/* Right Side Back Court*/}
              <div className="court-line sideline-back"></div>
            </div>


            

          </div>
        )

    }
}

export default Court

