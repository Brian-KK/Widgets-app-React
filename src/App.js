import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
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

const options = [
	{
		label: 'The color red',
		value: 'red',
	},
	{
		label: 'The color green',
		value: 'green',
	},
	{
		label: 'A shade of blue',
		value: 'blue',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div className='container'>
			<Dropdown
				options={options}
				onSelectedChange={setSelected}
				selected={selected}
			/>
		</div>
	);
};

export default App;
