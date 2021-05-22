exports.formatTime = (seconds) => {
  const minute = Math.floor((seconds / 60) % 60);
  const second = Math.floor(seconds % 60);

  const time = minute.toString().padStart(2, '0') + ':' + second.toString().padStart(2, '0');

  return isNaN(seconds) || seconds < 0
    ?
    null
    : time;
};

