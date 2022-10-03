// step---1
var initialPrice=document.querySelector('#initialprice');
var quantity=document.querySelector('#quantity');
var currentPrice=document.querySelector('#currentprice');
var submitBtn=document.querySelector('#submit');
var outputBox=document.querySelector('#outbox');


submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var initial=initialPrice.value ;
    var qty=quantity.value;
    var current=currentPrice.value;
    if(initial==="" || qty===""|| current===""){
        alert("please give all the inputs");
    }
    else{

        calculateProfitAndLoss(initial,qty,current);
    }
}
    
//funtion to calculate profit and loss

function calculateProfitAndLoss(initial,quantity,current){
   
    if(Number(current)>Number(initial)){
        //profit
        var profit=(Number(current)-Number(initial))*Number(quantity);
        var profitPercentage=(Number(profit)/Number(initial))*100;
        profitPercentage= profitPercentage.toFixed(2);
        var outputMsg=`Hey the profit is ${profit} and profit percentage is ${profitPercentage}%  😃` ;

        outputBox.style.color="#fef08a";
      

        showOutput(outputMsg);
    }
    else if(Number(initial)>Number(current)){
        //loss-logic
        var loss=(Number(initial)-Number(current))*Number(quantity);
        var lossPercentage=(Number(loss)/Number(initial))*100;

        lossPercentage= lossPercentage.toFixed(2);

        var outputMsg =`Hey the Loss is ${loss} and loss percentage is ${lossPercentage}% 😢`;
        outputBox.style.color="#fca5a5";

        showOutput(outputMsg);
    }
    else{
        //rest of logic
        var outputMsg="No pain no gain  and no gain no pain  😒 ";
        outputBox.style.color="white";
        showOutput(outputMsg);

    }


}

function showOutput(message){
    outputBox.innerHTML=message;
}