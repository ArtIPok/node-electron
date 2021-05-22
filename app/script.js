import React from 'react';
import { render } from 'react-dom';

import { formatTime } from '../formatTime';

const AppDescription = () => {
  return (
    <div>
      <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
      <p>This app will help you track your time and inform you when it's time to rest.</p>
    </div>
  )
}


class App extends React.Component {
  constructor() {
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  state = {
    status: 'off',
    time: 0,
    timer: null,
  }

  step = () => {

  };
    
  startTimer = () => {
  
    this.setState({
      status: 'work',
      time: 1200,
      timer: setInterval(this.step, 1000),
    });
  };

  render() {
    const { status, time, timer } = this.state;

    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <AppDescription />}
        {(status === 'off') && <button onClick={this.startTimer} className="btn">Start</button>}
        {(status !== 'off') && <div className="timer">{formatTime(time)}</div>}
        {(status !== 'off') && <button className="btn">Stop</button>}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />} 
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
