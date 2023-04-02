// function submit(){
//     let userinput = document.querySelector('input').value;
//     console.log(userinput)
// }

//submit function
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

//multiplying

 function calculate(){
    let multiOne = document.querySelector("#multiOne").value
    let multiTwo = document.querySelector("#multiTwo").value
    let result = Number(multiOne) * Number(multiTwo)
    console.log(multiOne, multiTwo)
    console.log(result);
    
    

}