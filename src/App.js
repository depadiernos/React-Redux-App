import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import Header from './components/Header'
import Posts from './components/Posts'
import Login from './components/Login'

function App(props) {
  return (
    <>
      <Header location={props.location}/>
      <Route path='/' exact component={Posts} />
      <Route path='/login' component={Login} />
    </>
  );
}

export default withRouter(App);
