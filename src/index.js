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
        this.state= {seconds:1200};

    }
    componentDidMount(){
        this.timerID = setInterval( ()=>this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({seconds: this.state.seconds-1});
    }
    render(){
    return <h1>{Math.floor(this.state.seconds/60)}:{this.state.seconds%60}</h1>;
 
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
