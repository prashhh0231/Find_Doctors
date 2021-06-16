import React from 'react'
import Header from './Components/Header';
import Login from './Components/Login';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Info from './Components/Info';
const App = () => {
    // document.title="Find Your Doctor"
//    console.log(process.env.REACT_APP_CLIENT_KEY)
    return <>
        <Header/>
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/info" component={Info}/>
            </Switch>

        </Router>

        
       
    </>
}


export default App;
