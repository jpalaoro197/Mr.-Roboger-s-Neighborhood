function beepBoop(inputNumber) {
  let roboTalk = ["beep", "boop", "wont you be my neighbor?"]
  let outputNumber = [];
  let outputString;
  for (let i1 = 0; i1 <= inputNumber; i1 +=1) {
    outputString = i1.toString();
    for (let i2 = 3; i2 > 0; i2--) {
      if(outputString.includes(i2.toString())) {
        outputNumber.push(roboTalk[i2-1]);
      }
    }
    if (outputNumber.length < (i1 + 1)) { outputNumber.push(i1); }
    }
  return outputNumber;
}

$(document).ready(function(){
  $("form#talk").submit(function(){
    event.preventDefault();
    const number = parseInt($("#number").val());
    const result = beepBoop(number)
    $("#output").text(result); 
  })
})