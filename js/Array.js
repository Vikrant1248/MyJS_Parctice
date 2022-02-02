//Array

function fun1() {
    //simple array
    const numbers=[10,20,30,40,50]
    console.log(numbers)
}

fun1()

function fun2() {
    const numbers=[10,20,30,40,50]
    console.log(numbers)

    //adding numbers

    numbers.push(60)
    console.log(numbers)

    //remove element

    numbers.pop()
    console.log(numbers)
}

fun2()

function fun3(){
    const numbers=[10,20,30,40,50]
    console.log(numbers)

    //splice  delete element
    numbers.splice(3,4)
    console.log(numbers)

     //splice  add element
     numbers.splice(2,0,90)
    console.log(numbers)

    console.log(numbers.join('-*-'))

}

fun3()

function fun4() {
    const numbers=[10,20,30,40,50]
    console.log(numbers)

    //Position
    console.log('30 exist ?= ${numbers.indexOf(20)}')

}

fun4()
