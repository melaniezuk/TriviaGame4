$(document).ready(function(){
    console.log("document is loaded")

    $("#submit").click(function(){
       
        var correctTally = 0;
        var incorrectTally = 0;
        
        $("input[name='q1']:checked").each(function(){
            if($(this).data("answer")){
                correctTally++
            }else{
                incorrectTally++
            }
        });

        console.log('this is the correct tally: ' + correctTally);
        console.log('this is th incorrect tally: ' + incorrectTally);
   
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
        

        alert("Number of Correct Answers" + correctTally + "Number of Incorrect Answers" + incorrectTally);
       // alert(incorrectTally);
        
       setTimeout(timeUp, 1000 * 12);
       
    });
    
}) 