import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/weatherWeb" exact component={Main} />
        <Route path="/weatherWeb/detail" exact component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}