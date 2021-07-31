import React, { Component } from "react";

class Counter extends Component {

    render() {
        const { onIncrement, onDecrement, onDelete, counter } = this.props;
        return (
            <div>
                <span>Item #{ counter.id }</span>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ () => onIncrement(counter) } className={"btn btn-secondary btn-sm"}>+</button>
                <button onClick={ () => onDecrement(counter) } className={"btn btn-secondary btn-sm m-1"}>-</button>
                <button onClick={ () => onDelete(counter.id) } className={"btn btn-danger btn-sm m-2"}>Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        const { counter } = this.props;
        let classes = "badge m-2 badge-";
        classes += (counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 0 : value;
    }
}

export default Counter;