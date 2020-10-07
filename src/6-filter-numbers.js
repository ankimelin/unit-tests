// export const filterNumbers = (array, largerThan) => {
//   return array
// }

export const filterNumbers = (array, largerThan) => {
  return array.filter(item => {
    return item <= largerThan
  })
}
