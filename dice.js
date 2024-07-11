const rolledDices = document.getElementById("rolledDices");
let rolled = 0;
const textRollMax = document.getElementById("rolledMax");
const textRollAvg = document.getElementById("rolledAvg");
const textRollMin = document.getElementById("rolledMin");
let rolledAvg = 0;
let rolledMin = 0;
let rolledMax = 0;
let avgValue = 0;
let rolling;
const getMaxValue = document.getElementById("getMaxValue");
const getMinValue = document.getElementById("getMinValue");
const getAverage = document.getElementById("getAverage");
const roundMin = document.getElementById("roundMin");
const roundMax = document.getElementById("roundMax");
let minValue;
let maxValue;

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
        
        if((getMaxValue.checked)&&(getMinValue.checked)&&(getAverage.checked)){
            rolledMax = "max: "+maxValue;
            rolledAvg = "avg: "+avgValue;
            rolledMin = "min: "+minValue;
        } else if((getMaxValue.checked)&&(getMinValue.checked)){
            rolledMax = "max: "+maxValue;
            rolledAvg = '';
            rolledMin = "min: "+minValue;
        } else if((getMaxValue.checked)&&(getAverage.checked)){
            rolledMax = "max: "+maxValue;
            rolledAvg = "avg: "+avgValue;
            rolledMin = '';
        } else if((getMinValue.checked)&&(getAverage.checked)){
            rolledMax = '';
            rolledAvg = "avg: "+avgValue;
            rolledMin = "min: "+minValue;
        } else if(getMaxValue.checked){
            rolledMax = "max: "+maxValue;
            rolledAvg = '';
            rolledMin = '';
        } else if(getMinValue.checked){
            rolledMax = '';
            rolledAvg = '';
            rolledMin = "min: "+minValue;
        } else if(getAverage.checked){
            rolledMax = '';
            rolledAvg = "avg: "+avgValue;
            rolledMin = '';
        } else {
            rolledMax = '';
            rolledAvg = '0';
            rolledMin = '';
        }
        
        textRollMax.textContent = rolledMax!==0?rolledMax:'';
        textRollAvg.textContent = rolledAvg!==0?rolledAvg:'';    
        textRollMin.textContent = rolledMin!==0?rolledMin:'';
        rolled = 0;
    }
}