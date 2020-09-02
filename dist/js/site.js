
fetch('quiz.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('questions').innerHTML = JSON.parse(data);
    })

let question_count = 0;
let points = 0;

let user_name = sessionStorage.getItem("name");


document.querySelector("span.name").innerHTML = user_name;



window.onload = function() {
  show(question_count);

};


function back(){
	if (question_count == questions.length + 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "start.html";
  }
  let optionselect = document.querySelector("question_count");
 
if( optionselect == null){
	
  question_count--;
  show(question_count);
  sessionStorage.getItem(question_count--);
	//alert("please select an option");
}	
	 else{
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

  question_count--;
  show(question_count);
	 }
}
function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  
  
  console.log(question_count);
  let optionselect = document.querySelector("div.option.active");
 
if( optionselect == null){
Swal.fire({
  title: 'Please select an option',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
	//alert("please select an option");
}	
	 else{
  	
  
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
}

function show(count) {
  let question = document.getElementById("questions");

  var options= "";
  for(var i=0;i<questions[count].answers.length;i++)
  {
	  options=options+`<div class="col-md-5 col-xs-12 option">${questions[count].answers[i]}</div>`;
  }
  question.innerHTML=  `<h2 class="animate__animated animate__backInLeft">Q${count + 1}. ${questions[count].question}</h2>
					  <div class="col-md-12 col-xs-12 option_group animate__animated animate__fadeInUp">
					${options}
					</div> 
  `;
  toggleActive();
  if(question_count == 0){
	$('#back').hide();	
}
else{
	$('#back').show();	
}
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

