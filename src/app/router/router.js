import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Browser from '../pages/Browser';
import Login from '../pages/Login';

import { Player } from '../components/Player/Player';

function Router() {
  const url = useSelector(state=>state.urlPlayer)
  return (
    <div className="App">
      <Switch>
        <>
          <div className='playListCont'>
            <Player url={url} />
          </div>
          <div className='bodyApp'>
            <Route exact path='/'>
              <Redirect to='/browser' />
            </Route>
            <Route exact path='/browser'>
              <Browser />
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
          </div>
        </>
      </Switch>
    </div>
  )
}

export default Router;
