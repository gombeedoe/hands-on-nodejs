module.exports.gc = () => {
  const events = require('events')

  const messageEventEmitter = new events.EventEmitter()

  {
    const listener = () => console.log('Hello')
    messageEventEmitter.on('message', listener)
  }

  messageEventEmitter.listeners('message')
}
