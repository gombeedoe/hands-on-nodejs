'use strict'
module.exports = function fibonacci(n) {
  // nが１以下の場合はn、それ以外は直前の2つのフィボナッチ数の和を返す
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}