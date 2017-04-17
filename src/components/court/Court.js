import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Badge } from 'reactstrap'

class Court extends Component {
        constructor(props){
          super(props)

          this.state = {
            scoreLeftPlayer: 0,
            scoreRightPlayer: 0,
          }

        }

        add = (scoredSide) => {
            scoredSide === "left" ?
              this.setState( { scoreLeftPlayer: this.state.scoreLeftPlayer + 1 } ) :
              this.setState( { scoreRightPlayer: this.state.scoreRightPlayer + 1 } )
        }

    render(){
        return(

          <div>
          <Row>
            <Col>
               <Badge className="text-score" pill color="info" >{this.state.scoreLeftPlayer}</Badge>
            </Col>
            <Col>
               <Badge className="text-score" pill color="info" >{this.state.scoreRightPlayer}</Badge>
            </Col>
          </Row>
          
            <Row className="court">

              {/* Top Side line */}
              <div className="sideline"> 
                {/* Left Side Back Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-topside courtline-left sideline-back "></div>
                {/* Left Side Mid Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-topside sideline-mid"></div>
                {/* Left Side Front Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-topside sideline-front"></div>

                {/* Right Side Front Court*/}
                <div onClick={ this.add } className="courtline-topside sideline-front"></div>
                {/* Right Side Mid Court*/}
                <div onClick={ this.add } className="courtline-topside sideline-mid"></div>
                {/* Right Side Back Court*/}
                <div onClick={ this.add } className="courtline-topside courtline-right sideline-back"></div>
              </div>

              {/* Top Mid court*/}
              <div className="midcourt"> 
                {/* Left Mid Back Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-leftside midcourt-back"></div>
                {/* Left Mid Court Left*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline midcourt-mid"></div>
                {/* Left Mid Front Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline countline-midright midcourt-front"></div>

                {/* Right Mid Front Court*/}
                <div onClick={ this.add } className="courtline countline-midleft midcourt-front"></div>
                {/* Right Mid Court Left*/}
                <div onClick={ this.add } className="courtline midcourt-mid"></div>
                {/* Right Mid Back Court*/}
                <div onClick={ this.add } className="courtline-rightside midcourt-back"></div>
              </div>

              {/* Bottom Mid court*/}
              <div className="midcourt"> 
                {/* Left Mid Back Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-leftside midcourt-back"></div>
                {/* Left Mid Court Left*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline midcourt-mid"></div>
                {/* Left Mid Front Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline countline-midright midcourt-front"></div>

                {/* Right Mid Front Court*/}
                <div onClick={ this.add } className="courtline countline-midleft midcourt-front"></div>
                {/* Right Mid Court Left*/}
                <div onClick={ this.add } className="courtline midcourt-mid"></div>
                {/* Right Mid Back Court*/}
                <div onClick={ this.add } className="courtline-rightside midcourt-back"></div>
              </div>

              {/* Bottom Side line */}
              <div className="sideline"> 
                {/* Left Side Back Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-bottomside courtline-left sideline-back "></div>
                {/* Left Side Mid Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-bottomside sideline-mid"></div>
                {/* Left Side Front Court*/}
                <div onClick={ this.add.bind(null,"left") } className="courtline-bottomside sideline-front"></div>

                {/* Right Side Front Court*/}
                <div onClick={ this.add } className="courtline-bottomside sideline-front"></div>
                {/* Right Side Mid Court*/}
                <div onClick={ this.add } className="courtline-bottomside sideline-mid"></div>
                {/* Right Side Back Court*/}
                <div onClick={ this.add } className="courtline-bottomside courtline-right sideline-back"></div>
              </div>
            </Row>
          </div>
          
        )

    }
}

export default Court

