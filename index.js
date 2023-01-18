const Questions = [{
    id: 0,
    q: "CMM, EOO, GQQ, _____, KUU",
    a: [
        { text: "GRR", isCorrect: "false" },
        { text: "GSS", isCorrect: "false" },
        { text: "ISS", isCorrect: "true" },
        { text: "ITT", isCorrect: "false" }
    ]
},
{
    id: 1,
    q: "42 40 38 35 33 31 28",
    a: [
        { text: "24 27", isCorrect: "false" },
        { text: "26 23", isCorrect: "false" },
        { text: "24 26", isCorrect: "false" },
        { text: "26 24", isCorrect: "true" }
    ]
},
{
    id: 2,
    q: "Odometer is to mileage as compass is to",
    a: [
        { text: "speed", isCorrect: "false" },
        { text: "hiking", isCorrect: "false" },
        { text: "needle", isCorrect: "false" },
        { text: "direction", isCorrect: "true" }
    ]
},
{
    id: 3,
    q: "Which word does NOT belong with the others?",
    a: [
        { text: "parsley", isCorrect: "false" },
        { text: "basil", isCorrect: "false" },
        { text: "dill", isCorrect: "false" },
        { text: "mayonnaise", isCorrect: "true" }
    ]
},
{
    id: 4,
    q: "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A? ",
    a: [
        { text: "Brother", isCorrect: "false" },
        { text: "Sister", isCorrect: "false" },
        { text: "Nephew", isCorrect: "true" },
        { text: "Can't be determined", isCorrect: "false" }
    ]
}
]

var start = true;

if (start) {
    begin(0);
}

function begin(Qid) {

    // placing questions
    const question = document.getElementById("question");
    question.innerText = Questions[Qid].q;

    
    // enabling buttons so that other button can be selected after pressing next button
    $(".option").prop('disabled', false);
    
    var selectedId = "";
    // if(selectedId!==""){
    //     console.log("ku");
    //     $("#"+selectedId).css("background-color", "pink");
    // }

    // placing options
    document.getElementById('op1').innerText = Questions[Qid].a[0].text;
    document.getElementById('op2').innerText = Questions[Qid].a[1].text;
    document.getElementById('op3').innerText = Questions[Qid].a[2].text;
    document.getElementById('op4').innerText = Questions[Qid].a[3].text;


    $(".option").click(function () {
        // disabling buttons so that no other button can be selected
        $(".option").prop('disabled', true);

        selectedId = $(this).attr("id");
        $(this).css('background-color', '#75CAC3');
        
    }
    );

    $(".check").click(function(){
        console.log(selectedId);
        var opID=0;
        if(selectedId=="op1") opID=0;
        if(selectedId=="op2") opID=1;
        if(selectedId=="op3") opID=2;
        if(selectedId=="op4") opID=3;
        if( Questions[Qid].a[opID].isCorrect=="true"){
            console.log("yes");
            $("#"+selectedId).css("background-color", "green");
        }
        else
        $("#"+selectedId).css("background-color", "red");

    });

}

var id=0;
$(".next").click(function(){
    start=false;        // so that again id 0 se start na ho
    $(".option").css('background-color','#4090a8'); //to reset color of buttons to initial color when next question comes
    if(id<4)            // tot ques=4
    {
        id++;
        begin(id);
    }
    else{
        $("button").prop('disabled', true);
        $("#heading").text("Refresh to restart");
    }
});

