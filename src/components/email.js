import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {Switch, Redirect, Route} from 'react-router-dom';

export default function Email() {
    return (
        
        <div className="email">
                <Route path='/' component={Sidebar} />
                <main>
                <Switch>
                    <Redirect from='/' exact to='/inbox' /> 
                    <Route path='/:folderId' exact component={EmailList} />
                    <Route path='/:folderId/:emailId' exact component={SingleEmail} />
                </Switch>

                </main>
        </div>
        
    );
}
