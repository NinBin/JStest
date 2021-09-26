
export function spacify (str) {
  return str.split('').join(' ')
}

export function learnJs (type) {
  switch (type) {
    case 'arrayTraverse':
      console.log('数组遍历')
      var numbers = [43, 23, 4, 2, 1]
      // 为每个数组元素调用一次函数
      numbers.forEach(myFunction)
      break
    case 1:
      break
    default:
      break
  }
}

function myFunction (value, index, array) {

}
