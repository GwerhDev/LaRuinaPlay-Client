import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import Browser from '../pages/Browser/Browser';
import AuthToken from '../components/Auth/AuthToken';

import { PlayerList } from '../components/Media/PlayerList';
import { OptionsCanvas } from '../components/Utils/SlideCanvas';

function Router() {
  const url = useSelector(state=>state.urlPlayer)
  const option = useSelector(state=>state.option)
  return (
    <div className="App">
      <Switch>
        <>
          <Nav/>
          <div className='userPlayerCont'>
          { (url !== '') || (option === 'playlist')?
            <div className='playListCont'>
              <PlayerList url={url} />
            </div> : null
          }  
          </div>
          <div className='bodyApp'>
            <OptionsCanvas/>
            <Route path='/auth'>
              <AuthToken />
            </Route>
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
