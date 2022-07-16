const quizData = [
    {
        question: 'what is your name',
        a:"kayyu",
        b:"imiboy",
        c:"Andyboy",
        d:"enomfon",
        answer:"c"
    },
    {
        question: 'what is your skin color',
        a:"black",
        b:"brown",
        c:"white",
        d:"purple",
        answer:"c"
    },
    {
        question: 'what is your food type',
        a:"soup",
        b:"junk",
        c:"vegetarian",
        d:"snacks",
        answer:"b"
    },
    {
        question: 'best programming language',
        a:"python",
        b:"java",
        c:"nodeJS",
        d:"Matlab",
        answer:"d"
    },



    {
        question: 'best car',
        a:"ferrari",
        b:"lamborghini",
        c:"porche",
        d:"toyota",
        answer:"d"
    },
    {
        question: 'best sport',
        a:"soccer",
        b:"basketball",
        c:"volleyball",
        d:"paintball",
        answer:"bl"
    },
    {
        question: 'dirtiest animal',
        a:"rabbit",
        b:"dog",
        c:"pig",
        d:"cow",
        answer:"c"
    },
    {
        question: 'annoying group',
        a:"family",
        b:"friends",
        c:"studybud",
        d:"team mates",
        answer:"b"
    }
]


const questionEL = document.getElementById('question');
const quiz = document.getElementById('quiz');
const answersEl = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score = 0;


loadQuiz();


function loadQuiz(){
    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz];
     questionEL.innerText = currentQuizData.question;


    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    
}

function getSelected(){
    


    let answer = undefined;
    answersEl.forEach((answerEl)=>{
            if(answerEl.checked)
              {answer = answerEl.id;}
    })


    return answer;
}

function deselectAnswers(){
    
    answersEl.forEach((answerEl)=>{
        answerEl.checked = false;
    })


}



submitBtn.addEventListener('click',function(){
    
    const answer = getSelected()
    
   
    
    console.log(answer);
    
    if (answer){
        if(answer === quizData[currentQuiz].answer){
            score++;
        }
        
        currentQuiz++
        if (currentQuiz < quizData.length){
            
            loadQuiz();
        }else
        {
            quiz.innerHTML = `<h2>congrats you answered ${score} out of ${quizData.length} questions</h2> <button onclick = "location.reload()">Reload</button>`
        }
    
    }

   

})

