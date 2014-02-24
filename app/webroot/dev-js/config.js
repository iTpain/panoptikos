app
	.config(["$locationProvider", function($locationProvider) {
		$locationProvider.html5Mode(true);
	}])

	.config(["$routeProvider", function($routeProvider) {
		$routeProvider
			.when("/donate", {
				// controller: "DonationsController",
				templateUrl: "/dev-partials/donations.html"
			})
			.when("/feedback", {
				// controller: "FeedbackController",
				templateUrl: "/dev-partials/feedback.html"
			})
			.when("/r/:subredditId/comments/:threadId/:title?", {
				controller: "ThreadDetailController",
				templateUrl: "/dev-partials/thread-detail.html"
			})
			.when("/r/:subredditIds/:section?", {
				controller: "ThreadListController",
				templateUrl: "/dev-partials/thread-list.html"
			})
			.when("/settings", {
				controller: "SettingsController",
				templateUrl: "/dev-partials/settings.html"
			})
			.when("/subreddits/:subredditIds?", {
				controller: "SubredditListController",
				templateUrl: "/dev-partials/subreddit-list.html"
			})
			.when("/:subredditIds?", {
				controller: "ThreadListController",
				templateUrl: "/dev-partials/thread-list.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	}])

	.config(["localStorageServiceProvider", function(localStorageServiceProvider) {
		localStorageServiceProvider.setPrefix("panoptikos")
	}])

	.config(["threadProcessorProvider", function(threadProcessor) {
		threadProcessor.setImgurClientId("2cf931a0831396f");
	}]);
