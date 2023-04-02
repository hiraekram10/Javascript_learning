// function submit(){
//     let userinput = document.querySelector('input').value;
//     console.log(userinput)
// }

function submit(){
    let inputOne = document.querySelector('#inputOne').value;
    let inputTwo = document.querySelector('#inputTwo').value;
    let result = Number(inputOne) + Number(inputTwo)
    console.log(result)
    // console.log(inputOne,inputTwo)
    //output
    let resultEle = document.querySelector('#resultElement')
    resultEle.innerText = result;
}