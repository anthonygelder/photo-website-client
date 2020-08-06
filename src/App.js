import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import About from './About/About'
import PhotoList from './PhotoList/PhotoList'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Route path='/' component={Header} />
        </header>
        <main className='App'>
          <Route exact path='/' component={PhotoList} />
          <Route exact path='/about' component={About} />
        </main>
      </div>
    );
  }
}

export default App;