// export const hashtags = (text) => {
//   return text
// }

export const hashtags = (text) => {
  return text.match(/#[a-z]+/g)
}
