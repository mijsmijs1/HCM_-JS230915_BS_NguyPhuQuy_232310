let myInput = prompt("Vui lòng nhập chuỗi kí tự muốn đảo ngược:")
let myArr = myInput.split(' ')

console.log(myArr)
let result = []
for (let j = 0; j < myArr.length; j++) {
    let newString = myArr[j].split('')
    let currentResult = newString.reverse()
    for (let i = 0; i < currentResult.length; i++) {
        result.push(currentResult[i])
    }
    result.push(" ")
}
document.write(" Chuỗi ký tự: ",myInput)
document.write(`<br/>`)
let finalResult = result.join('')
document.write("Chuỗi đã được đảo ngược các thành phần: ", finalResult)
