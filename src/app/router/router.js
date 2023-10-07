import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Browser from '../pages/Browser';
import { Player } from '../components/Player/Player';
import Auth from '../pages/Auth';
import Login from '../pages/Login';

function Router() {
  const url = useSelector(state => state.urlPlayer);
  const currentUser = useSelector(state => state.currentUser);

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
            <Route path='/playlist/:id'>
              <Browser component={"playlist"} />
            </Route>
            <Route exact path='/library'>
              <Browser component={"library"} />
            </Route>
          </div>
          {
            currentUser &&
            <div className='playListCont'>
              <Player url={url} />
            </div>
          }
        </>
      </Switch>
    </div>
  )
}

export default Router;
