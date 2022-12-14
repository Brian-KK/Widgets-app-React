import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			});
			setResults(data.query.search);
		};

		const timeoutId = setTimeout(() => {
			if (term) {
				search();
			}
		}, 750);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [term]);

	const renderedResults = results.map(res => {
		return (
			<div className='item' key={res.pageid}>
				<div className='right floated content'>
					<a
						href={`https://en.wikipedia.org?cureid=${res.pageid}`}
						className='ui button'>
						Go
					</a>
				</div>
				<div className='content'>
					<div className='header'>{res.title}</div>
					<span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={e => setTerm(e.target.value)}
						className='input'
					/>
				</div>
			</div>
			<div className='ui celled list'>{renderedResults}</div>
		</div>
	);
};

export default Search;
