import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom'
// import Photo from './Photo/Photo'
import './PhotoList.css'

class PhotoList extends Component {

    returnPhotos() {
        const imageName = require('../img/img_lights.jpg')
        return ([<img className="slide" src={imageName} alt="logo"/>,<img className="slide" src={imageName} alt="logo"/>,<img className="slide" src={imageName} alt="logo"/>])
    }

    renderPhotos() {
        // const pics = this.returnPhotos()
    }


    render() {

        return (
            <section className="outer-wrapper">
                <div className="wrapper">
                    {this.returnPhotos()}
                </div>
            </section>
        );
    }
}

export default PhotoList;