'use strict';

angular.module('leadBlogApp',['ngRoute', 'angular-google-analytics', 'leadBlogApp.controllers', 'leadBlogApp.filters', 'leadBlogApp.directives'])

.run(['Analytics', function(Analytics) {
}])

// Configura rotas
.config(['$routeProvider', '$locationProvider', '$qProvider', 'AnalyticsProvider', function($routeProvider, $locationProvider, $qProvider, AnalyticsProvider) {
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
			controller: 'postController'
		})

		.when('/posts/o-que-fazer-depois-de-um-evento', {
			templateUrl : '/static/partials/posts/o-que-fazer-depois-de-um-evento.html',
			controller: 'postController'
		})

        .when('/posts/ebook-6-passos-essenciais-para-a-realizacao-de-um-evento-corporativo', {
			templateUrl : '/static/partials/posts/ebook-6-passos-essenciais-para-a-realizacao-de-um-evento-corporativo.html',
			controller: 'postController'
		})

        .when('/posts/sabe-os-detalhes-legais-para-seu-evento-ocorrer-aprenda-agora', {
			templateUrl : '/static/partials/posts/sabe-os-detalhes-legais-para-seu-evento-ocorrer-aprenda-agora.html',
			controller: 'postController'
		})

        .when('/posts/11-dicas-infaliveis-para-uma-festa-open-bar', {
			templateUrl : '/static/partials/posts/11-dicas-infaliveis-para-uma-festa-open-bar.html',
			controller: 'postController'
		})

		.when('/posts/4-dicas-valiosas-para-arrasar-na-divulgacao-do-seu-evento', {
			templateUrl : '/static/partials/posts/4-dicas-valiosas-para-arrasar-na-divulgacao-do-seu-evento.html',
			controller: 'postController'
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
			controller  : 'registerController'
		})

		.otherwise({
			redirectTo:'/'
		});

		AnalyticsProvider.setAccount('UA-93553744-1');
}]);