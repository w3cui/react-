import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link ,IndexRoute} from 'react-router';

import App from "@/Module/index";
import Goods from "@/Module/goods";

let routes = (
	<Route path="/" component={App}>
	  <IndexRoute component={App}/>
	  <Route path="goods" component={Goods} />
	  <Route path="goods/:id" component={Goods} />
	</Route>
);

export default routes;