import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      words: ["potato", "apple", "banana", "cherry", "cranberry", "watermellon", "strawberry"],
      answerWord: [], //potato
      wordInPlay: [], //emptyArr
      // letter: '',
      myGuesses: [],  
      // wrongGuesses: 0
    };
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
    this.onGuessBtnClick = this.onGuessBtnClick.bind(this);
  }

  onGuessBtnClick(e) {
    e.preventDefault();
    let randomIdx = Math.floor(Math.random() * this.state.words.length);
    this.setState({
      myGuesses: this.state.myGuesses.concat(this.refs.guess.value)
    }, () => { 
      // myGuesses = ['o', 'a']
      // 'potato'
      // ['', 'o', '', '', '', 'o', '', '', '', 'a', '', '']
      let newArray = this.state.answerWord.map(eachLetter => {
        if (this.state.myGuesses.includes(eachLetter)) {
          return eachLetter;
        } else {
          return '';
        }
      });
      this.setState({
        wordInPlay: newArray
      })
    //   this.state.answerWord.map( (letter) => {
    //   if ((this.state.myGuesses.includes(letter)) === true) {
    //     this.setState({ wordInPlay: this.state.myGuesses})
    //   }
     })
    
      // get my secret word answerWord ['p', 'o', 't', 'a', 't', 'o']
      // map through each letter
      // return the letters that are inside this.state.myGuesses = ['o', 'a'] (use ".includes")
      // => ['', 'o', '', 'a', '', 'o']
      // this.setState({ wordInPlay: theAnswerIJustGot })
    }
    // var result = 0;
    // this.state.answerWord.forEach((letter) => {
    //   if (letter === this.state.letter) {
    //     result += 1 ;
    //   } 
    // })
    // return result;

  onButtonSubmit(e) {
    e.preventDefault();
    let randomIdx = Math.floor(Math.random() * this.state.words.length);

    let lengthOfArr = this.state.words[randomIdx].split('').length;
    let emptyArr = [];
    for (let i=0; i<lengthOfArr; i++) {
      emptyArr.push('');
    }
    console.log(emptyArr);
    // ['', '', '', '', '', '']
    //console.log (emptyArr);
    this.setState({
      answerWord: this.state.words[randomIdx].split(''),
      wordInPlay: emptyArr // ['', '', '', '', '', '']
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Hangman Game</h2>
        <h3>Instructions: fill out the missing letters to complete the word</h3>
        <div>
          <button className="btn btn-primary" onClick={ this.onButtonSubmit } type="submit">Start game</button>
        </div>
        <div>{ this.state.wordInPlay.map((letter) => {
                return  <span> 
                          <p>{letter === '' ? '_' : letter}</p> 
                        </span>
              }) }
        </div>
        <div>
        <form type="submit" onSubmit={ this.onGuessBtnClick }>
          <input maxlength="1" ref="guess" type="text" placeholder="guess a letter"></input>
          <button type="submit" >Submit</button>
          <div>{ this.state.myGuesses }</div>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
