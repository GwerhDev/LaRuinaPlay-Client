import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Browser from '../pages/Browser';
import { Player } from '../components/Player/Player';
import Auth from '../pages/Auth';
import Login from '../pages/Login';
import { RegisterMessage } from '../components/RegisterMessage/RegisterMessage';

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
              <Browser component={"library"} />
            </Route>
          </div>
          {
            currentUser
              ?
              <div className='player-container'>
                <Player url={url} />
              </div>
              :
              <div className='message-container'>
                <RegisterMessage/>
              </div>
          }
        </>
      </Switch>
    </div>
  )
}

export default Router;
