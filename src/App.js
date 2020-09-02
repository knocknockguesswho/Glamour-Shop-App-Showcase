import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab)

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
