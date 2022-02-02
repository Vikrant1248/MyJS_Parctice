function fun1() {
    const numbers=[10,20,30,40,50]
    //for loop
    for(let index=0;index<numbers.length;index++){
        console.log(`value at ${index}=${numbers[index]}`)
    }

}
fun1()

function fun2() {
    const numbers=[10,20,30,40,50]
    //for-of loop
    for(const value of numbers){
        console.log(`value=${value}`)
    }
}
fun2()

function fun3() {
    const numbers=[10,20,30,40,50]
    //for-in loop
    for(const index in numbers){
        console.log(`index=${index},value=${numbers[index]}`)
    }
}
fun3()

