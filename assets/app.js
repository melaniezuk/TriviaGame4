
$(document).ready(function(){
    console.log("document is loaded")

    var number = 60;
      var intervalId;

    $("#start-button").on("click", run);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        }

    function decrement() {
        number--;
        $("#show-number").html("<h2>" + number + "</h2>");
        if (number === 0) {
            stop();
            alert("Time's Up!");
            }
        }

    function getUnanswered (correctTally, incorrectTally) {
            alert (totalQuestion - sum);
        }

    function stop() {
        clearInterval(intervalId);
    }

    $("#submit").click(function(){

        var correctTally = 0;
        var incorrectTally = 0;

        var totalQuestion = 8;

        function determiner(scope){
            if(scope.data("answer")){
                correctTally++;
            }else{
                incorrectTally++;
            }
        };

        $("input[name='q1']:checked").each(function(){
            determiner($(this));
        });

        $("input[name='q2']:checked").each(function(){
            determiner($(this));
        });

        $("input[name='q3']:checked").each(function(){
            determiner($(this));
        });

        $("input[name='q4']:checked").each(function(){
            determiner($(this));
        });

        $("input[name='q5']:checked").each(function(){
            determiner($(this));
        });

        $("input[name='q6']:checked").each(function(){
            determiner($(this));
        });

        $("input[name='q7']:checked").each(function(){
            determiner($(this));

        });

        $("input[name='q8']:checked").each(function(){
            determiner($(this));
        });

        var sum = correctTally + incorrectTally;
        var getUnanswered = 8 - sum;
        alert("Number of Correct Answers = " + correctTally + " " + "Number of Incorrect Answers = " + incorrectTally + " " + "Number of Unanswered questions = " + getUnanswered);



    });

})



