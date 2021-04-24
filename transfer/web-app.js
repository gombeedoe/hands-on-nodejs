function useMaybeTransfer(transfer) {
  const buffer = new ArrayBuffer(1024 * 1024 * 1024)

  const start = perf_hooks.performance.now()
  new worker_threads.Worker(
    './maybe-transfer.js',
    {
      workerData: { buffer, transfer },
      transferList: transfer ? [buffer] : []
    }
  ).on('message', () => 
    console.log(perf_hooks.performance.now() - start)
  )

  console.log(buffer)
}