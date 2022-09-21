import React, { Component } from "react";
import "./Hangman.css";
import { randomWord } from "./words";

import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxGuesses: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), isLose: false, isWin: false };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.WinCheck = this.WinCheck.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      isLose: ((st.nWrong + (st.answer.includes(ltr) ? 0 : 1)) === this.props.maxGuesses) ? true : false,
      isWin: this.guessedWord().join("") === this.state.answer ? true : false
    })));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }
  handleReset() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord(), isLose: false, isWin: false });
  }
  WinCheck() {
    this.setState({});
  }

  /** render: render game */
  render() {

    return (

      <div className='Hangman'>
        <h2>Hangman</h2>

        {/* WIN PRINT */}
        {this.state.isWin && <h2>You Won! </h2>}

        {/* LOSE PRINT  */}
        {this.state.isLose &&
          <h2>YOU LOSE AND THE CORRECT WORD IS {this.state.answer}</h2>}

        {/* GAME PRINT  */}
        {!(this.state.isLose || this.state.isWin) &&
          (<section >
            <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong}/${this.props.maxGuesses}`} />

            <h3>Wrong Guesses {this.state.nWrong}</h3>

            <p className='Hangman-word'>{this.guessedWord()}</p>
            <p className='Hangman-btns'>{this.generateButtons()}</p>
          </section>)}
        <button id="reset" onClick={this.handleReset}> RESTART !</button>

      </div>


    );
  }
}

export default Hangman;
