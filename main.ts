const fib_top_down = (num: number): number => {
  const map = new Map()

  const deep = (num: number) => {
    if (num <= 1) return num

    if (!map.has(num)) {
      map.set(num, deep(num - 1) + deep(num - 2))
    }

    return map.get(num)
  }

  return deep(num)
}

console.log(fib_top_down(4))

//! algorithmic complexity O(n)
