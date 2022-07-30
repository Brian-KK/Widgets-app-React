import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import './index.css';

const items = [
	{
		title: 'This will be title 1',
		content: 'This will be the content of title 1',
	},
	{
		title: 'This will be title 2',
		content: 'This will be the content of title 2',
	},
	{
		title: 'This will be title 3',
		content: 'This will be the content of title 3',
	},
];

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<Search />
			</div>
		);
	}
}

export default App;
