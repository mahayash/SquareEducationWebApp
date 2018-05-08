import React, { Component } from 'react'
import './studentCard.css'

export default class TestimonialCard extends Component {
  //let testimonialCardInfo = this.pro

  render() {
    let cardInfo = this.props.testimonialCardInfo

    return (
      <div id="studentCardContainter">
        <div className="img-wrapper">
          <img src="" />
        </div>
        <div className="details">
          <h4>{`${cardInfo.parentName.first} ${
            cardInfo.parentName.last
          }`}</h4>
          <p>{`${cardInfo.testimonial} - ${cardInfo.fromSquareEducation}`}</p>
        </div>
      </div>
    )
  }
}
