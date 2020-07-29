import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <header>
          <Route path='/' component={} />
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