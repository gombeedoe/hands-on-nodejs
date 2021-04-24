'use strict'

const fibonacci = require('../fibonacci')

const { workerData: int32Array, parentPort } = require('worker_threads')

parentPort.on('message', n => {
  parentPort.postMessage(fibonacci(n))
  // int32Array[0] += 1
  // スレッドセーフを考慮して下記に修正が必要
  Atomics.add(int32Array, 0, 1)
})