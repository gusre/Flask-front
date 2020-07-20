import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Alert from './AlertComponent';
import Note from './NotificationComponent';
import Dash from './DashComponent';
import ShowUser from './DisplayUserComponent';
import Dash2 from './DasComponent2';
function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/home' component={Home} />
                <Route exact path='/alert' component={Alert} />
                <Route exact path='/note' component={Dash2} />
                <Route exact path='/dash' component={Dash} />
                <Redirect path='/home' />
            </Switch>
        </>
    );
}
export default Main;