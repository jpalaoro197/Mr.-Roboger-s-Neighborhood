function beepBoop(inputNumber) {
  let outputNumber = [];
  for (let i1 = 0; i1 <= inputNumber; i1 +=1) {

  }


$(document).ready(function(){
  $("form#talk").submit(function(){
    event.preventDefault();
    const number = parseInt($("#number").val());
    const result = beepBoop(number)
    $("#output").text(result); 
  })
})