/*timer function*/
setTimeout(sixtySeconds, 1000 * 60);

    function sixtySeconds(){
        $("#time-left").append("<h2>Time's Up!</h2>");
        console.log("time is up");
    }

$(document).ready(function(){
    console.log("document is loaded")

        
    $("#submit").click(function(){
       
        var correctTally = 0;
        var incorrectTally = 0;
        var unansweredTally = 0;
        
        $("input[name='q1']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++
            }else{
                incorrectTally++
            }
        });

        console.log('this is the correct tally: ' + correctTally);
        console.log('this is the unanswered tally: ' + unansweredTally);
   
        $("input[name='q2']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++;
            }else{
                incorrectTally++;
            }
        });
        
        $("input[name='q3']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++;
            }else{
                incorrectTally++; 
            }
        });
   
        $("input[name='q4']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++;
            }else{
                incorrectTally++;
            }
        });

        $("input[name='q5']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++;
            }else{
                incorrectTally++;
            }
        });

        $("input[name='q6']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++;
            }else{
                incorrectTally++;
            }
        });

        $("input[name='q7']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++;
            }else{
                incorrectTally++;
            }
        });

        $("input[name='q8']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++;
            }else{
                incorrectTally++;   
            }
        });
        
        

        alert("Number of Correct Answers " + correctTally + "Number of Incorrect Answers " + incorrectTally);
       // alert(incorrectTally);
    
       
    });
    
}) 

/* Here is my other timing code-I know the first 7 lines should be in HTML, but the rest is js

<div id="show-number"></div>

<br>

<button id="start">Start!</button>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">

var number = 60;
var intervalId;

    $("#start").on("click", run);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 60);
        }

        function decrement() {
            number--;
            $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
                alert("Time's Up!");
                
            }
        }

        function stop() {
            clearInterval(intervalId);
        }

        run();