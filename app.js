var time = document.getElementById('timeTxt');
var subject = document.getElementById('subjectTxt');
var verb = document.getElementById('verbText');
var adjective = document.getElementById('adjectiveTxt');
var question = document.getElementById('questionTxt');
var sentenceBtn = document.getElementById('makeSentenceBtnPressed');
var results = document.getElementById('resultsDisplay');
var resetBtn = document.getElementById('reset');
var form = document.getElementById('myForm');

    sentenceBtn.addEventListener("click", function() {
	event.preventDefault();
	var str = time.value + " " + subject.value + " " + verb.value + " " + adjective.value + " " + question.value;
    results.innerHTML = str;
});


function reset() {
	event.preventDefault();
	form.reset();
}

