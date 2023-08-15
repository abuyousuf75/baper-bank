document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmound = parseFloat(newWithdrawString);
   
    // clear value 
    withdrawField.value = '';

    const withdrawElement = document.getElementById('withdrawBlance');
    const previousWithdrawString = withdrawElement.innerText;
    const previousWithraw = parseFloat(previousWithdrawString);
  
    // minus value for withraw from total
   
    const totalBlance = document.getElementById('balance-total');
    //console.log(totalBlance)
    const previousStringTotalBlance = totalBlance.innerText;
    const previouBlance = parseFloat(previousStringTotalBlance);
   
    if(newWithdrawAmound > previouBlance){
        alert ('You dont have enough money for withdraw');
        return 
    }
    const currentBlance = previousWithraw+newWithdrawAmound;
    withdrawElement.innerText =  currentBlance;

    const currentBlanceNew  = previouBlance - currentBlance ;
    totalBlance.innerText = currentBlanceNew;


})