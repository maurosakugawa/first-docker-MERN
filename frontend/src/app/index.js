
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function app() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default app

/*
import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
      super()
      this.state = {
        comments: []
      }

    }

    componentDidMount() {
      fetch('http://localhost:4000/comment/comments')
      .then(response => response.json())
      .then(responseJson => this.setState({comments: responseJson}))
    }
  render() {
    return (
      <div className="App">
        <div       style={{
        backgroundColor: 'blue',
        height: '100px'
      }}
        ><h1>Comments</h1>
      </div>   

          <ul>
            {
              this.state.comments.map(comment => {
                return <li>{comment.message}</li>
              })
            }
          </ul>
        </div> 
    );
  }
}

export default App;
*/

