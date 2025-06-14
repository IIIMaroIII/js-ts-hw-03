export default function filterArray(numbers: number[], value: number): number[] {
  const newArr: number[] = []

  for (const num of numbers) {
    if (num > value) {
      newArr.push(num)
    }
  }

  return newArr
}
