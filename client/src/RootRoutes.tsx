import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Photolist from './components/photolist/Photolist';
import Modal from './components/header/modal/Modal';
import Info from './components/header/info/Info';
import Photo from './components/photo/Photo';
import Header from './components/header/Header';
import NoMatch from './components/noMatch/NoMatch';
import Photographer from './components/photographer/Photographer';

const RootRoutes = () => {
  // TODO: use proper type
  // Location unknown nowadays: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/41674
  const location: any = useLocation();

  const background = location.state && location.state.background;

  let param = '';
  if (typeof location.pathname !== undefined) {
    const pathElements = location.pathname.split('/');
    if (pathElements.length === 3 &&
      (pathElements[1] === 'photos' || pathElements[1] === 'photographer')) {
      param = pathElements.pop();
    }
  }

  return (
    <div>
      <Switch location={background || location}>

        <Route exact path="/">
          <Header />
          <Photolist />
        </Route>

        <Route path='/info'>
          <Modal children={<Info />}/>
        </Route>

        {/* Redirect to the photo list view */}
        <Route exact path='/photos'>
          <Redirect to='/'/>
        </Route>

        <Route path='/photos/:photoId'>
          <Photo photoId={param}/>
        </Route>

        <Route path='/photographer/:username'>
          <Photographer username={param}/>
        </Route>

        <Route path='*' >
          <NoMatch />
        </Route>

      </Switch>

      {/* Modal view on top of background if background is set */}
      {background &&
      <Route path='/info'>
        <Modal children={<Info />} />
      </Route>}

    </div>
  );
};

export default RootRoutes;
