import React, {Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import "./App.css";

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    }
    render(){ // render() is a lifecycle method which is invoked whenever the component needs to update.
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return( // This is actually the output. This is what actually rendered.
            <div className = 'tc'>  
                <h1 className = "f1 styling">RoboFriends</h1>
                <SearchBox searchchange = {this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )
    };
}

export default App;