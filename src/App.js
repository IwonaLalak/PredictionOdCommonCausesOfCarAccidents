import React, {Component} from 'react';
import {Button} from 'reactstrap'
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import MainpartComponent from "./components/MainpartComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <MainpartComponent/>
            </div>
        );
    }
}

export default App;
