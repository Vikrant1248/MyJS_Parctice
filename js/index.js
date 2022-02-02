//object

const person ={
    name: 'Vikrant',
    address: 'shirasgaon',
    email: 'vicky@sdd.gmail',
    mobile: '8600124554'
}
console.log(person)

// Constructor
 
class Student{
    constructor(name,school,standard){
        this.name =name
        this.school=school
        this.standerd=standard
    }

    printInfo() {
        console.log (`name=${this.name}`)
        console.log(`school=${this.school}`)
        console.log(`standard=${this.standard}`)
    }

}
    const s1= new Student('Vikrant','RIT','12')
    console.log(s1)