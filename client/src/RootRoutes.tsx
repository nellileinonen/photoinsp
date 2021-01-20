import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Photolist from './components/photolist/Photolist';
import Modal from './components/header/Modal';
import Info from './components/header/Info';
import Photo from './components/photo/Photo';

const RootRoutes = () => {
  // TODO: use proper type
  let location: any = useLocation();

  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/">
          <Photolist />
        </Route>
        <Route path='/info'>
          <Modal children={<Info />}/>
        </Route>
        <Route path='/photo/:photoId'>
          <Modal children={<Photo />}/>
        </Route>
      </Switch>

      {/* Modal view on top of background if background is set */}
      {background && <Route path='/info'><Modal children={<Info />}/></Route>}
      {background && <Route path='/photo/:photoId'><Modal children={<Photo/>}/></Route>}

    </div>
  );
};

export default RootRoutes;
