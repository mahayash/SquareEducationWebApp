import React, { Component } from 'react'
import Slider from 'react-slick'
import './multiContentStyle.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class MultiContentSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
        <h1> {displayIn} </h1>
        <Slider {...settings}>
          {displayValueItems.map(function(slides) {
            return (
              <h2>
                `{slides.node.studentName.first} +{' '}
                {slides.node.studentName.last}`
              </h2>
            )
          })}
        </Slider>
      </div>
    )
  }
}
