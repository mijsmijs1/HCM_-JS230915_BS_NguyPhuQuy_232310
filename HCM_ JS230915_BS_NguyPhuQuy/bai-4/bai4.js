let myInput=prompt("Vui lòng nhập chuỗi kí tự bao gồm chữ và số:")
let myArr=myInput.split('')


console.log(myArr)
let result=[]
for (let i=0;i<myArr.length;i++){
    if(myArr[i]!=="0"&&myArr[i]!=="1"&&myArr[i]!=="2"&&myArr[i]!=="3"&&myArr[i]!=="4"&&myArr[i]!=="5"&&myArr[i]!=="6"&&myArr[i]!=="7"&&myArr[i]!=="8"&&myArr[i]!=="9"){
        result.push(myArr[i])
    }
}
document.write(" Chuỗi kí tự bao gồm chữ và số : ",myInput)
document.write(`<br/>`)
let result1=result.join('')
document.write(" Chuỗi kí tự đã xóa số: ",result1)
