'use strict';

angular.module('leadBlogApp.controllers', [])
.controller('mainController', function($scope, $http, $location, $timeout, $anchorScroll) {

    $scope.show_lead_conversion = true;

    $scope.fazerCadastro = function () {
        $scope.show_lead_conversion = false;
        $location.path("/cadastro");
    };

    $scope.changePage = function(page){
        // Quando mudar de página, rolar para o início dos posts
        // $location.hash();
        $anchorScroll('blog-posts');


        return page
    };


    //paginação
    $scope.showData = function( ){
        $scope.curPage = 0;
        $scope.pageSize = 6;
        $scope.posts = [
            {
                collumnConfig: 'col s12 m6 l6',
                title: 'E-book: 6 passos essenciais para a realização de um evento corporativo',
                imagePath: '/static/images/posts/ebooks.jpg',
                content: 'A equipe do <i>"Se Organizar Todo Mundo Vai!"</i> preparou um guia com 6 passos fundamentais na organização de um evento empresarial. Confira!',
                action: '/posts/ebook-6-passos-essenciais-para-a-realizacao-de-um-evento-corporativo',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: '11 dicas infalíveis para uma festa OPEN BAR',
                imagePath: '/static/images/posts/11-dicas-infaliveis.jpg',
                content: 'Everton Marques, o Mamãe, faz festas universitárias desde 2008 e desvenda neste post todos os segredos para o sucesso de um evento open bar.',
                action: '/posts/11-dicas-infaliveis-para-uma-festa-open-bar',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Sabe os detalhes legais para seu evento ocorrer? Aprenda agora!',
                imagePath: '/static/images/posts/alvara-funcionamento.jpg',
                content: 'Data, local, estrutura e atrações definidas. Quase tudo pronto para seu evento. Mas e os itens legais, como licenças e alvarás? Saiba mais.',
                action: '/posts/sabe-os-detalhes-legais-para-seu-evento-ocorrer-aprenda-agora',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: '4 dicas valiosas para arrasar na divulgação do seu evento',
                imagePath: '/static/images/posts/divulgacao-eficiente.jpg',
                content: 'A divulgação pode alavancar a audiência do seu evento ou derrubá-la. Por isso, é importante dar atenção a esse item sabendo o que fazer.',
                action: '/posts/4-dicas-valiosas-para-arrasar-na-divulgacao-do-seu-evento',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'O que fazer depois de um evento?',
                imagePath: '/static/images/posts/pos-evento.jpg',
                content: 'O blog "Se Organizar, Todo Mundo Vai" traz esse vídeo pra você se orientar com o que fazer no pós-evento para poder melhorar sempre!',
                action: '/posts/o-que-fazer-depois-de-um-evento',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Prepare-se para organizar uma festa universitária',
                imagePath: '/static/images/posts/festas-universitarias.jpg',
                content: 'Você quer fazer festa univesitária, calourada, open-bar (ou muito mais)? Confira algumas dicas que vão te preparar bem para isso!',
                action: '/posts/prepare-se-para-organizar-uma-festa-universitaria',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Aprenda já o que fazer se tiver que cancelar um evento',
                imagePath: '/static/images/posts/cancelar-evento.jpg',
                content: 'Deu ruim e foi preciso cancelar o evento? O processo não precisa ser doloroso se feito da maneira certa.',
                action: '/posts/aprenda-ja-o-que-fazer-se-tiver-que-cancelar-um-evento',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Formas de viabilizar o evento da sua empresa sem gastar nada',
                imagePath: '/static/images/posts/6passos6.jpg',
                content: 'Falta grana para fazer o seu evento acontecer? Saiba como você pode torná-lo realidade sem gastar um centavo!',
                action: '/posts/formas-de-viabilizar-o-evento-da-sua-empresa-sem-gastar-nada',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l4',
                title: '3 dicas para não desperdiçar tempo na organização do seu evento',
                imagePath: '/static/images/posts/checklist.jpg',
                content: 'Não perca a cabeça organizando os seus eventos! Aqui colocamos o básico para você se preparar adequadamente e criar um momento incrível!',
                action: '/posts/3-dicas-para-nao-desperdicar-tempo-na-organizacao-do-seu-evento',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l8',
                title: 'Como fazer o primeiro evento da minha empresa',
                imagePath: '/static/images/posts/6passos1.jpg',
                content: 'Nós mostramos como sua empresa vai poder realizar eventos para atrair e se conectar com diferentes públicos muito importantes!',
                action: '/posts/como-fazer-o-primeiro-evento-da-minha-empresa',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Saiba o que oferecer de diferencial no evento de sua empresa',
                imagePath: '/static/images/posts/6passos2.jpg',
                content: 'O que é atrativo no seu evento? Saiba como agir para cada tipo de público relacionado!',
                action: '/posts/saiba-o-que-oferecer-de-diferencial-no-evento-de-sua-empresa',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: '2 dicas de ouro para divulgar o evento da sua empresa',
                imagePath: '/static/images/posts/6passos3.jpg',
                content: 'Com essas dicas infalíveis você conseguirá atrair o público para o seu evento e encantá-lo com o que você tem a oferecer!',
                action: '/posts/2-dicas-de-ouro-para-divulgar-o-evento-da-sua-empresa',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Como tirar o evento da sua empresa do papel',
                imagePath: '/static/images/posts/6passos4.jpg',
                content: 'É hora de colocar a mão na massa. Nesse post, você vai saber o que é preciso fazer o evento acontecer e ser um sucesso.',
                action: '/posts/como-tirar-o-evento-da-sua-empresa-do-papel',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Como não ter prejuízo com o evento da sua empresa',
                imagePath: '/static/images/posts/6passos5.jpg',
                content: 'Atenção com o bolso: saiba como se planejar direitinho para o seu evento não virar uma dor de cabeça! Se liga que tem bônus pra você aqui!',
                action: '/posts/como-nao-ter-prejuizo-com-o-evento-da-sua-empresa',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: '10 dicas para fazer o checklist do seu evento',
                imagePath: '/static/images/posts/10-dicas.jpg',
                content: 'Fazer um checklist é fundamental para a organização e o sucesso do seu evento. Saiba como fazer aqui!',
                action: '/posts/10-dicas-para-fazer-o-checklist-do-seu-evento',
                actionTitle: 'SAIBA MAIS'
            },{
                collumnConfig: 'col s12 m6 l6',
                title: 'Os primeiros passos dos Produtores de Eventos',
                imagePath: '/static/images/posts/evento.jpg',
                content: 'Se você deseja começar uma carreira de produtor de eventos, o essencial para dar o primeiro passo já está disponível para você!',
                action: '/posts/os-primeiros-passos-dos-produtores-de-eventos',
                actionTitle: 'SAIBA MAIS'
            }
        ];

        //pega os quatro primeiros posts da lista (mais atuais)
        $scope.headPosts = $scope.posts.slice(0, 4);

        $scope.numberOfPages = function() {
            return Math.ceil($scope.datalists.length / $scope.pageSize);
        };
    };

    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        initComponents();
    });
}).controller('aboutController', function($scope) {
    initFixedSlide();
}).controller('contactController', function($scope) {
    initFixedSlide();
}).controller('thanksController', function($scope) {
    initFixedSlide();
}).controller('postController', function($scope) {
    initFixedSlide();
}).controller('registerController', function($scope, $http, $location) {
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