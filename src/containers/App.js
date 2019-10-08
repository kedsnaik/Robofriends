import React, {Component} from 'react';
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import "./App.css";

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }
    render(){ // render() is a lifecycle method which is invoked whenever the component needs to update.
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
            <h1>Loading</h1>
        :
        // This is actually the output. This is what actually rendered.
        <div className = 'tc'>  
            <h1 className = "f1 styling">RoboFriends</h1>
            <SearchBox searchchange = {this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    };
}

export default App;