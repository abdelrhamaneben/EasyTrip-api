/**
* This object manage the google map on the view
*/
var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]}];

var map_manager = {

	// la matrice donne l'ecart en degré entre le centre de la map et les bordures selon le Zoom
	matrice : {
	21 : { lat :0.001651    , lng:0.0039855 },
	20 : { lat :0.003302    , lng:0.007971 },
	19 : { lat :0.006604    , lng:0.015942 },
	18 : { lat :0.013208    , lng:0.031884 },
	17 : { lat :0.026416    , lng:0.063768 },
	16 : { lat :0.052832    , lng:0.127536 },
	15 : { lat :0.105664    , lng:0.255072 },
	14 : { lat :0.211328    , lng:0.510144 },
	13 : { lat :0.422656    , lng:1.020288 },
	12 : { lat :0.845312    , lng:2.040576 },
	11 : { lat :1.690624    , lng:4.081152 },
	10 : { lat :3.381248    , lng:8.162304 },
	9  : { lat :6.762496    , lng:16.324608 },
	8  : { lat :13.524992   , lng:32.649216 },
	7  : { lat :27.049984   , lng:65.298432 },
	6  : { lat :54.099968   , lng:130.596864 },
	5  : { lat :108.199936  , lng:261.193728 },
	4  : { lat :216.399872  , lng:522.387456 },
	3  : { lat :432.799744  , lng:1044.774912 },
	2  : { lat :865.599488  , lng:2089.549824 },
	1  : { lat :1731.198976 , lng:4179.099648 },
	0  : { lat :3462.397952 , lng:8358.199296 }
	},
	// PARAMETERS
	markers : [],
	map : null,
	resized : false,
	infowindows : [],
	// Initialisation Google map
	init: function (longitude , latitude) {
		this.markers = [];
		this.map = new google.maps.Map(document.getElementById("map_canvas"), {
        	zoom: 8,
        	center: new google.maps.LatLng(longitude, latitude),
        	mapTypeId: google.maps.MapTypeId.ROADMAP,
        	styles: styles,streetViewControl:false
    	});
	},
	// this function add a marker to google map
	addMarker: function (service) {
		var optionMarker = {
		    position: new google.maps.LatLng(service.latitude,service.longitude),
		    map: this.map,
		    icon : "images/dot-grey.png"
		};
		if(service.payed == 1) {
			optionMarker.icon = "images/dot-red.png";
		}
		var marker = new google.maps.Marker(optionMarker);
		
		var cc = null;
		if(service.payed == 1) {
			cc = "<div><h3>" + service.name + "</h3><div><center><img style='width:150px;height:150px;' src='/images/" + service.img + "' /></center></div><div><p>" + service.description + "<p/><p>Address : <b>" +  service.address + "</b></p><p>Tel : <b>" +  service.tel + "</b></p></div></div>";
		}
		else {
			cc = "<div><h3>" + service.name + "</h3><p>" + service.description + "<p/><br><em>Address : <b>" +  service.address + "</b></em><br><em>Tel : <b>" +  service.tel + "</b></em></div>";
		}
		var infowindow = new google.maps.InfoWindow({

		    content: cc
		});
		this.infowindows.push(infowindow);
		marker.addListener('click', function() {
			map_manager.closeInfoWindow();
			infowindow.open(this.map, marker);
			map_manager.clickOnMarker(service);
		});
		this.markers.push({'marker' : marker, 'service' : service});
	},
	// clean all makers
	clearMarker : function () {
		for (var i = 0; i < this.markers.length; i++) {
			this.markers[i].marker.setMap(null);
		}
	},
	closeInfoWindow : function (){
		for (var i = 0; i < this.infowindows.length; i++) {
			this.infowindows[i].close();
		}
	},
	//adapte le centre et le zoom selon les markers 
	resize: function () {
		this.resized = true;
		var bounds 		= new google.maps.LatLngBounds();
		for (var i = 0; i < this.markers.length; i++) {
			var service = this.markers[i].service;
			bounds.extend(new google.maps.LatLng(service.latitude,service.longitude));
		}
		this.map.fitBounds(bounds);
		this.resized = false;
	},
	// retourne le rectangle de coordonnées de la map
	getRectangle : function ( ) {
		var zoom 		= this.map.getZoom();
		var coordinate 	= this.map.getCenter();
		
		var ecartLat 	= this.matrice[zoom].lat;
		var ecartLng 	= this.matrice[zoom].lng;
		var centerLat 	= coordinate.lat();
		var centerLng 	= coordinate.lng();
		var rectangle 	= {
						topright : { lng : centerLng + ecartLng, lat : centerLat + ecartLat},
						topleft : { lng : centerLng - ecartLng, lat : centerLat + ecartLat},
						bottomright : { lng : centerLng + ecartLng, lat : centerLat - ecartLat},
						bottomleft : { lng : centerLng - ecartLng, lat : centerLat - ecartLat}
					};
		return rectangle;
	},
	// définir l'action sur le mouvement de la carte
	onMapChanged : function (callback) {
		//this.map.addListener('center_changed', callback);
		this.map.addListener('bounds_changed', callback);
	},
	loadMarker : function (data){
		for (var i = 0; i < data.length; i++) {
			this.addMarker(data[i]);
		}
	},
	displayService : function (service) {
		for (var i = 0; i < this.markers.length; i++) {
			if(this.markers[i].service.id_service == service.id_service) {
				google.maps.event.trigger(this.markers[i].marker, 'click');
			}
		}
	},
	// to define, call to add action on click on marker
	clickOnMarker : function (service) { }
};
