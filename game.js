let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
document.querySelector('#start-app').addEventListener('click',get_data)
function get_data() {
    let start = document.getElementById('firstInput').value;
    let end = document.getElementById('secondInput').value;
    let result = document.getElementById('result')
    let listOfNumbers = [];
    for (let i = start; i <= end; i++) {
        i = parseInt(i)
        listOfNumbers.push(i);
    }
    if(listOfNumbers.includes(randomNumber)){
        result.style.color = 'green'
        result.style.fontWeight = "bolder"
        result.innerHTML = 'Yes in this list'
    }else{
        result.style.color = 'red'
        result.style.fontWeight = "bolder"
        result.innerHTML = "No isn't in this list"
    }
    if (start === '' || end === ''){
        result.style.color = 'red'
        result.style.fontWeight = "bolder"
        result.innerHTML = 'Fill The Inputs'
    }
    if(start == end){
        if(start == randomNumber){
                result.style.color ='green'
                result.textContent = 'You Win'
        }else if(start != randomNumber){
            result.style.color = 'red'
            result.textContent = 'You Lose'
        }
    }
}
// function lastGuess(start){
//     if(start == randomNumber){
//         result.style.color = 'green'
//         result.innerHTML = 'You Win'
//     }else{
//         result.style.color = 'red'
//         result.innerHTML = 'You Lose'
//     }
// }
