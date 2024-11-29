import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store/store';
import './styles/global.css';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Permissions from './pages/Permissions';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
