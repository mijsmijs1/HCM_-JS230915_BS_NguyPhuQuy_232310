let count=parseInt(prompt("Nhập số lượng số muốn nhập vào(ít nhất 1 số): "))
let myInput=[]
for(let i=0;i<count;i++){
    let currentInput=parseInt(prompt(`Vui lòng nhập số nguyên dương ${i}:`))
    myInput[i]=currentInput
}
console.log(myInput)
let result=0
for(let j=0;j<myInput.length;j++){
    if(myInput[j]==2||myInput[j]==3){
        result+= myInput[j];
    } else{
    for(let i=2; i<=Math.sqrt(myInput[j]);i++){
        if(myInput[j]%i!==0){
            result+= myInput[j];
            break;
    }}

}
}
document.write("n số nguyên: ",myInput.join(" "))
document.write(`<br/>`)
document.write("Số nguyên duy nhất là tổng các số nguyên tố đã cho: ",result)


