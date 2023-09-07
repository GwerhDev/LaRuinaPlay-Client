import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Browser from '../pages/Browser/Browser';

import { PlayerList } from '../components/Player/Player';

function Router() {
  const url = useSelector(state=>state.urlPlayer)
  return (
    <div className="App">
      <Switch>
        <>
          <div className='userPlayerCont'>
            <div className='playListCont'>
              <PlayerList url={url} />
            </div>
          </div>
          <div className='bodyApp'>
            <Route exact path='/'>
              <Redirect to='/browser' />
            </Route>
            <Route exact path='/browser'>
              <Browser />
            </Route>
          </div>
        </>
      </Switch>
    </div>
  )
}

export default Router;
