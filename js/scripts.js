function beepBoop(inputNumber) {
  let outputNumber = [];
  for (let i = 0; i <= inputNumber; i +=1) {

    if (i.toString().includes(3)) {
      outputNumber.push("won't you be my neighbor?");
    } else {
      outputNumber.push(i)
    }
  };
  return outputNumber;
};


$(document).ready(function(){
  $("form#talk").submit(function(){
    event.preventDefault();
    const number = parseInt($("#number").val());
    const result = beepBoop(number)
    $("#output").text(result); 
  })
})