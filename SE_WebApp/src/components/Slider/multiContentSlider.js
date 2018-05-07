import React, { Component } from 'react'
import Slider from 'react-slick'
import './multiContentStyle.css'
import StudentCard from '../Cards/studentCard'

export default class MultiContentSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      rows: 1,
      slidesPerRow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    let displayValueItems = this.props.displayValue
    let displayIn = this.props.displayInCategory
    // displayValueItems.forEach(element => {
    //   console.log`${element.node.studentName.first} ${
    //     element.node.studentName.last
    //   }`
    // })

    return (
      <div>
        <span className="cardSliderTitle"> {displayIn} </span>
        <Slider {...settings}>
          {displayValueItems.map(function(slides) {
            return (
              // <h2 className="cards" >
              //   `{slides.node.studentName.first} +{' '}
              //   {slides.node.studentName.last}`
              // </h2>
              <StudentCard studentCardInfo={slides.node} key={slides.node.id} />
            )
          })}
        </Slider>
      </div>
    )
  }
}
