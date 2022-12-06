function checkprime(num){
    let factor=0;
    for(let x=1; x<=num; x++){
        if(num%x===0){
            factor++;
        }
    }
    if(factor==2){
        return true;
    }else{
        return false;
    }
}
for(let i=1; i<=50; i++){
    let ans = checkprime(i);
    if(ans==true){
        console.log(i,"It is prime");
    }else{
        console.log(i,"It is not prime")
    }
}