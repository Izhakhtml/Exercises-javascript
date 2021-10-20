//! return the question exe 1

function checkNumber() {
let user  = Number(prompt ("enter number") ) 
let array = [] 
let counter = 0   

while (user > counter) {
  array.push(user)
  user = Number(prompt ("enter number"))  
  ///////////////////////////////////////// One way
  // array.sort((a,b)=>{ return a-b })
  // container.innerHTML = `max number:${array[array.length-1]}<br>min number:${array[0]}`
  }
  ///////////////////////////////////////// Two way
  // let max = array[0]
  // let min = array[0] 
  // for (let i = 0; i < array.length; i++) {
  // if (min > array[i] ) {
  //     min = array[i]
  //   } 
  // if (max < array[i]) {
  //     max = array[i]
  // }
  // }
  // container.innerHTML = `max number:${max}<br>min number:${min}`

}
checkNumber()

// //////////////////////////////////////// exe 2
function evenNumber() {
let numberArray = []
let counter = 0
while (counter<10) {
    let userInsetNumber = Number(prompt("enter number"))
    if(userInsetNumber%2==0){
    numberArray[counter] = userInsetNumber
    container.innerHTML += `${numberArray[counter]}<br>`
    }
    counter++
}    

}

/////////////////////////////////////// exe 3 
function randomNumbers() {
   let userInsetNumber = Number(prompt("Enter number"))
   let randomArray = []
   let counter = 0 
   
   while (counter<100) {
       
    randomArray[counter] = Math.floor(Math.random()*100)  
      if(userInsetNumber == randomArray[counter]){
        container.innerHTML = `<h1> Well done </h1>`
        console.log(`welll done ${counter}`);
        
        return
     
      }else{
        // console.log("lozer");  
        container.innerHTML = `<h1>Try again</h1>`
       
    }
       counter++
   }console.log(randomArray);
    
}

/////////////////////////////////////// exe 4 
let letterArray = ["A","Z"]
function checkLetters() {
let userInsetName = prompt("Enter name")
switch (userInsetName.substr(0,1)) {
    case "A":
          console.log("nice");
              return
                case "Z":
                console.log("good");
                return
                default:
                   console.log("ohhh");
                  return;
}    
}
// checkLetters() 
/////////////////////////////////////// exe 5
let firstString = "fizz"
let secondString = "buzz"
function repeteString(string,num) {
let counter = 0
let emptyString = ""
  while (counter<num) { 
    emptyString += string
    counter++
    return emptyString
  }
  
}
// let fizz = repeteString(firstString,3)
// let fizzBuzz = repeteString(secondString,5)
// let fizzBuzz3 = repeteString( firstString+secondString,3)
// let fizzBuzz5 = repeteString(firstString+secondString,5)

function ViewOnPage() {
  let counter = 0
  while (counter<100) {
  container.innerHTML+=
`<h1>${fizz} <br>
  ${fizzBuzz}<br>
  ${fizzBuzz3}<br>
  ${fizzBuzz5}<br>
  ${counter}</h1>`
  counter++
  }
} 
// ViewOnPage()
