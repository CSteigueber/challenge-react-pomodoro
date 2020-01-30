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

class Clock extends React.Component{
    constructor (props) {
        super(props);
        this.initial= 1200;
        this.state= {seconds:this.initial,
                     running: false,
        };

        this.handleStartResetClick = this.handleStartResetClick.bind(this);
        this.handlesPlusClick = this.handlesPlusClick.bind(this);
        this.handlesMinusClick = this.handlesMinusClick.bind(this);
        this.handleResetClick= this.handleResetClick.bind(this);
        this.handleCloseClick= this.handleCloseClick.bind(this);
    }
    handleResetClick(){
        this.setState({ seconds: this.initial});
    }    
    handleCloseClick(){
        this.setState({
            seconds: this.initial,
            running: false,
        });
    }
    handleStartResetClick(){
        if (this.state.running){
            this.setState({
                seconds: this.initial
            })
        }
        this.setState({
            running: !this.state.running
        });
    }
    handlesPlusClick(){
        if (this.state.running){
            return;
        }
        this.setState({seconds: this.state.seconds +60});
    }
    handlesMinusClick(){
        if (this.state.running || this.state.seconds==0){
            return;
        }
        this.setState({seconds: this.state.seconds -60});
    }
    componentDidMount(){
        this.timerID = setInterval( ()=>this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        if (this.state.running && this.state.seconds>0){
            this.setState({seconds: this.state.seconds-1});
        }
    }
    render(){
    return (<div>
                <h1>
                    {Math.floor(this.state.seconds/60 < 10 ? '0'+this.state.seconds/60 : this.state.seconds/60)}
                    :{this.state.seconds%60 < 10 ? '0'+this.state.seconds%60 : this.state.seconds%60}
                </h1>
                <button onClick={this.handleStartResetClick}>{this.state.running ? 'Reset' : 'Start'}</button>
                <button onClick={this.handlesPlusClick}>+</button>                
                <button onClick={this.handlesMinusClick}>-</button>
                {this.state.seconds==0? 
                    <div>
                        <h2>You should take a break, bro!</h2>
                        <button onClick={this.handleResetClick} >Restart timer</button>
                        <button onClick={this.handleCloseClick} >Close</button>
                    </div>
                    :null}
            </div>
    );
 
    }
}

class App extends React.Component {

    render(){
        return <Clock />;
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
