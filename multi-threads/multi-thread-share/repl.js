const sharedArrayBuffer = new SharedArrayBuffer(1024)

const unit8Array = new Uint8Array(sharedArrayBuffer)

const int32Array = new Int32Array(sharedArrayBuffer)

unit8Array.length

int32Array.length

int32Array[0] = 1000

unit8Array.slice(0, 4)