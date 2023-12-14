export const palindrome = s => {
  var len = s.length
  console.log(len / 2)
  for (let i = 0; i < len / 2; i++) {
    console.log(s[i] + ' - ' + s[len - i - 1])
    if (s[i] !== s[len - i - 1]) {
      return false
    }
  }
  return true
}
