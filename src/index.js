import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

import ADD from './components/increment';
import SUB from './components/decrement';
import Disp1 from './components/number';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentvalue: 0,
            intervalID:0
        }
        this.timerp=this.timerp.bind(this);
        this.timerm=this.timerm.bind(this);
    };

    onclick(term) {
        this.setState({currentvalue: term});
    }
timerp()
{
    this.setState({currentvalue:this.state.currentvalue+1})
}
timerm()
{
        this.setState({currentvalue:this.state.currentvalue-1})
}
inc()
{
    if(this.state.intervalID!==0){
        clearInterval(this.state.intervalID);
        this.state.intervalID = 0;

    }
    else {
        this.state.intervalID = setInterval(()=>this.timerp(), 1000);
    }

    if(this.state.currentvalue===100) {
        clearInterval(this.state.intervalID);
        this.state.intervalID = 0;
    }
}
    dec()
    {
        if(this.state.intervalID!==0){
            clearInterval(this.state.intervalID);
            this.state.intervalID=0;
        }
        else
            this.state.intervalID=setInterval(()=>this.timerm(), 1000);
        if(this.state.currentvalue===0) {
            clearInterval(this.state.intervalID);
            this.state.intervalID = 0;
        }
    }


    render() {
        return (
            <div className="container">
                <h1>
                <Disp1 val={this.state.currentvalue}/>
                </h1>
                <h1>
                <SUB val1={this.state.currentvalue}
                     val={(term) => this.onclick(term)}/>
                <ADD val={(term) => this.onclick(term)}
                     val1={this.state.currentvalue}/>
                    <button onClick={()=>this.inc()}>++</button>
                    <button onClick={()=>this.dec()}>--</button>
                </h1>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));