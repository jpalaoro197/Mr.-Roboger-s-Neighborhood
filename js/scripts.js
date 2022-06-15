//business
function beepBoop(inputNumber) {
  let outputNumber = [];
  for (let i = 0; i <= inputNumber; i +=1) {

    if (i.toString().includes(3)) {
      outputNumber.push("won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      outputNumber.push("boop");
    } else if (i.toString().includes(1)) {
      outputNumber.push("beep");
    } else {
      outputNumber.push(i);
    }
  };
  return outputNumber;
};

//user
$(document).ready(function(){
  $("form#talk").submit(function(event){
    event.preventDefault();
    const number = parseInt($("#number").val());
    $("#output").text(beepBoop(number)); 
  });
});