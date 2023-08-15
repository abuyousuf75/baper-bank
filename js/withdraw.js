document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmound = parseFloat(newWithdrawString);
   

    const withdrawElement = document.getElementById('withdrawBlance');
    const previousWithdrawString = withdrawElement.innerText;
    const previousWithraw = parseFloat(previousWithdrawString);
    const currentBlance = previousWithraw+newWithdrawAmound;
    withdrawElement.innerText =  currentBlance;

    // minus value for withraw from total
   
    const totalBlance = document.getElementById('balance-total');
    const previousStringTotalBlance = totalBlance.innerText;
    const previouBlance = parseFloat(previousStringTotalBlance);
    const currentBlanceNew  = previouBlance - currentBlance ;
    totalBlance.innerText = currentBlanceNew;
  

    // clear value 
    withdrawField.value = '';
})