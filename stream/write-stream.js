const fileWriteStream = fs.createWriteStream('./stream/dest.txt')

fileWriteStream.write('Hello\n')

fileWriteStream.write('World\n')

fileWriteStream.end()

fs.readFileSync('./stream/dest.txt', 'utf8')



class DelayLogStream extends stream.Writable {
  constructor(options) {
    super({ objectMode: true, ...options })
  }

  _write(chunk, encoding, callback) {
    console.log('_write()')

    const { message, delay } = chunk

    setTimeout(() => {
      console.log(message)
      callback()
    }, delay)
  }
}



const delayLogStream = new DelayLogStream()

delayLogStream.write({ message: 'Hi', delay: 0 })

delayLogStream.write({ message: 'Thank you', delay: 1000 })

delayLogStream.end({ message: 'Bye', delay: 3000 }) 