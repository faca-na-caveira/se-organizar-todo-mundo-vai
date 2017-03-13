 'use strict';

// Cria o modulo e seu nome: leadBlogApp
var leadBlogApp = angular.module('leadBlogApp', ['ngRoute']);

// Configura rotas
leadBlogApp.config(['$routeProvider', '$locationProvider', '$qProvider', function($routeProvider, $locationProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
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

		//postagens
		// rota da pagina contato
		.when('/ten_tips', {
			templateUrl : '/static/partials/ten_tips.html',
			controller  : 'tenTipsController'
		})

		.when('/thanks', {
			templateUrl : '/static/partials/thanks.html',
			controller  : 'thanksController'
		})

		.otherwise({
			redirectTo:'/'
		});
}]);

leadBlogApp.controller('mainController', function($scope, $http) {
	$scope.nome = "";
	$scope.email = "";
	$scope.empresa = "";
	$scope.tipo_pessoa = false;

	$('.slider').slider();

	// $('.carousel.carousel-slider').carousel({
	// 	fullWidth: true,
	// 	duration: 300
	// });

	// setInterval(function(){
	// 	$('.carousel').carousel('next');
	// }, 5000);

	$(".button-collapse").sideNav();
	$('.modal').modal();

	$scope.enviarCadastro = function(){

        var obj = new Object();
        obj.name = $scope.nome;
        obj.email  = $scope.email;
        obj.is_company = $scope.tipo_pessoa;
        obj.company = $scope.empresa;
        var jsonString= JSON.stringify(obj);
       // alert(jsonString);

        //enviando as variáveis do cliente pro servidor
        $http({
            url: "https://seorganizareventos.herokuapp.com/api", //http://127.0.0.1:5000/api
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            data: jsonString
            }).then(function(success) {
               $('#modal_lead').modal('close');
            });

        //resetando as variaveis
		$scope.nome = "";
		$scope.email = "";
		$scope.empresa = "";
		$scope.tipo_pessoa = false;
	}
});

leadBlogApp.controller('aboutController', function($scope) {
	$scope.message = '';
});

leadBlogApp.controller('contactController', function($scope) {
	$scope.message = '';
});

leadBlogApp.controller('thanksController', function($scope) {
	$scope.message = '';
});

leadBlogApp.controller('tenTipsController', function($scope) {
	$('.slider').slider({
		indicators: false
	});
	$('.slider').slider('pause');
});