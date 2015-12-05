quiz.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /home
	$urlRouterProvider.otherwise("/");
	//
	// Now set up the states
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "components/home/home.html"
	})
	.state('quiz', {
		templateUrl: "components/quiz/quiz.html",
		controller: "QuizController"
	})
	.state('quizSurvey', {
		templateUrl: "components/quizsurvey/quizsurvey.html",
		controller: "QuizSurveyController"
	})
	.state('prototype', {
		templateUrl: "components/prototype/prototype.html",
		controller: "PrototypeController"
	})
	.state('prototypeSurvey', {
		templateUrl: "components/prototypesurvey/prototypesurvey.html",
		controller: "PrototypeSurveyController"
	})
	.state('finish', {
		templateUrl: "components/finish/finish.html",
		controller: "FinishController"
	})
});