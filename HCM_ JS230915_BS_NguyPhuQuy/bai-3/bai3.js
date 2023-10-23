for(let i=1;i<=6;i++){
    document.write(`<br/>`)
    for(let j=1;j<=7;j++){
        if(i==1&&(j==2||j==3||j==5||j==6)){
            document.write("*")
        }else{
            document.write(`&nbsp`)
        }
        if(i==2&&(j==1||j==4||j==7)){
            document.write("*")
        }else{
            document.write(`&nbsp`)
        }
        if(i==3&&(j==1||j==7)){
            document.write("*")
        }else{
            document.write(`&nbsp`)
        }
        if(i==4&&(j==2||j==6)){
            document.write("*")
        }else{
            document.write(`&nbsp`)
        }
        if(i==5&&(j==3||j==5)){
            document.write("*")
        }else{
            document.write(`&nbsp`)
        }
        if(i==6&&(j==4)){
            document.write("*")
        }else{
            document.write(`&nbsp`)
        }

    }
}

