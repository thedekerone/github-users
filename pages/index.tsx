import React from 'react';
import { SearchPage } from '../components/SearchPage/index';
import { GlobalStyles } from '../utils/GlobalStyles';
import { Navbar } from '../components/Navbar';
import { useGithubApi } from '../hooks/useGithubApi';
import { DataContext } from '../components/DataContext';
import { UsersInSearch } from '../components/UsersInSearch';

export default () => {
	const [
		data
	] = useGithubApi('https://api.github.com/search/users?q=t&&X-RateLimit-Limit=5');

	return (
		<DataContext.Provider value={data}>
			<GlobalStyles />
			<Navbar />
			<SearchPage />
			<UsersInSearch />
		</DataContext.Provider>
	);
};