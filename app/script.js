import React from 'react';
import { render } from 'react-dom';

const AppDescription = require('../component/AppDescription');



class App extends React.Component {
  constructor() {
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }
  state = {
    status: 'off',
  }

  render() {
    const { status } = this.state;

    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <AppDescription />}
        {(status === 'off') && <button className="btn">Start</button>}
        {/* <AppDescription />} */}
        {(status !== 'off') && <div className="timer">18:23</div>}
        {(status !== 'off') && <button className="btn">Stop</button>}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />} 
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
