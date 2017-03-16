 'use strict';

// Cria o modulo e seu nome: leadBlogApp
var leadBlogApp = angular.module('leadBlogApp',['ngRoute', 'angular-google-analytics']);

// Configura rotas
leadBlogApp.config(['$routeProvider', '$locationProvider', '$qProvider', 'AnalyticsProvider', function($routeProvider, $locationProvider, $qProvider, AnalyticsProvider) {
    $qProvider.errorOnUnhandledRejections(false);
	$locationProvider.html5Mode(true);
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
			templateUrl : '/static/partials/posts/os-primeiros-passos-dos-produtores-de-eventos.html',
			controller: 'postController'
		})

		.when('/posts/10-dicas-para-fazer-o-checklist-do-seu-evento', {
			templateUrl : '/static/partials/posts/10-dicas-para-fazer-o-checklist-do-seu-evento.html',
			controller: 'postController'
		})

		.when('/posts/3-dicas-para-nao-desperdicar-tempo-na-organizacao-do-seu-evento', {
			templateUrl : '/static/partials/posts/3-dicas-para-nao-desperdicar-tempo-na-organizacao-do-seu-evento.html',
			controller: 'postController'
		})

		.when('/posts/aprenda-ja-o-que-fazer-se-tiver-que-cancelar-um-evento', {
			templateUrl : '/static/partials/posts/aprenda-ja-o-que-fazer-se-tiver-que-cancelar-um-evento.html',
			controller: 'postController'
		})

		.when('/posts/como-fazer-o-primeiro-evento-da-minha-empresa', {
			templateUrl : '/static/partials/posts/como-fazer-o-primeiro-evento-da-minha-empresa.html',
			controller: 'postController'
		})

		.when('/posts/2-dicas-de-ouro-para-divulgar-o-evento-da-sua-empresa', {
			templateUrl : '/static/partials/posts/2-dicas-de-ouro-para-divulgar-o-evento-da-sua-empresa.html',
			controller: 'postController'
		})

		.when('/posts/saiba-o-que-oferecer-de-diferencial-no-evento-de-sua-empresa', {
			templateUrl : '/static/partials/posts/saiba-o-que-oferecer-de-diferencial-no-evento-de-sua-empresa.html',
			controller: 'postController'
		})

		.when('/posts/como-tirar-o-evento-da-sua-empresa-do-papel', {
			templateUrl : '/static/partials/posts/como-tirar-o-evento-da-sua-empresa-do-papel.html',
			controller: 'postController'
		})

		.when('/posts/como-nao-ter-prejuizo-com-o-evento-da-sua-empresa', {
			templateUrl : '/static/partials/posts/como-nao-ter-prejuizo-com-o-evento-da-sua-empresa.html',
			controller: 'postController'
		})

		.when('/posts/formas-de-viabilizar-o-evento-da-sua-empresa-sem-gastar-nada', {
			templateUrl : '/static/partials/posts/formas-de-viabilizar-o-evento-da-sua-empresa-sem-gastar-nada.html',
			controller: 'postController'
		})

		.when('/posts/prepare-se-para-organizar-uma-festa-universitaria', {
			templateUrl : '/static/partials/posts/prepare-se-para-organizar-uma-festa-universitaria.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': 'Prepare-se para organizar uma festa universitária',
                    'description': 'Você quer fazer festa univesitária, calourada, open-bar (ou muito mais)? Confira algumas dicas que vão te preparar bem para isso!',
                }
			}
		})

		.when('/posts/o-que-fazer-depois-de-um-evento', {
			templateUrl : '/static/partials/posts/o-que-fazer-depois-de-um-evento.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': 'O que fazer depois de um evento?',
                    'description': 'O blog "Se Organizar, Todo Mundo Vai" traz esse vídeo pra você se orientar com o que fazer no pós-evento para poder melhorar sempre!',
                }
			}
		})

		.when('/agradecimento', {
			templateUrl : '/static/partials/thanks.html',
			controller  : 'thanksController'
		})

		.when('/cadastro', {
			templateUrl : '/static/partials/register.html',
			controller  : 'registerController'
		})

		.when('/cadastro2', {
			templateUrl : '/static/partials/register2.html',
			controller  : 'registerController',
			data: {
				meta: {
                    'title': 'Assine nosso conteúdo, TOTALMENTE GRÁTIS!',
                    'description': 'Receba nosso conteúdo em primeira mão e arrase no seu evento!',
                    'metaKeywords': 'realizar eventos, como fazer eventos, conteúdo em primeira mão'
                }
			}
		})

		.otherwise({
			redirectTo:'/'
		});

		AnalyticsProvider.setAccount('UA-93553744-1');
}]);

leadBlogApp.run(['$rootScope', 'Analytics', function($rootScope, Analytics) {
}]);


leadBlogApp.controller('mainController', function($scope, $http, $location) {
	initComponents();

    $scope.show_lead_conversion = true;

	$scope.fazerCadastro = function () {
		$scope.show_lead_conversion = false;
        $location.path("/cadastro");
	};

});

leadBlogApp.controller('aboutController', function($scope) {
	initFixedSlide();
});

leadBlogApp.controller('contactController', function($scope) {
});

leadBlogApp.controller('thanksController', function($scope) {
	initFixedSlide();
});

leadBlogApp.controller('postController', function($scope) {
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
            url: "http://www.seorganizareventos.com.br/api", //http://127.0.0.1:5000/api
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