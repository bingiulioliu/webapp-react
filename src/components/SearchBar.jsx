import { useState } from "react";
import fetchSearchBar from '../utils/fetchSearchBar.js';
import SearchBarResults from './SearchBarResults.jsx';

function SearchBar({ setIsSearching }) {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        setIsSearching(true);
        setLoading(true);

        fetchSearchBar(search).then((data) => {
            setResults(data);
            setLoading(false);
        });
    };

    const inputHandler = (event) => {
        const value = event.target.value;

        setSearch(value);

        if (value.trim() === "") {
            setIsSearching(false);
            setResults(null);
        }
    };

    return (
        <div className='mb-5'>
            <form
                onSubmit={submitHandler}
                className='input-group mx-auto'
                style={{ maxWidth: '500px' }}
            >
                <input
                    type='text'
                    className='form-control'
                    placeholder='Digita qui le patate che desideri'
                    value={search}
                    onChange={inputHandler}
                />

                <button className='btn btn-warning' type='submit'>
                    Patata!
                </button>
            </form>

            <div className='search-results-container mt-4'>
                <SearchBarResults
                    results={results}
                    loading={loading}
                />
            </div>
        </div>
    );
}

export default SearchBar;