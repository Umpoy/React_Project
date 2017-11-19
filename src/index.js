import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAOr3VvEDRdI5u9KGTrsJ7usMsG5FWcl6s';

const App = () => {
	return (
		<div>
			<SearchBar /> 
		</div>
	)
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
