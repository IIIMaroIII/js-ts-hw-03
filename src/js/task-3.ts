export default function filterArray(numbers: number[], value: number): number[] {
  return numbers.filter((num) => num > value)
}
