import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../pages/Auth';
import Login from '../pages/Login';
import Browser from '../pages/Browser';
import { BottomMenu } from '../components/BottomMenu/BottomMenu';

function Router() {

  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <>
          <Route path='/auth'>
            <Auth />
          </Route>
          <div className='body-app'>
            <Route exact path='/'>
              <Redirect to='/browser' />
            </Route>
            <Route exact path='/browser'>
              <Browser component={"viewer"} />
            </Route>
            <Route exact path='/search'>
              <Browser component={"search"} />
            </Route>
            <Route path='/playlist/:id'>
              <Browser component={"playlist"} />
            </Route>
            <Route exact path='/library'>
              <Browser component={"my-library"} />
            </Route>
            <Route path='/library/:id'>
              <Browser component={"library"} />
            </Route>
          </div>
          <BottomMenu />
        </>
      </Switch>
    </div>
  )
}

export default Router;
