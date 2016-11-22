$(document).ready(function() {

  var correct = 0;

  var incorrect = 0;

  var quiz = [
    {
      question: "Where is Germany?",
      answers: ["Asia", "Africa", "Europe", "France"],
      correct: 2
    },
    {
      question: "Where is France?",
      answers: ["Asia", "Africa", "Europe", "Germany"],
      correct: 2
    },
      {
      question: "Where is China?",
      answers: ["Asia", "Africa", "Europe", "France"],
      correct: 0
    },
      {
      question: "Where is Libya?",
      answers: ["Asia", "Africa", "Europe", "France"],
      correct: 1
    },
      {
      question: "Where is Italy?",
      answers: ["Asia", "Africa", "Europe", "France"],
      correct: 2
    }
  ];

  function showQuestion(index) {
    $('#question').text(quiz[index].question);
    $('#answers').empty();
      for (var i = 0; i < quiz[index].answers.length; i++) {
      var html = "<input type='radio' name='quiz' value='" + i + "'>" + 
        quiz[index].answers[i] +"<br>";
      $('#answers').append(html);
    }
  }
  function showResults() {
    $('#question').hide();
    $('#answers').hide();
    $('#quizForm').hide();
    $('#status').html("'You've got "+ correct + " correct answers." );
  }

  function checkAnswer(index) {
    if ($('input[name=quiz]:checked').val() == quiz[index].correct ) {
      correct++;
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      showQuestion(currentQuestion);
    }
    else {
      showResults();
    }
  }


  $('#quizForm').submit(function(e) {
    e.preventDefault();
    checkAnswer(currentQuestion);
  });

  var currentQuestion = 0;

  showQuestion(currentQuestion);


});