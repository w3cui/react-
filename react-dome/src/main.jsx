import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route, Link } from 'react-router';

import routes from "./Routes/routes";

ReactDOM.render((
  <Router history={hashHistory} routes={routes} ></Router>
), document.getElementById("myApp"));
// 你加在那里啊？