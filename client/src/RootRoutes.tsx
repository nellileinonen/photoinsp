import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Photolist from './components/photolist/Photolist';
import Modal from './components/header/modal/Modal';
import Info from './components/header/info/Info';
import Photo from './components/photo/Photo';

const RootRoutes = () => {
  // TODO: use proper type
  let location: any = useLocation();
  let background = location.state && location.state.background;

  /* !! SOS !! This is dangerous and stupid !! SOS !! */
  //console.log('location in rootroutes: ', location);
  let photoId = '';
  const pathElements = location.pathname.split('/');
  if (pathElements.length === 3 && pathElements[1] === 'photos') {
    photoId = pathElements.pop();
  }

  return (
    <div>
      <Switch location={background || location}>
        <Route path='/info'>
          <Modal children={<Info />}/>
        </Route>
        <Route exact path="/">
          <Photolist />
        </Route>
        <Route path='/photos/:photoId'>
          <Photo photoId={photoId}/>
        </Route>
      </Switch>

      {/* Modal view on top of background if background is set */}
      {background && <Route path='/info'><Modal children={<Info />}/></Route>}

    </div>
  );
};

export default RootRoutes;
