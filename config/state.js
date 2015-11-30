quiz.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /home
	$urlRouterProvider.otherwise("/home");
	//
	// Now set up the states
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "components/home/home.html"
	})
	.state('finish', {
		url: "/finish",
		templateUrl: "components/finish/finish.html",
		controller: "FinishController"
	})
	.state('quiz', {
		url: "/quiz",
		templateUrl: "components/quiz/quiz.html",
		controller: "QuizController"
	})
});