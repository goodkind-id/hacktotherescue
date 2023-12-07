let maxMemoryUsage = 0

function printMemoryUsage () {
  if (process.memoryUsage().heapTotal / 1024 / 1024 > maxMemoryUsage) maxMemoryUsage = Math.ceil(process.memoryUsage().heapTotal / 1024 / 1024)
  console.log('Memory usage Total:', Math.ceil(process.memoryUsage().heapTotal / 1024 / 1024), 'MB Max:', maxMemoryUsage , 'MB')
}

module.exports = {
  printMemoryUsage
}
