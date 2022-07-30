import React from 'react';
import Accordion from './Accordion';
import '../index.css';

const items = [
	{
		title: 'T1',
		content: 'C1',
	},
	{
		title: 'T2',
		content: 'C2',
	},
	{
		title: 'T3',
		content: 'C3',
	},
];

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1>Widgets App</h1>
				<Accordion items={items} />
			</div>
		);
	}
}

export default App;
