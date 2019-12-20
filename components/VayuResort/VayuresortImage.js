import React, {Component} from 'react';

import ImageContainer from '../ImageContainer';

export default class VayuResortImage extends Component {
  render() {
    const images = [
        {name: '', src: require('../../assets/VayuResort/Image/1.jpg')},
        {name: '', src: require('../../assets/VayuResort/Image/2.jpg')},
        {name: '', src: require('../../assets/VayuResort/Image/3.jpg')},
        {name: '', src: require('../../assets/VayuResort/Image/4.jpg')},
        {name: '', src: require('../../assets/VayuResort/Image/5.jpg')},
      ];
    return (
      <ImageContainer images={images}/>
    );
  }
}
