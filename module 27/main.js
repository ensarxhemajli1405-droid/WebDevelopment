function showMessage() {
    alert("hello")
}
showMessage()

function sum (number1,number2){
    return number1 + number2

}
console.log(sum(5,10))

var arrowFunction = () => alert("hello")

arrowFunction();

var arrowFunction = name => alert('hello $ {name}')
arrowFunction("enes");

function dsFunction(){
    var localVar = "digital school"
    alert(localVar)
}
dsFunction();