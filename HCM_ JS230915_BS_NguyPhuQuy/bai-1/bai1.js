let myInput=[]
for(let i=0;i<5;i++){
    let currentInput=parseInt(prompt(`Vui lòng nhập số nguyên số ${i+1}:`))
    myInput[i]=currentInput
}
let result=[]
let uniqueNumber = myInput.filter((item) => myInput.indexOf(item) == myInput.lastIndexOf(item));
result=Math.max(...uniqueNumber)
document.write("Một chuỗi số nguyên có 5 chữ số : ",myInput.join(" "))
document.write(`<br/>`)
document.write("Số lớn nhất và cũng là số duy nhất : ",result)

