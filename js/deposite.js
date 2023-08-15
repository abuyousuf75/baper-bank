// step 1 -> add event liser on deposite btn
document.getElementById('btn-deposite').addEventListener('click',function(){
   // step 2 -> get input value 
     const depoiteFiled =  document.getElementById('deposite-field');
     const newDepositeAmoundString = depoiteFiled.value;
     const newDepositeAmound = parseFloat(newDepositeAmoundString)
     depoiteFiled.value = '';
     if(isNaN(newDepositeAmound)){
      alert ('Please provide a valid number');
      return 
  }
 
     // step 3 -> add amound on dolor value 
     const depsiteTotalElement = document.getElementById('depositeBlance');
     const previousDepositeTotalString = depsiteTotalElement.innerText;
     const  previousDepositeTotal = parseFloat(previousDepositeTotalString)
     const current =  previousDepositeTotal + newDepositeAmound;
     depsiteTotalElement.innerText = current;
   // step 4-> balance total

   const balanceTotalElement = document.getElementById('balance-total');
   const previusTotalStringBalace  = balanceTotalElement.innerText;
   const previousTotalBlance = parseFloat(previusTotalStringBalace)
// step 5 -> current blance total
   const currentTotaBlance =  previousTotalBlance + newDepositeAmound;
   balanceTotalElement.innerText = currentTotaBlance;


     // clear input field
    

})