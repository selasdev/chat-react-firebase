import React, { Component } from 'react';
import { render } from 'react-dom';

import ChatRoom from './components/ChatRoom'

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-primary">
                    <a className="navbar-brand text-white display-1">Chat React</a>
                </nav>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-8 offset-md-3">
                            <ChatRoom />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('app')
);