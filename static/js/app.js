 'use strict';

// Cria o modulo e seu nome: leadBlogApp
var leadBlogApp = angular.module('leadBlogApp',['ngRoute', 'angular-google-analytics']);

// Configura rotas
leadBlogApp.config(['$routeProvider', '$locationProvider', '$qProvider','AnalyticsProvider', function($routeProvider, $locationProvider, $qProvider, AnalyticsProvider) {
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
			controller  : 'aboutController',
			seoSettings: {
				'title': 'Se organizar, todo mundo vai | Sobre nós',
				'metaDescription': 'Tudo que é preciso saber para garantir o sucesso de um evento, você vai encontrar aqui no Se Organizar, Todo Mundo Vai.',
				'metaKeywords': 'sobre organizar eventos, sucesso de um evento, organizar'
			}
		})

		// rotas estaticas de postagens
		.when('/posts/os-primeiros-passos-dos-produtores-de-eventos', {
			templateUrl : '/static/partials/posts/os-primeiros-passos-dos-produtores-de-eventos.html',
			controller: 'postController',
			seoSettings: {
				'title': 'Os primeiros passos dos produtores de eventos',
				'metaDescription': 'Se você deseja começar uma carreira de produtor de eventos, o essencial para dar o primeiro passo já está disponível para você!',
				'metaKeywords': 'realizar eventos, ser um produtor de eventos, sucesso no seu evento'
			}
		})

		.when('/posts/10-dicas-para-fazer-o-checklist-do-seu-evento', {
			templateUrl : '/static/partials/posts/10-dicas-para-fazer-o-checklist-do-seu-evento.html',
			controller: 'postController',
			seoSettings: {
				'title': '10 dicas para fazer o checklist do seu evento',
				'metaDescription': 'Fazer um checklist é fundamental para a organização e o sucesso do seu evento. Saiba como fazer aqui!',
				'metaKeywords': 'realizar eventos, checklist de evento, organizacao do evento'
			}
		})

		.when('/posts/3-dicas-para-nao-desperdicar-tempo-na-organizacao-do-seu-evento', {
			templateUrl : '/static/partials/posts/3-dicas-para-nao-desperdicar-tempo-na-organizacao-do-seu-evento.html',
			controller: 'postController',
			seoSettings: {
				'title': '3 dicas para não desperdiçar tempo na organização do seu evento',
				'metaDescription': 'Não perca a cabeça organizando os seus eventos! Aqui colocamos o básico para você se preparar adequadamente e criar um momento incrível!',
				'metaKeywords': 'dicas para organizar seu evento'
			}
		})

		.when('/posts/aprenda-ja-o-que-fazer-se-tiver-que-cancelar-um-evento', {
			templateUrl : '/static/partials/posts/aprenda-ja-o-que-fazer-se-tiver-que-cancelar-um-evento.html',
			controller: 'postController',
			seoSettings: {
				'title': 'Aprenda já o que fazer se tiver que cancelar um evento',
				'metaDescription': 'Deu ruim e foi preciso cancelar o evento? O processo não precisa ser doloroso se feito da maneira certa.',
				'metaKeywords': 'cancelar evento, organizar após o cancelamento'
			}
		})

		.when('/posts/como-fazer-o-primeiro-evento-da-minha-empresa', {
			templateUrl : '/static/partials/posts/como-fazer-o-primeiro-evento-da-minha-empresa.html',
			controller: 'postController',
			seoSettings: {
				'title': 'Como fazer o primeiro evento da minha empresa',
				'metaDescription': 'Nós mostramos como sua empresa vai poder realizar eventos para atrair e se conectar com diferentes públicos muito importantes!',
				'metaKeywords': 'primeiro evento da minha empresa, eventos corporativos'
			}
		})

		.when('/posts/2-dicas-de-ouro-para-divulgar-o-evento-da-sua-empresa', {
			templateUrl : '/static/partials/posts/2-dicas-de-ouro-para-divulgar-o-evento-da-sua-empresa.html',
			controller: 'postController',
			seoSettings: {
				'title': '2 dicas de ouro para divulgar o evento da sua empresa',
				'metaDescription': 'Com essas dicas infalíveis você conseguirá atrair o público para o seu evento e encantá-lo com o que você tem a oferecer!',
				'metaKeywords': 'divulgação do evento, evento corporativo, minha empresa'
			}
		})

		.when('/posts/saiba-o-que-oferecer-de-diferencial-no-evento-de-sua-empresa', {
			templateUrl : '/static/partials/posts/saiba-o-que-oferecer-de-diferencial-no-evento-de-sua-empresa.html',
			controller: 'postController',
			seoSettings: {
				'title': '2 dicas de ouro para divulgar o evento da sua empresa',
				'metaDescription': 'Com essas dicas infalíveis você conseguirá atrair o público para o seu evento e encantá-lo com o que você tem a oferecer!',
				'metaKeywords': 'divulgação do evento, evento corporativo, minha empresa'
			}
		})

		.when('/agradecimento', {
			templateUrl : '/static/partials/thanks.html',
			controller  : 'thanksController'
		})

		.when('/cadastro', {
			templateUrl : '/static/partials/register.html',
			controller  : 'registerController',
			seoSettings: {
				'title': 'Assine nosso conteúdo, TOTALMENTE GRÁTIS!',
				'metaDescription': 'Receba nosso conteúdo em primeira mão e arrase no seu evento!',
				'metaKeywords': 'realizar eventos, como fazer eventos, conteúdo em primeira mão'
			}
		})

		.otherwise({
			redirectTo:'/'
		});

		AnalyticsProvider.setAccount('UA-93553744-1');
}]);

leadBlogApp.run(['$rootScope', 'Analytics', function($rootScope, Analytics) {

	/* quando alterar a rota dinâmicamente, mude o título e as configurações de seo,
	definidos na rota */




	$rootScope.$on('$routeChangeSuccess', function(event, current){
		// Se não houver nenhuma configuração de SEO na ROTA, por default utilizar esta:
		var defaultSeoSettings = {
			'title': 'Se organizar, todo mundo vai | Blog para Produtores e Organizadores de Eventos',
			'metaDescription': 'Blog para produtores e Organizadores de Eventos',
			'metaKeywords': 'produtores de evento organizado, importância de ser organizado em um evento, importância da organização do evento'
		};

		/*
			Verificação para haver se pra esta ROTA, existe uma configuração de SEO,
			Caso não, utilize a configuração padrão!
		*/

		if (current.$$route.seoSettings){
			$rootScope.seoSettings = {
				'title': current.$$route.seoSettings.title,
				'metaDescription': current.$$route.seoSettings.metaDescription,
				'metaKeywords': current.$$route.seoSettings.metaKeywords
			};
		}else{
			$rootScope.seoSettings = {
                'title': defaultSeoSettings.title,
                'metaDescription': defaultSeoSettings.metaDescription,
				'metaKeywords':  defaultSeoSettings.metaKeywords
            }
		}
	})
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
	$scope.message = '';
});

leadBlogApp.controller('contactController', function($scope) {
	$scope.message = '';
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