var showResult = $('#display');
var moyenne = $('.moyenne');
$(function() {
  function validateInput(marks){
    let isOk = true;
    marks.each(function(){
      if(isNaN($(this).val())){
        isOk = false;
      }
    });
    return isOk;
  };

  function averageCalc(marks){
    var sum = 0;
    var nbMarks = marks.length;
    marks.each(function(){
      sum += parseInt($(this).val());
    });
    return (sum/nbMarks).toFixed(2);
  };

  function displayAppreciation(average){
    var appreciation;
    if (average == 20) {
      appreciation = 'Excellent';
    } else if (average >= 16) {
      appreciation = 'Très bien';
    } else if (average >= 13){
      appreciation = 'Bien';
    } else if (average >= 10) {
      appreciation = 'Moyen';
    } else {
      appreciation = 'Mauvais';
    };
    showResult.html(appreciation);
    moyenne.html(`Votre moyenne est : ${average}`);
  };

  $('button').click(function(){
    var marks = $('input');
    if (!validateInput(marks)){
      return false;
    };
    let average = averageCalc(marks);
    displayAppreciation(average);
  });
});
