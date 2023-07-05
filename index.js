const times = [
  {
    hours: 12,
    minutes: 34,
  },

  {
    hours: 5,
    minutes: 8,
  },

  {
    hours: 7,
    minutes: 8,
  }

]
const Clock = (props) => {
  const {hours, minutes} = props
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0')
  return `
  <div class="clock">
    <span class="clock__hours">${paddedHours}</span>:<span class="clock__minutes">${paddedMinutes}</span>
  </div>
  `
}

const renderClock = () => {
  document.querySelector('#app').innerHTML = times.map(time => Clock(time)).join('')
}

renderClock()