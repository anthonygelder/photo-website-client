import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header/Header'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Route path='/' component={Header} />
        </header>
        <main className='App'>
          <Link to='/'>
            Link
          </Link>
        </main>
      </div>
    );
  }
}

export default App;