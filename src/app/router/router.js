import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Browser from '../pages/Browser';
import { Player } from '../components/Player/Player';
import Auth from '../pages/Auth';

function Router() {
  const url = useSelector(state => state.urlPlayer);

  return (
    <div className="App">
      <Switch>
        <>
          <Route path='/auth'>
            <Auth />
          </Route>
          <div className='playListCont'>
            <Player url={url} />
          </div>
          <div className='bodyApp'>
            <Route exact path='/'>
              <Redirect to='/browser' />
            </Route>
            <Route exact path='/browser'>
              <Browser component={"viewer"} />
            </Route>
            <Route exact path='/search'>
              <Browser component={"search"} />
            </Route>
            <Route exact path='/playlist'>
              <Browser component={"playlist"} />
            </Route>
          </div>
        </>
      </Switch>
    </div>
  )
}

export default Router;
