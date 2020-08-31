
fetch('quiz.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('questions').innerHTML = JSON.stringify(data);
    })

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("div.option.active").innerHTML;
  let crt_ans = questions[question_count].answers[questions[question_count].correct_answer-1]
  // check if the answer is right or wrong
  if (user_answer == crt_ans) {
    points += 4;
    sessionStorage.setItem("points", points);
  }
  else{
	   points -= 1;
    sessionStorage.setItem("points", points);
  }
  
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");

  var options= "";
  for(var i=0;i<questions[count].answers.length;i++)
  {
	  options=options+`<div class="col-md-5 col-xs-12 option">${questions[count].answers[i]}</div>`;
  }
  question.innerHTML=  `<h2>Q${count + 1}. ${questions[count].question}</h2>
					  <div class="col-md-12 col-xs-12 option_group">
					${options}
					</div> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("div.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

