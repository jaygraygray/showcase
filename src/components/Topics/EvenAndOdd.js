import React, { Component } from 'react';

class EvenAndOdd extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    }
  }

  handleChange(val) {
    this.setState({
      userInput: val
    })

  }

  assignNumbers(userInput) {
    var input = userInput.split(',');
    var evens = [];
    var odds = [];

    for (var i = 0; i < input.length; i++) {
      if (input[i] % 2 === 0) {
        evens.push( parseInt(input[i]))
      } else {
        odds.push( parseInt(input[i]))
      }
    }

    this.setState({
      evenArray: evens,
      oddArray: odds
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4></h4>
        <input className="inputLine" 
               onChange={ (e) => { this.handleChange(e.target.value) }}/>
        <button className="resultsBox" 
                onClick={ () => {this.assignNumbers(this.state.userInput) }}> Submit</button>
        <span className="resultsBox">Evens: {this.state.evenArray} </span>
        <span className="resultsBox">Odds: {this.state.oddArray} </span>
      </div>
    );
  }
}

export default EvenAndOdd;