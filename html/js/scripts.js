
$(document).ready(function() {
	// Countdown
    const countdownDate = new Date('11/15/2024 00:00:00').getTime();
    const offset = +0 * 60 * 60 * 1000; // Convert offset to milliseconds (if using hours)
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now + offset;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.countdown__days .count').text(days < 10 ? '0' + days : days);
        $('.countdown__hours .count').text(hours < 10 ? '0' + hours : hours);
        $('.countdown__minutes .count').text(minutes < 10 ? '0' + minutes : minutes);
        $('.countdown__seconds .count').text(seconds < 10 ? '0' + seconds : seconds);

        if (distance < 0) {
            clearInterval(countdownInterval);
            $('.countdown').html('<p>Chegou o grande dia!</p>');
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
  // Scroll to ID  
  function scrollToId(str) {
        $(str + '[href*="#"]').on('click', function(e) {
            e.preventDefault()
    
            $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top,
                },
                500,
                'linear'
            )
        })
    }

    //Scroll to ID init
    scrollToId('.header__menu-link');
    scrollToId('.rvsp-btn');

  //To top
  
   (function scrollTop() {

      const btn = $('.to-top');

      $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
              btn.fadeIn();
          } else {
              btn.fadeOut();
          }
      });

      btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
      });

  }());

  //Mobile menu
    (function mobileMenu() {

        const   openBtn  = $('.mobile-menu-btn'),
                closeBtn = $('.mobile-menu__close'),
                menu     = $('.mobile-menu'),
                navList  = $('.mobile-navigation__list');

        
        openBtn.on('click', function(e) {

            e.preventDefault();
            menu.fadeIn(300);

        });

        closeBtn.on('click', function(e) {

            e.preventDefault();
            menu.fadeOut(300);

        });

        $(document).keypress(function(e) {

            if(e.which == 27)
                menu.fadeOut(300)

        });

        navList.on('click', function(e) {

            let target = e.target;

            if(target.tagName === 'A') {
                menu.fadeOut(300);
                setTimeout( scrollToId('.mobile-navigation__link'), 500);
            }
        });
    }());

 //Dropdown
  (function selectDropdown() {
      const openBtn = $('.select--clicked');
      const dropdown = $('.select-dropdown');
      const label = $('.select__label');
      const span = $('.dropdown__select');

      span.on('click', function() {
          if($(window).width() <= 1000) {
            label.animate({
              position: "absolute",
              top: "-14px",
              fontSize: "12px",
              lightHeight: "16px",
              opacity: "0.7"
            });
          } else {
              label.animate({
              position: "absolute",
              top: "16px",
              fontSize: "12px",
              lightHeight: "16px",
              opacity: "0.7"
            });
          }

          $('.selected__item').html($(this).text());
      });

      openBtn.on('click', function() {
          dropdown.slideToggle('200');
      });

  }());

  $('body').bootstrapMaterialDesign();

	//Story slider
	$('.story__slider').slick({
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev arrow-left--colored"></button>',
		nextArrow: '<button type="button" class="slick-next arrow-right--colored"></button>'
	});

  //Fancybox
  // $(".fancy").fancybox({
  //   'hideOnContentClick': true
  //   });

	//Photo slider
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        1450: {
          slidesPerView: 6,
          spaceBetween: 32,
        },
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      renderFraction: function (currentClass, totalClass) {
        return `<span class="${0 + currentClass} "></span>' +
                ' / ' +
                '<span class="${0 + totalClass} "></span>`;
      }
    });

    $('.swiper-slide-active').siblings('.swiper-slide').css('margin-right', '32px');

    // Inicializa o mapa
    (function initeMap() {
        let ceremonyMap,
            receptionMap;

        // Atualiza o mapa quando há uma troca de estilo
        $('.styleswitch').on('click', function () {
            $('.map').empty();
            init();
        });

        ymaps.ready(init);

        function init() {

            // Define o ícone padrão baseado no tema do site
            let defaultIcon = 'img/map/icon--' + $('head link[id="skins"]').attr('data-color') + '.svg';
            console.log(defaultIcon);

            // Inicialização do mapa da cerimônia
            ceremonyMap = new ymaps.Map('address__map--ceremony', {
                center: [-11.0579181, -37.10935], // Coordenadas centralizadas no Espaço Villa Ricca
                zoom: 17, // Zoom alto para ver detalhes das ruas
                controls: ['zoomControl', 'typeSelector', 'geolocationControl', 'trafficControl'] // Controles para navegação e detalhes
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Layout do conteúdo do ícone personalizado
            let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            );

            // Personalização do placemark (marcador) para Espaço Villa Ricca
            let myPlacemarkCeremony = new ymaps.Placemark([-11.0579181, -37.10935], { // Certifique-se de que estas são as coordenadas exatas do local
                hintContent: 'Espaço Villa Ricca', // Dica ao passar o mouse
                balloonContent: '<strong>Espaço Villa Ricca</strong><br>Endereço completo e detalhes aqui.' // Conteúdo do balão
            }, {
                iconLayout: 'default#image',
                iconImageHref: defaultIcon, // Usando ícone padrão, altere se necessário
                iconImageSize: [63, 83], // Tamanho do ícone
                iconImageOffset: [-31, -83] // Ajuste para centralizar o ícone
            });

            // Aplicar filtro em escala de cinza ao fundo do mapa da cerimônia
            ceremonyMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';

            // Adicionar o placemark ao mapa da cerimônia
            ceremonyMap.geoObjects.add(myPlacemarkCeremony);

            // Inicialização do mapa da recepção
            receptionMap = new ymaps.Map('address__map--reception', {
                center: [40.760873, -73.976398], // Ajuste as coordenadas para o local exato da recepção
                zoom: 17, // Zoom alto para ver detalhes das ruas
                controls: ['zoomControl', 'typeSelector', 'geolocationControl', 'trafficControl'] // Adiciona controles para navegação e detalhes
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Personalização do placemark (marcador) para o local da recepção
            let myPlacemarkReception = new ymaps.Placemark(receptionMap.getCenter(), {
                hintContent: 'Local da Recepção', // Alterado para indicar o local exato
                balloonContent: '<strong>Local da Recepção</strong><br>Endereço completo e detalhes aqui.' // Detalhes do balão
            }, {
                iconLayout: 'default#image',
                iconImageHref: defaultIcon, // Usando ícone padrão
                iconImageSize: [63, 83],
                iconImageOffset: [-31, -83] // Ajuste para centralizar o ícone
            });

            // Aplicar filtro em escala de cinza ao fundo do mapa da recepção
            receptionMap.panes.get('ground').getElement().style.filter = 'grayscale(80%)';

            // Adicionar o placemark ao mapa da recepção
            receptionMap.geoObjects.add(myPlacemarkReception);
        }

    }());



});