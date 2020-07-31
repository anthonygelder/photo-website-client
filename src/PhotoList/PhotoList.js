import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
// import Photo from './Photo/Photo'

class PhotoList extends Component {


    render() {
        const imageName = require('../img/img_lights.jpg')

        return (
            <img src={imageName} />
        );
    }
}

export default PhotoList;