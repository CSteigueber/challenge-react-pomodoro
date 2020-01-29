import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
// import App from './App';
// import { ReactComponent } from '*.svg';
class Time {
     min;
     sec;
}

function formatSeconds(seconds){
    let time = new Time;
    time.min=Math.floor(seconds/60);
    time.sec=seconds%60;
    return time;
}
class Clock extends React.Component{
    constructor (props) {
        super(props);
        this.state= {time:formatSeconds(1200)};

    }
    render(){
    return <h1>{this.state.time.min}:{this.state.time.sec}</h1>
 
    }
}

class App extends React.Component {
    render(){
        return <Clock/>;
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
