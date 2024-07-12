const rolledDices = document.getElementById("rolledDices");
let rolled = 0, rolledAvg = 0, rolledMin = 0, rolledMax = 0, avgValue = 0, rolling, minValue, maxValue;
const getMaxValue = document.getElementById("getMaxValue");
const getMinValue = document.getElementById("getMinValue");
const getAverage = document.getElementById("getAverage");
const roundMin = document.getElementById("roundMin");
const roundMax = document.getElementById("roundMax");

document.getElementById("roll").onclick = function(){
    rolledDices.textContent = ""
    let diceNumber = Number(document.getElementById("diceNumber").value);
    let diceSides = Number(document.getElementById("diceSides").value);

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

        document.getElementById("rolledMax").textContent = rolledMax!==0?rolledMax:'';
        document.getElementById("rolledAvg").textContent = rolledAvg!==0?rolledAvg:'';    
        document.getElementById("rolledMin").textContent = rolledMin!==0?rolledMin:'';
        rolled = 0;
    }
}