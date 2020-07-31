import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header/Header'
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
          <Route path='/' component={PhotoList} />
        </main>
      </div>
    );
  }
}

export default App;