 'use strict';

// Cria o modulo e seu nome: leadBlogApp
var leadBlogApp = angular.module('leadBlogApp',['ngRoute']);

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
		.when('/sobre', {
			templateUrl : '/static/partials/about.html',
			controller  : 'aboutController'
		})

		// rotas estaticas de postagens
		.when('/posts/os-primeiros-passos-dos-produtores-de-eventos', {
			templateUrl : '/static/partials/posts/os-primeiros-passos-dos-produtores-de-eventos.html'
		})

		.when('/posts/10-dicas-para-fazer-o-checklist-do-seu-evento', {
			templateUrl : '/static/partials/posts/10-dicas-para-fazer-o-checklist-do-seu-evento.html',
			controller: 'tenTipsController'
		})

		.when('/agradecimento', {
			templateUrl : '/static/partials/thanks.html',
			controller  : 'thanksController'
		})

		.when('/cadastro', {
			templateUrl : '/static/partials/register.html',
			controller  : 'registerController'
		})

		.otherwise({
			redirectTo:'/'
		});
}]);

leadBlogApp.controller('mainController', function($scope, $http, $location) {
	initComponents();

    $scope.show_lead_conversion = true;

	$scope.fazerCadastro = function () {
		$scope.show_lead_conversion = false;
        $location.path("/cadastro");
	}
});

leadBlogApp.controller('aboutController', function($scope) {
	$scope.message = '';
});

leadBlogApp.controller('contactController', function($scope) {
	$scope.message = '';
});

leadBlogApp.controller('thanksController', function($scope) {
	initFixedSlide();
});

leadBlogApp.controller('tenTipsController', function($scope) {
	initFixedSlide();
});

leadBlogApp.controller('registerController', function($scope, $http, $location) {
	initFixedSlide();
	$scope.show_lead_conversion = false;
	$scope.nome = "";
	$scope.email = "";
	$scope.empresa = "";
	$scope.tipo_pessoa = true;

    $scope.submitForm = function(isValid) {

        // verifica se o formulário é válido
        if (isValid) {
            //alert('Formulário OK');
        }

    };

	$scope.enviarCadastro = function(){

        var obj = new Object();
        obj.name = $scope.nome;
        obj.email  = $scope.email;
        obj.is_company = $scope.tipo_pessoa;
        if(obj.is_company != false){
            obj.company = $scope.empresa;
        }else
            obj.company = "";

        var jsonString= JSON.stringify(obj);

        //enviando as variáveis do cliente pro servidor
        $http({
            url: "https://seorganizareventos.herokuapp.com/api", //http://127.0.0.1:5000/api
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            data: jsonString
            }).then(function(success) {
				// Se tudo der certo, então limpe as váriaveis.
				$scope.nome = "";
				$scope.email = "";
				$scope.empresa = "";
				$scope.tipo_pessoa = false;
                $scope.show_lead_conversion = false;
                $location.path( "/agradecimento" );
            }).catch(function(error){
                if(error.status === 400 && error.data.dup_item){
                    Materialize.toast('Esse email já existe! Digite outro e-mail.', 6000, 'red');
                }else{
                    Materialize.toast('Oh oh! Algo de errado aconteceu no nosso servidor! Entre em contato conosco e reporte o problema.', 6000, 'red');
                }
        });
	}
});

function initComponents() {
	//iniciando componentes
	$('.slider').slider();
	$(".button-collapse").sideNav();
}

function initFixedSlide() {
	$('.slider').slider({
		indicators: false
	});
	$('.slider').slider('pause');
}