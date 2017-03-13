// Cria o modulo e seu nome: leadBlogApp
var leadBlogApp = angular.module('leadBlogApp', ['ngRoute']);

// Configura rotas
leadBlogApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider

		// rota da pagina inicial
		.when('/', {
			templateUrl : '/static/partials/home.html',
			controller  : 'mainController'
		})

		// rota da pagina sobre
		.when('/about', {
			templateUrl : '/static/partials/about.html',
			controller  : 'aboutController'
		})

		// rota da pagina contato
		.when('/contact', {
			templateUrl : '/static/partials/contact.html',
			controller  : 'contactController'
		})

		.otherwise({
			redirectTo:'/'
		});
}]);

leadBlogApp.controller('mainController', function($scope) {
	$scope.message = 'Everyone come and see how good I look!';

	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		duration: 300
	});

	setInterval(function(){
		$('.carousel').carousel('next');
	}, 5000);

	$(".button-collapse").sideNav();
});

leadBlogApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

leadBlogApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});