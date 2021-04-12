// 各分をShellで実行

function copyFileWithStream(src, dest, cd) {
  fs.createReadStream(src)
    .pipe(fs.createWriteStream(dest))
    .on('finish', cd)
}

copyFileWithStream('./stream/src.txt', './stream/dest.txt', () => console.log('コピー完了'))

fs.createReadStream('./stream/src.txt')
  .pipe(crypto.createHash('sha256'))
  .pipe(fs.createWriteStream('./stream/dest.txt'))
  .on('finish', () => console.log('コピー完了'))