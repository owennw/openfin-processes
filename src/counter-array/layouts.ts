const createLayouts = numberOfCounters => {
  const array = Array.apply(null, { length: numberOfCounters }).map(Number.call, Number)
  return array.map(n => ({ i: n.toString(), x: (2 * n) % 12, y: Math.floor(n / 6), h: 1, w: 2 }))
}

export { createLayouts }