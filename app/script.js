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
    state = {
    status: 'off',
    time: 0,
    timer: null,
  }

  playBell = () => {
    const bell = new Audio('./sounds/bell.wav');
    bell.play();
  };

  step = () => {
    const { time, status } = this.state;
    let counter = time - 1;

    if(counter > 0) {
      this.setState({
        time: counter,
      })  
    }
     
    if(counter === 0 && status == 'work') {
      this.playBell();
      this.setState({
        status: 'rest',
        time: 20,
      })
    } else if(counter === 0 && status == 'rest') {
      this.playBell();
      this.setState({
        status: 'work',
        time: 10,
      })
    }
  }

  startTimer = () => {
  
    this.setState({
      status: 'work',
      time: 10,
      timer: setInterval(this.step, 1000),
    });
  };

  stopTimer = () => {
    const { timer } = this.state;

    clearInterval(timer);
    this.setState({
      time: 0,
      status: 'off',
    })
  }

closeApp = () => {
  window.close();
}

  render() {
    const { status, time } = this.state;

    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <AppDescription />}
        {(status === 'off') && <button onClick={this.startTimer} className="btn">Start</button>}
        {(status !== 'off') && <div className="timer">{formatTime(time)}</div>}
        {(status !== 'off') && <button onClick={this.stopTimer} className="btn">Stop</button>}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />} 
        <button onClick={this.closeApp} className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
