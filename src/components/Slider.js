import React from 'react'
import PropTypes from 'prop-types'
import { Fade } from 'react-slideshow-image'
// import Img1 from './../../static/img/igmus/Igmus-058.jpg'

const Slides = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'test'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'test'
  }
]


const Slider = class extends React.Component {
  constructor(props) {
    super(props)
    this.properties = {
      duration: 3000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true
    }
  }
  render() {
    return (
      <Fade {...this.properties}>
        {Slides && Slides.map(slide => (
          <div className="each-fade slide" style={{'backgroundImage': `url(${slide.img})`}}>
            <span>{slide.title}</span>
          </div>
        ))}
      </Fade>
    )
  }
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
    })
  )
}

export default Slider