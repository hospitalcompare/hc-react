import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from './components/layout/Header';
import './App.css';
import AddTodo from "./components/todos/AddTodo";
import {v4 as uuidv4} from 'uuid';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        {/*<Route path="/users">*/}
                        {/*    <Users />*/}
                        {/*</Route>*/}
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
