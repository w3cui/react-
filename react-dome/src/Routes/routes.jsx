import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, IndexRoute } from 'react-router';

import App from "@/Module/index";
import Goods from "@/Module/goods";
import AntUI from "@/Module/Ant";

let routes = (
	<div>
		<Route path="/" component={App} />
		<IndexRoute component={App} />
		// 剩下的问题，应该是这里的问题，这里你组件嵌套重复了，在用一个空壳子啥的包一下，应该就可以了，88
		<Route path="goods" component={Goods} />
		<Route path="ant/index" component={AntUI} />
	</div>
);

export default routes;