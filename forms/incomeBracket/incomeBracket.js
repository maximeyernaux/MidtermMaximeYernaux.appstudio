




btnSubmit.onclick=function(){

  
  
  if ( Number(inptIncome.value) < 30000){
  lblAnswer.value = `With your income of $${inptIncome.value}, you are in a tax bracket of 8% ` 
  }
  
  else if(Number(inptIncome.value) > 30000 && Number(inptIncome.value)< 99999){
  lblAnswer.value = `With your income of $${inptIncome.value}, you are in a tax bracket of 15% ` 
  }
  
  else {
  lblAnswer.value = `With your income of $${inptIncome.value}, you are in a tax bracket of 25% `
  }

}


