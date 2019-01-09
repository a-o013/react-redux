import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
    add: () => dispatch({ type: "ADD" }),
    remove: () => dispatch({ type: "REMOVE" }),
    addTen: () => dispatch({ type: "ADDTEN" }),
    removeTen: () => dispatch({ type: "REMOVETEN" }),
    reset: () => dispatch({ type: "RESET" })
  });
  

const CounterComponent = ({ counter, add, remove, addTen, removeTen, reset }) => 
    <div>
    <p>{counter}</p>
    <button onClick={add}>+ 1</button>
    <button onClick={remove}>- 1</button>
    <button onClick={addTen}>+ 10</button>
    <button onClick={removeTen}>- 10</button>
    <button onClick={reset}>Reset</button>
    </div>

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);