import React, { Component } from 'react'
import './studentCard.css'

export default class StudentCard extends Component {
  render() {
    let cardInfo = this.props.studentCardInfo

    return (
      <div id="studentCardContainter">
        <h2>98.99% Scored</h2>
        <div className="img-wrapper">
          <img src="" />
        </div>
        <div className="details">
          <h4>Keerti Didwania</h4>
          <p>Xth - S L Porwal</p>
        </div>
      </div>
    )
  }
}
