import React from "react";

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()}

    }

    render() {
        return (
            <h1> Time: {this.state.date.toLocaleTimeString() } </h1>
        );
    }

    componentDidMount() {
        this.timerId = setInterval(()=> {
            this.setState({date: new Date()})
        },1000);
    }


    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}

export default Clock;
