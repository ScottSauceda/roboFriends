import React, { Component } from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
       this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        // const { robots } = this.state;
            const { onSearchChange, robots, isPending } = this.props;
        // if(robots.length === 0){
            // can also make this ternary, see build react app 6 for code
        if(isPending){
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default MainPage;