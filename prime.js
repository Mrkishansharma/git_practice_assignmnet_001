
let num = 50

function printPrimes(num){
    for(let i=1; i<=num; i++){
        let factor=0;
        for(let x=1; x<=i; x++){
            if(i%x===0){
                factor++;
            }
        }
        if(factor==2){
            console.log(i, "is prime");
        }
    }
}


printPrimes(num)