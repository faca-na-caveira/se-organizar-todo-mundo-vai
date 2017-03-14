 'use strict';

// Cria o modulo e seu nome: leadBlogApp
var leadBlogApp = angular.module('leadBlogApp',['ngRoute', 'angular-google-analytics', 'ngMeta']);

// Configura rotas
leadBlogApp.config(['$routeProvider', '$locationProvider', '$qProvider', '$interpolateProvider', 'AnalyticsProvider', 'ngMetaProvider', function($routeProvider, $locationProvider, $qProvider, $interpolateProvider, AnalyticsProvider, ngMetaProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $interpolateProvider.startSymbol('{_');
    $interpolateProvider.endSymbol('_}');
	$locationProvider.html5Mode(true);
	ngMetaProvider.useTitleSuffix(true);
	ngMetaProvider.setDefaultTitle('Se organizar, todo mundo vai');
	ngMetaProvider.setDefaultTitleSuffix(' | Blog para Produtores e Organizadores de Eventos ');
	$routeProvider

		// rota da pagina inicial
		.when('/', {
			templateUrl : '/static/partials/home.html',
			controller  : 'mainController',
			data: {
				meta: {
					'description': 'Blog para produtores e Organizadores de Eventos',
					'metaKeywords': 'produtores de evento organizado, importância de ser organizado em um evento, importância da organização do evento'
				}
			}
		})

		// rota da pagina sobre
		.when('/sobre', {
			templateUrl : '/static/partials/about.html',
			controller  : 'aboutController',
			data: {
				meta: {
					'title': 'Se organizar, todo mundo vai | Sobre nós',
					'description': 'Tudo que é preciso saber para garantir o sucesso de um evento, você vai encontrar aqui no Se Organizar, Todo Mundo Vai.',
					'metaKeywords': 'sobre organizar eventos, sucesso de um evento, organizar'
				}
			}
		})

		// rotas estaticas de postagens
		.when('/posts/os-primeiros-passos-dos-produtores-de-eventos', {
			templateUrl : '/static/partials/posts/os-primeiros-passos-dos-produtores-de-eventos.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': 'Os primeiros passos dos produtores de eventos',
                    'description': 'Se você deseja começar uma carreira de produtor de eventos, o essencial para dar o primeiro passo já está disponível para você!',
                    'metaKeywords': 'realizar eventos, ser um produtor de eventos, sucesso no seu evento'
                }
			}
		})

		.when('/posts/10-dicas-para-fazer-o-checklist-do-seu-evento', {
			templateUrl : '/static/partials/posts/10-dicas-para-fazer-o-checklist-do-seu-evento.html',
			controller: 'postController',
			data: {
                meta: {
                    'title': '10 dicas para fazer o checklist do seu evento',
                    'description': 'Fazer um checklist é fundamental para a organização e o sucesso do seu evento. Saiba como fazer aqui!',
                    'metaKeywords': 'realizar eventos, checklist de evento, organizacao do evento'
                }
            }
		})

		.when('/posts/3-dicas-para-nao-desperdicar-tempo-na-organizacao-do-seu-evento', {
			templateUrl : '/static/partials/posts/3-dicas-para-nao-desperdicar-tempo-na-organizacao-do-seu-evento.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': '3 dicas para não desperdiçar tempo na organização do seu evento',
                    'description': 'Não perca a cabeça organizando os seus eventos! Aqui colocamos o básico para você se preparar adequadamente e criar um momento incrível!',
                    'metaKeywords': 'dicas para organizar seu evento'
                }
			}
		})

		.when('/posts/aprenda-ja-o-que-fazer-se-tiver-que-cancelar-um-evento', {
			templateUrl : '/static/partials/posts/aprenda-ja-o-que-fazer-se-tiver-que-cancelar-um-evento.html',
			controller: 'postController',
			data: {
            	meta: {
                    'title': 'Aprenda já o que fazer se tiver que cancelar um evento',
                    'description': 'Deu ruim e foi preciso cancelar o evento? O processo não precisa ser doloroso se feito da maneira certa.',
                    'metaKeywords': 'cancelar evento, organizar após o cancelamento'
                }
			}
		})

		.when('/posts/como-fazer-o-primeiro-evento-da-minha-empresa', {
			templateUrl : '/static/partials/posts/como-fazer-o-primeiro-evento-da-minha-empresa.html',
			controller: 'postController',
			data: {
            	meta: {
                    'title': 'Como fazer o primeiro evento da minha empresa',
                    'description': 'Nós mostramos como sua empresa vai poder realizar eventos para atrair e se conectar com diferentes públicos muito importantes!',
                    'metaKeywords': 'primeiro evento da minha empresa, eventos corporativos'
                }
			}
		})

		.when('/posts/2-dicas-de-ouro-para-divulgar-o-evento-da-sua-empresa', {
			templateUrl : '/static/partials/posts/2-dicas-de-ouro-para-divulgar-o-evento-da-sua-empresa.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': '2 dicas de ouro para divulgar o evento da sua empresa',
                    'description': 'Com essas dicas infalíveis você conseguirá atrair o público para o seu evento e encantá-lo com o que você tem a oferecer!',
                    'metaKeywords': 'divulgação do evento, evento corporativo, minha empresa'
                }
			}
		})

		.when('/posts/saiba-o-que-oferecer-de-diferencial-no-evento-de-sua-empresa', {
			templateUrl : '/static/partials/posts/saiba-o-que-oferecer-de-diferencial-no-evento-de-sua-empresa.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': 'Saiba o que oferecer de diferencial no evento de sua empresa',
                    'description': 'O que é atrativo no seu evento? Saiba como agir para cada tipo de público relacionado!',
                    'metaKeywords': 'diferencial, meu evento, evento corporativo'
                }
			}
		})

		.when('/posts/como-tirar-o-evento-da-sua-empresa-do-papel', {
			templateUrl : '/static/partials/posts/como-tirar-o-evento-da-sua-empresa-do-papel.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': 'Como tirar o evento da sua empresa do papel',
                    'description': 'É hora de colocar a mão na massa. Nesse post, você vai saber o que é preciso fazer o evento acontecer e ser um sucesso.',
                    'metaKeywords': 'fazer eventos, tornar-se produtor de eventos'
                }
			}
		})

		.when('/posts/como-nao-ter-prejuizo-com-o-evento-da-sua-empresa', {
			templateUrl : '/static/partials/posts/como-nao-ter-prejuizo-com-o-evento-da-sua-empresa.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': 'Como não ter prejuízo com o evento da sua empresa',
                    'description': 'Atenção com o bolso: saiba como se planejar direitinho para o seu evento não virar uma dor de cabeça! Se liga que tem bônus pra você aqui!',
                    'metaKeywords': 'lucros, prejuizos, evento de sucesso, produtor de eventos'
                }
			}
		})

		.when('/posts/formas-de-viabilizar-o-evento-da-sua-empresa-sem-gastar-nada', {
			templateUrl : '/static/partials/posts/formas-de-viabilizar-o-evento-da-sua-empresa-sem-gastar-nada.html',
			controller: 'postController',
			data: {
				meta: {
                    'title': 'Formas de viabilizar o evento da sua empresa sem gastar nada',
                    'description': 'Falta grana para fazer o seu evento acontecer? Saiba como você pode torná-lo realidade sem gastar um centavo!',
                }
			}
		})

		.when('/agradecimento', {
			templateUrl : '/static/partials/thanks.html',
			controller  : 'thanksController'
		})

		.when('/cadastro', {
			templateUrl : '/static/partials/register.html',
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

leadBlogApp.run(['$rootScope', 'Analytics', 'ngMeta', function($rootScope, Analytics, ngMeta) {
	ngMeta.init();
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