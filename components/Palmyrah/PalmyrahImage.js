import React, {Component} from 'react';

import ImageContainer from '../ImageContainer';

export default class PalmyrahImage extends Component {
  render() {
    const images = [
        {name: '', src: require('../../assets/Palmyrah/Image/1.jpg')},
        {name: '', src: require('../../assets/Palmyrah/Image/2.jpg')},
        {name: '', src: require('../../assets/Palmyrah/Image/3.jpg')},
        {name: '', src: require('../../assets/Palmyrah/Image/4.jpg')},
        {name: '', src: require('../../assets/Palmyrah/Image/5.jpg')},
        
      ];
    return (
      <ImageContainer images={images}/>
    );
  }
}
