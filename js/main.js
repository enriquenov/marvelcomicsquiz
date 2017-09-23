var questions = [
	{
		question: "1",
		answer: "thor"
	},
	{
		question: "2",
		answer: "rogue"
	},
	{
		question: "3",
		answer: "spiderman"
	},
	{
		question: "4",
		answer: "gambit"
	},
	{
		question: "5",
		answer: "wolverine"
	},
	{
		question: "6",
		answer: "storm"
	},
	{
		question: "7",
		answer: "deadpool"
	},
	{
		question: "8",
		answer: "magneto"
	},
	{
		question: "9",
		answer: "mystique"
	},
	{
		question: "10",
		answer: "juggernaut"
	}
];

for (var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var image = questions[i].image
	var el = document.getElementById('question' + [i]);

	// el.textContent = question;
	// console.log(question, el);
}

function testResults() {
	var correct = 0;
	var incorrect = 0;

	for (var i = 0; i < questions.length; i++) {
		var answer = questions[i].answer;
		var answerInput = document.getElementById('answer' + [i]);
		var guess = answerInput.value.toLowerCase();
		var questionSpot = document.getElementById('question' + [i]);

		console.log(answer);
		console.log(guess);
		console.log(questionSpot);

		if (answer == guess) {
			questionSpot.className = 'correct';
			answerInput.className = 'form-control yes';
			correct++;
			console.log(correct);
		} else {
			questionSpot.className = 'incorrect';
			answerInput.className = 'form-control no';
			incorrect++;
			console.log(incorrect);
		}
	}

	document.getElementById('body').style.backgroundImage = "url('img/footer-background.gif')";
	document.getElementById('correct').textContent = "Correct: " + correct;
	document.getElementById('incorrect').textContent = "Incorrect: " + incorrect;
	document.getElementById('results').style.height = "35vw";

};
