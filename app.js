//variables
var userInput = document.getElementById('userText')
var submitButton = document.getElementById('submitButton')

//functions
function main(){
    submitButton.addEventListener('click', check)
}

function check(){
    var temp = userInput.value;
    const vowels = /[a,e,i,o,u,A,E,I,O,U]/g;
    var count = temp.match(vowels).length;
    if (count === 1){
        alert(`There is ${count} vowel.`)
    }
    else{
        alert(`There are ${count} vowels!`);
    }
}
//main
main()
