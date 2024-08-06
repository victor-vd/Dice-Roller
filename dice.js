const rolledDices = document.querySelector("#rolledDices");
let rolled = 0, rolledAvg = 0, rolledMin = 0, rolledMax = 0, avgValue = 0, rolling, minValue, maxValue;
const getMaxValue = document.querySelector("#getMaxValue");
const getMinValue = document.querySelector("#getMinValue");
const getAverage = document.querySelector("#getAverage");
const roundMin = document.querySelector("#roundMin");
const roundMax = document.querySelector("#roundMax");

document.querySelector("#roll").onclick = function(){
    rolledDices.textContent = ""
    let diceNumber = Number(document.querySelector("#diceNumber").value);
    let diceSides = Number(document.querySelector("#diceSides").value);

    if(!((diceNumber == 0)||(diceSides == 0))){
        for(let i=1; i<=diceNumber; i++){
            rolling = Math.ceil(Math.random() * diceSides-1)+1;
            rolled += rolling;
            
            if(i==1){
                maxValue = rolling;
                minValue = rolling;
            } else {
                if(maxValue < rolling){
                    maxValue = rolling;
                }
                if(minValue > rolling){
                    minValue = rolling;
                }
            }
            rolledDices.textContent += i==1? rolling: ", "+rolling;
        }

        rolled /= diceNumber;
        console.log(avgValue);
        avgValue = roundMin.checked? Math.floor(rolled): Math.ceil(rolled);

        rolledMax = '';
        rolledAvg = '';
        rolledMin = '';

        if(getMaxValue.checked){
            rolledMax = "max: "+maxValue;
        }
        if(getMinValue.checked){
            rolledMin = "min: "+minValue;
        }
        if(getAverage.checked){
            rolledAvg = "avg: "+avgValue;
        }

        document.querySelector("#rolledMax").textContent = rolledMax!==0?rolledMax:'';
        document.querySelector("#rolledAvg").textContent = rolledAvg!==0?rolledAvg:'';    
        document.querySelector("#rolledMin").textContent = rolledMin!==0?rolledMin:'';
        rolled = 0;
    }
}