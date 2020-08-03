import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
// import Photo from './Photo/Photo'

class PhotoList extends Component {

    returnPhotos() {
        const imageName = require('../img/img_lights.jpg')
        return ([imageName,imageName,imageName])
    }

    renderPhotos() {
        const pics = this.returnPhotos()

        return (
            {pics.map}
        )
    }


    render() {

        return (
            <img src={imageName} />
        );
    }
}

export default PhotoList;