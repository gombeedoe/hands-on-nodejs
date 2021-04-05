const events = require('events')

module.exports = function() {
  // const barEventEmitter = new events.EventEmitter()
  // for (let i = 0; i < 11; i++) {
  //   barEventEmitter.on('bar', () => console.log('bar'))
  // }

  const messageEventEmitter = new events.EventEmitter()

  {
    const listener = () => console.log('Hello')
    messageEventEmitter.on('message', listener)
  }

  messageEventEmitter.listeners('message')
}