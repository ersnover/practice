
function strangeAdd(a,b) {
    sum = a + b
    
    if (sum >= 50 && sum <= 85) {
        return 65
    } else {
        return 80
    }
}

let int1 = 5
let int2 = 73

sum = strangeAdd(int1,int2)

console.log(`${int1} + ${int2} = ${sum}`)