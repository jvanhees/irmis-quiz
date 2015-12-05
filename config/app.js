angular.module('quiz', []);

var quiz = angular.module('quiz', ['ui.router']);

quiz.config(['$compileProvider', function ($compileProvider) {
	$compileProvider.debugInfoEnabled(false);
}]);