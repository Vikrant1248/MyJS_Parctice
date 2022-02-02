//function Alias

function fun1(){

    const outerVar="this is outer value"

    function innerfun1(){   
        console.log('Inside inner function')
    }
    //inner function access to all member of outer function
    console.log(`outerVar=${outerVar}`)

    //inner function
    innerfun1()
}
fun1()

function fun2() {
    const outerVar="this is outer value"
    function innerfun2(param){
        console.log("inside inner function")
        param()
          console.log(`${outerVar}`)
      }
      
  
     
      function innerfun3(){
          console.log("inside innerfun2")
      }
      innerfun2(innerfun3)
    }

    fun2()

    function fun3() {
        function invokeFunction(func){
            console.log(`inside invoke function`)
            console.log(`func=${func}, type= ${typeof func}`)

            func(10,20)

        }

        function add(p1,p2){
            console.log(`inside add`)
            console.log(`p1+p2 =${p1+p2}`)
        }
        invokeFunction(add)
    }
fun3()