import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ComponentsGroup from "./componentGroup";
import './scss/app.css';
import registerServiceWorker from './registerServiceWorker';
import 'ukelli-ui/src/style/index.scss';
//import './scss/comsupply.scss';

ReactDOM.render(
	(
		<ComponentsGroup/>
	),
	document.getElementById('root')
	);

registerServiceWorker();
