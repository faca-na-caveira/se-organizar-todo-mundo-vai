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

		// rotas estaticas de postagens
		.when('/posts/os-primeiros-passos-dos-produtores-de-eventos', {
			templateUrl : '/static/partials/posts/os-primeiros-passos-dos-produtores-de-eventos.html'
		})

		.when('/posts/10-dicas-para-fazer-o-checklist-do-seu-evento', {
			templateUrl : '/static/partials/posts/10-dicas-para-fazer-o-checklist-do-seu-evento.html'
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

	$(".button-collapse").sideNav();
	$('.modal').modal({
		dismissible: false
	});


	$scope.enviarCadastro = function(){

        var obj = new Object();
        obj.name = $scope.nome;
        obj.email  = $scope.email;
        obj.is_company = $scope.tipo_pessoa;
        obj.company = $scope.empresa;
        var jsonString= JSON.stringify(obj);

        //enviando as variáveis do cliente pro servidor

        $http({
            url: "http://127.0.0.1:5000/api", //http://127.0.0.1:5000/api
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            data: jsonString
            }).then(function(success) {
				// Se tudo der certo, então limpe as váriaveis.
				$scope.nome = "";
				$scope.email = "";
				$scope.empresa = "";
				$scope.tipo_pessoa = false;
               $('#modal_lead').modal('close');
            });


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