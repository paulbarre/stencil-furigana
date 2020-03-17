import React from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.state = {
      foo: 'bar',
      text: '秋[あき]の 田[た]の　　かりほの 庵[いほ]の　　苫[とま]をあらみ',
      alt: 'わが 衣手[ころもで]は　　露[つゆ]にぬれつつ'
    };
  }

  changeText() {
    this.setState({
      text: this.state.alt,
      alt: this.state.text
    });
  }

  render () {
    return (
      <div>
        <h1>
          <wc-furigana value={ this.state.text }></wc-furigana>
        </h1>
        <p>
          <button onClick={ this.changeText }>Change text</button>
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text />
      </header>
    </div>
  );
}

export default App;
