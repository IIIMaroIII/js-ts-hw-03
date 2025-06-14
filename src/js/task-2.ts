export default function makeArray(firstArr: Array<string>, secondArr: Array<string>, maxLength: number): Array<string> {
  const newArr: Array<string> = firstArr.concat(secondArr)

  if (newArr.length > maxLength) {
    return newArr.slice(0, maxLength)
  }
  return newArr
}
