import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageOne from './PageOne';
import Landing from './Landing';

const App = () => (
  <>
    <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pageone" component={PageOne} />
    </BrowserRouter>
  </>
)


export default App;
