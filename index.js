// const eml = require('./event-emitter/memory-leak')
const emitter = require('./event-emitter/gc')
emitter.gc()
