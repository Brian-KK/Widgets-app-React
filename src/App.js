import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
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

const showAccordion = () => {
	if (window.location.pathname === '/') {
		return <Accordion items={items} />;
	}
};

const showList = () => {
	if (window.location.pathname === '/list') {
		return <Search />;
	}
};

const showDropdown = () => {
	if (window.location.pathname === '/dropdown') {
		return <Dropdown />;
	}
};

const showTranslate = () => {
	if (window.location.pathname === '/translate') {
		return <Translate />;
	}
};

const App = () => {
	return (
		<div className='container'>
			{showAccordion()}
			{showList()}
			{showDropdown()}
			{showTranslate()}
		</div>
	);
};

export default App;
