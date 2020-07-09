import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

const state = {
    robots: robots,
    searchField: ''
}
const App = () => {
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    );
}

export default App;