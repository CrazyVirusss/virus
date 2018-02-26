import random from './random'

export default (length = 28) =>
  Array.from({length})
    .map(v => String.fromCharCode(random(65, 90)))
    .join('')
