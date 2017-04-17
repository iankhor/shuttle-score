import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Court extends Component {
    render(){
        return(
          <div className="court">

            {/* Top Side line */}
            <div className="sideline"> 
              {/* Left Side Back Court*/}
              <div className="courtline-topside courtline-left sideline-back "></div>
              {/* Left Side Mid Court*/}
              <div className="courtline-topside sideline-mid"></div>
              {/* Left Side Front Court*/}
              <div className="courtline-topside sideline-front"></div>

              {/* Right Side Front Court*/}
              <div className="courtline-topside sideline-front"></div>
              {/* Right Side Mid Court*/}
              <div className="courtline-topside sideline-mid"></div>
              {/* Right Side Back Court*/}
              <div className="courtline-topside courtline-right sideline-back"></div>
            </div>

            {/* Top Mid court*/}
            <div className="midcourt"> 
              {/* Left Mid Back Court*/}
              <div className="courtline-leftside midcourt-back"></div>
              {/* Left Mid Court Left*/}
              <div className="courtline midcourt-mid"></div>
              {/* Left Mid Front Court*/}
              <div className="courtline countline-midright midcourt-front"></div>

              {/* Right Mid Front Court*/}
              <div className="courtline countline-midleft midcourt-front"></div>
              {/* Right Mid Court Left*/}
              <div className="courtline midcourt-mid"></div>
              {/* Right Mid Back Court*/}
              <div className="courtline-rightside midcourt-back"></div>
            </div>

            {/* Bottom Mid court*/}
            <div className="midcourt"> 
              {/* Left Mid Back Court*/}
              <div className="courtline-leftside midcourt-back"></div>
              {/* Left Mid Court Left*/}
              <div className="courtline midcourt-mid"></div>
              {/* Left Mid Front Court*/}
              <div className="courtline countline-midright midcourt-front"></div>

              {/* Right Mid Front Court*/}
              <div className="courtline countline-midleft midcourt-front"></div>
              {/* Right Mid Court Left*/}
              <div className="courtline midcourt-mid"></div>
              {/* Right Mid Back Court*/}
              <div className="courtline-rightside midcourt-back"></div>
            </div>

             {/* Bottom Side line */}
            <div className="sideline"> 
              {/* Left Side Back Court*/}
              <div className="courtline-bottomside courtline-left sideline-back "></div>
              {/* Left Side Mid Court*/}
              <div className="courtline-bottomside sideline-mid"></div>
              {/* Left Side Front Court*/}
              <div className="courtline-bottomside sideline-front"></div>

              {/* Right Side Front Court*/}
              <div className="courtline-bottomside sideline-front"></div>
              {/* Right Side Mid Court*/}
              <div className="courtline-bottomside sideline-mid"></div>
              {/* Right Side Back Court*/}
              <div className="courtline-bottomside courtline-right sideline-back"></div>
            </div>


            

          </div>
        )

    }
}

export default Court

