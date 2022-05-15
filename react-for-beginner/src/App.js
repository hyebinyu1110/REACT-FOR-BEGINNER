// 수업을 시작하기 위해선 nodejs, npm, npx, git 이 설치 되어 있어야 함

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "./styles.css";
import Details from "./components/Details";
import Home from "./routes/Home";



function App() {

    return (

        <Router>
            <Switch>
                <Route path="/movie/:id">
                    <Details />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;