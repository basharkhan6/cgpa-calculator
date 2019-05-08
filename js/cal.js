var tbl = document.getElementById('tbl');
var courseCode = document.getElementById('courseCode');
var credit = document.getElementById('credit');
var result = document.getElementById('result');

var totalCredit = 0;
var totalGPA = 0;
var finalResult = 0;
var courses = [];
var credits = [];
var results = [];

function addCourse() {
  // courses.push(courseCode.value);
  // credits.push(credit.value);
  // results.push(result.value);

  totalCredit += parseInt(credit.value);
  totalGPA += (credit.value * result.value);

  var row = tbl.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = courseCode.value;
  cell2.innerHTML = credit.value;
  cell3.innerHTML = result.value;
}

function getCGPA() {
  finalResult = totalGPA / totalCredit;
  document.getElementById('finalResult').innerHTML = 'Your CGPA is: '+finalResult;
}

function checkAgree() {
  var chBox = document.getElementById('agree');
  var btnSignUp = document.getElementById('btnSignUp');

  if(chBox.checked) {
    btnSignUp.disabled = false;
  }
  else {
    btnSignUp.disabled = true;
  }
}
