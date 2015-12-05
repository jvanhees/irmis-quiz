angular.module('quiz')
	.service("apiService", ['$http', '$q',
	function($http, $q) {
		
		this.api = 'api/';
		
		var sessionId;
		var questionsCorrect;
		var questionsWrong;
		
		this.setQuestions = function(correct, wrong){
			questionsCorrect = correct;
			questionsWrong = wrong;
		};
		
		this.saveQuiz = function(quizSurvey){
			var data = {
				'sessionId': sessionId,
				'questionsCorrect': questionsCorrect,
				'questionsWrong': questionsWrong,
				'questions': JSON.stringify(quizSurvey),
			}
			
			this.makeRequest('saveQuiz.php', data).then(function successCallback(response) {
			}, function errorCallback(response) {
				console.log(response);
			});
		};
		
		this.savePrototype = function(prototypeSurvey){
			var data = {
				'sessionId': sessionId,
				'questions': JSON.stringify(prototypeSurvey),
			}
			this.makeRequest('savePrototype.php', data).then(function successCallback(response) {
			}, function errorCallback(response) {
				console.log(response);
			});
		};
		
		this.createSession = function(feedbackType){
			this.makeRequest('createSession.php', {'feedbackType': feedbackType}).then(function successCallback(response) {
				sessionId = response.data.message;
			}, function errorCallback(response) {
				console.log(response);
			});
		};
		
		this.makeRequest = function(url, data){
			return $http({
				method: 'POST',
				url: this.api + url,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			    transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
				data: data
			});
		};
		
	}]
);