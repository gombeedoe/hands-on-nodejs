// このファイルを実行してもエラーになるので、Shellで入力

const events = require('events')

const eventAEmitter = new events.EventEmitter()

const eventAIterable = events.on(eventAEmitter, 'eventA')

eventAEmitter.listeners('eventA')

// enter -> .editor
(async () => {
  for await (const a of eventAIterable) {
    if (a[0] === 'end') {
      break
    }
    console.log('eventA', a)
  }
})()
// enter ctrl + D

eventAEmitter.emit('eventA', 'Hello')

eventAEmitter.emit('eventA', 'Hello', 'World')

eventAEmitter.emit('eventA', 'end')

eventAEmitter.listeners