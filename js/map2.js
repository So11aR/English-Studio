
// Функция initMap которая отрисует карту на странице
function initMap() {
	
	// Определяем клиент, чтобы после отключить перетаскивание карты на смартфонах.  Часть 1.
	var isDraggable;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isDraggable = false;
	} else {
		isDraggable = true;
	}

	// Определяем точки которые хотим показать на карте
	//var spb = {lat:60.077310, lng: 30.301602};
	var spb = {lat:59.905510, lng: 30.314779};
	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	myMap = new google.maps.Map(document.getElementById('d2'), {
		// При создании объекта карты необходимо указать его свойства
		
		// center - определяем точку на которой карта будет центрироваться
		center: spb,
		
		// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
		// zoom: 12,
		zoom: 11,

		// Дополнительные настройки

		// Удалить элементы управления картой
		// disableDefaultUI: true,

		// Запретить увеличение карты по скроллу
		// scrollwheel: false,

		// Отключить перетаскивание для смартфонов. Часть 2.
		// draggable: isDraggable,


		// Добавляем свои стили для отображения карты
		// Скины брать здесь: https://snazzymaps.com/
		styles: 
[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]


	}); // map


	/* • • • • • Маркер и описание № 1 • • • • • */

	// Создаем маркер на карте
	var marker = {lat:59.905510, lng: 30.314779};
	var markerifc = new google.maps.Marker({

		// Определяем позицию маркера

	    position: marker,

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    map: myMap,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    title: 'Студия английского языка',

	    // Укажем свою иконку для маркера
	    icon: 'img/pin-red.png'
	});

	// Создаем наполнение для информационного окна
	var contentStringifc = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading" style="font-size: 16px;">Студия английского языка</h1>'+
	      '<div id="bodyContent">'+
	      '<p>г.Санкт-Петербург, <br>' +
	      'московский проспект 73к5</p>'+
	      '</div>'+
	      '</div>';

	// Создаем информационное окно
	var infowindowifc = new google.maps.InfoWindow({
		content: contentStringifc,
		maxWidth: 400
	});

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	markerifc.addListener('click', function() {
		infowindowifc.open(myMap, markerifc);
	});

}





	




