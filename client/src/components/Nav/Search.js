import { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Input, Spinner, useToasts } from '@geist-ui/react';
import { Search as MagnifyingGlass } from '@geist-ui/react-icons';

const Search = () => {
	const [, setToast] = useToasts();
	const [search, setSearch] = useState('');

	const user = useSelector(state => state.user.user);
	const isSearching = useSelector(state => state.user.isSearching);

	const history = useHistory();

	const handleSearch = e => {
		if (e.key !== 'Enter') {
			return;
		}

		if (e.target.value.length < 3) {
			setToast({
				text: 'Search input must be at least 3 characters long.',
				type: 'warning',
			});
			return;
		}

		history.push(`/users?s=${e.target.value}`);
	};

	if (!user) {
		return <></>;
	}

	return (
		<Input
			icon={isSearching ? <Spinner /> : <MagnifyingGlass />}
			placeholder='search for user'
			value={search}
			onChange={e => setSearch(e.target.value)}
			onKeyDown={handleSearch}
			clearable
		/>
	);
};

export default Search;
