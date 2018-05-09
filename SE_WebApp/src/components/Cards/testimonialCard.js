import React, { Component } from 'react'
import './cardStyle.css'

export default class TestimonialCard extends Component {
  //let testimonialCardInfo = this.pro

  render() {
    let cardInfo = this.props.testimonialCardInfo

    return (
      <div id="testimonialCardDetails">
        <img src="" />
        <div>
          <p id="testimonialText">{`${cardInfo.testimonial}`}</p>
          <div id="testimonailParent">
            <div>{`${cardInfo.parentName.first} ${
              cardInfo.parentName.last
            }`}</div>
            <span>{`(${cardInfo.relationWithStudent} of ${
              cardInfo.studentName.first
            } ${cardInfo.studentName.last})`}</span>
          </div>
          <p id="testimonialSquare">{`${cardInfo.fromSquareEducation}`}</p>
        </div>
      </div>
    )
  }
}
