var services_manager = {
 build : function () {
 	$('#c-part').html('');
 	$.each(this.data, function(i, item) {
 		$('#c-part').append($("<div class=\"card\" id=\"service_" + item.id_service + "\">"
           + " <div class=\"thumbnail\">"
           + "<div class=\"caption\">"
           + "<h3>" + item.name + "</h3>"
           + "<p>" + item.description + "</p>"
           + "<p><a onclick='services_manager.click(\"service_" + item.id_service + "\");' class=\"btn btn-primary\" role=\"button\">Afficher</a></p>"
           + "</div>"
           + "</div>"
           + "</div>"));
 		});
 },
 click: function (id_service) {
    for(var i = 0;i < this.data.length;i++) {
        if("service_" + this.data[i].id_service == id_service){
            this.onClickService(this.data[i]);
            break;
        }
    }
 },
 onClickService : function (service) {

 },
 load : function (rectangle,activities) {
   /* $.ajax({
              method: "POST",
              url: "http://localhost:1337/service/search",
              async : false,
              data : {
                'rectangle' : rectangle,
                'activities' : activities
              },
              success : function (data) {
                if(data){
                    this.data = data;
                    this.build(this.data);
                }
              },
              error : function () {
                alert("Impossible d'accéder au serveur EasyTrip");
              }
            });*/
    this.build(this.data);
 }
 ,
 // Temporal data
 data : [
     {
        "activity": {
            "name": "Festival",
            "id_activity": 1
        },
        "name": "Les paradis artificiels",
        "description": "L'immanquable festival de musiques tendances a lieu chaque année au printemps",
        "tel": "0678545676",
        "longitude": "3.0750470000000405",
        "latitude": "50.629601",
        "id_service": 1
    },
    {
        "activity": {
            "name": "Festival",
            "id_activity": 1
        },
        "name": "Wazemmes l'Accordéon",
        "description": "Le festival Wazemmes l'Accordéon a su redonner ses lettres de noblesse au piano à bretelles",
        "tel": "0678545676",
        "longitude": "3.0528128999999353",
        "latitude": "50.6265093",
        "id_service": 2
    },
    {
        "activity": {
            "name": "Festival",
            "id_activity": 1
        },
        "name": "Clef de soleil",
        "description": "Chaque été, le Festival Clef de Soleil ouvre les portes de la musique classique aux lillois",
        "tel": "0678545676",
        "longitude": "3.004167499999994",
        "latitude": "50.5621705",
        "id_service": 3
    },
    {
        "activity": {
            "name": "Opéra",
            "id_activity": 3
        },
        "name": "Opéra de lille",
        "description": "Opéra de lille",
        "tel": "0678545676",
        "longitude": "3.065281300000038",
        "latitude": "50.6376666",
        "id_service": 4
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "MusicaLille",
        "description": "École de musique",
        "tel": "0678545676",
        "longitude": "3.0609351000000515",
        "latitude": "50.622411",
        "id_service": 5
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "Yamaha Music School Lille",
        "description": "École de musique",
        "tel": "0678545676",
        "longitude": "3.0680476",
        "latitude": "50.627104",
        "id_service": 6
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "Music Act",
        "description": "École de musique",
        "tel": "0678545676",
        "longitude": "3.048065299999962",
        "latitude": "50.6299156",
        "id_service": 7
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "Any One Can Play Guitar",
        "description": "Cours de guitare",
        "tel": "0678545676",
        "longitude": "3.059176100000059",
        "latitude": "50.6474069",
        "id_service": 8
    }
]
};
