var services_manager = {
 build : function () {
 	$('#c-part').html('');
 	$.each(this.data, function(i, item) {
        
        var priceMin = $('#priceMin').val();
        var priceMax = $('#priceMax').val();
        var capacity = $('#capacity').val();
        var service = $('#service').val();
        var dateStart = new Date($('#dateStart').val());
        var dateEnd = new Date($('#dateEnd').val());
        var dateFrom = new Date(item.fromDate);
        var dateTo = new Date(item.toDate);
        
        if((capacity>=item.minCapacity && capacity<=item.maxCapacity || capacity =='') &&
          (item.name.indexOf(service) != -1 || service=='') &&
          ((item.price>= priceMin && item.price<=priceMax)  || (priceMin=='' && item.price<=priceMax) || (item.price>= priceMin && priceMax=='')
            || (priceMin=='' && priceMax=='')) &&
          ((dateStart >= dateFrom && (dateEnd<=dateTo || item.toDate=='')) || (dateStart >= dateFrom && $('#dateEnd').val()=='') || 
           ((dateEnd<=dateTo || item.toDate=='') && $('#dateStart').val()=='') || ($('#dateEnd').val()=='' && $('#dateStart').val()==''))
          ){
            
            if(item.payed == 1 ){
                console.log(item.img);
                $('#c-part').append($("<div class=\"card\" id=\"service_" + item.id_service + "\">"
                   + "<div class=\"thumbnail\">"
                   + "<div class=\"caption\">"
                   + "<div class=\"col-md-6\"><img class='img img-responsive img-rounded' src='/images/" + item.img + "' /></div>"
                   + "<h3>" + item.name + "</h3>"
                   + "<p>" + item.description + "</p>"
                   + "<p><a onclick='services_manager.click(\"service_" + item.id_service + "\");' class=\"btn btn-primary\" role=\"button\">Show</a></p>"
                   + "</div>"
                   + "</div>"
                   + "</div>"));
            }else {
                $('#c-part').append($("<div class=\"card\" id=\"service_" + item.id_service + "\">"
                   + " <div class=\"thumbnail\">"
                   + "<div class=\"caption\">"
                   + "<h3>" + item.name + "</h3>"
                   + "<p>" + item.description + "</p>"
                    + "<p> Address : " + item.address + "</p>"
                   + "<p><a onclick='services_manager.click(\"service_" + item.id_service + "\");' class=\"btn btn-primary\" role=\"button\">Show</a></p>"
                   + "</div>"
                   + "</div>"
                   + "</div>"));
            }
        }       
        
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
 } ,
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
         "price" : 76,
        "longitude": "3.0750470000000405",
        "address" : "5 rue solferino Lille",
        "latitude": "50.629601",
        "id_service": 1,                
        "payed":1,
        "img":"festival.png",
         "price":200,
         "minCapacity":1,
         "maxCapacity":10,
         "fromDate":"2014-01-01",
         "toDate":"2020-01-01"
    },
    {
        "activity": {
            "name": "Festival",
            "id_activity": 1
        },
        "name": "Wazemmes l'Accordéon",
        "description": "Le festival Wazemmes l'Accordéon a su redonner ses lettres de noblesse au piano à bretelles",
        "tel": "0678545676",
         "price" : 53,
        "longitude": "3.0528128999999353",
        "address" : "5 rue solferino Lille",
        "latitude": "50.6265093",
        "id_service": 2,
        "payed":1,
        "img":"accordeon.jpg",
         "price":300,
         "minCapacity":1,
         "maxCapacity":5,
         "fromDate":"2015-01-20",
         "toDate":"2016-02-01"
    },
    {
        "activity": {
            "name": "Festival",
            "id_activity": 1
        },
        "name": "Clef de soleil",
        "description": "Chaque été, le Festival ouvre les portes de la musique classique",
        "tel": "0678545676",
        "price" : 34,
        "longitude": "3.004167499999994",
        "address" : "5 rue solferino Lille",
        "latitude": "50.5621705",
        "id_service": 3,
        "payed":1,
        "img":"soleil.jpg",
         "price":250,
         "minCapacity":1,
         "maxCapacity":1000,
         "fromDate":"2016-06-20",
         "toDate":"2016-06-21"
    },
    {
        "activity": {
            "name": "Opéra",
            "id_activity": 3
        },
        "name": "Opéra de lille",
        "description": "Opéra de lille",
        "tel": "0678545676",
        "price" : 54,
        "longitude": "3.065281300000038",
        "address" : "5 rue solferino Lille",
        "latitude": "50.6376666",
        "id_service": 4,
        "payed":0,
        "img":"",
         "price":90,
         "minCapacity":1,
         "maxCapacity":100,
         "fromDate":"2016-01-31",
         "toDate":""
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "MusicaLille",
        "description": "École de musique",
        "tel": "0678545676",
         "price" : 55,
        "longitude": "3.0609351000000515",
        "address" : "5 rue solferino Lille",
        "latitude": "50.622411",
        "id_service": 5,
        "payed":0,
        "img":"payed.png",
         "price":60,
         "minCapacity":1,
         "maxCapacity":200,
         "fromDate":"2016-03-14",
         "toDate":"2016-11-30"
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "Yamaha Music School Lille",
        "description": "École de musique",
        "tel": "0678545676",
         "price" : 21,
        "longitude": "3.0680476",
        "address" : "5 rue solferino Lille",
        "latitude": "50.627104",
        "id_service": 6,
        "payed":0,
        "img":"",
         "price":80,
         "minCapacity":1,
         "maxCapacity":15,
         "fromDate":"2015-01-01",
         "toDate":""
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "Music Act",
        "description": "École de musique",
        "tel": "0678545676",
         "price" : 12,
        "longitude": "3.048065299999962",
        "address" : "5 rue solferino Lille",
        "latitude": "50.6299156",
        "id_service": 7,
        "payed":0,
        "img":"",
         "price":100,
         "minCapacity":1,
         "maxCapacity":20,
         "fromDate":"2015-05-05",
         "toDate":""
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "Any One Can Play Guitar",
        "description": "Cours de guitare",
        "tel": "0678545676",
         "price" : 34,
        "longitude": "3.059176100000059",
        "address" : "5 rue solferino Lille",
        "latitude": "50.6474069",
        "id_service": 8,
        "payed":0,
        "img":"",
         "price":70,
         "minCapacity":1,
         "maxCapacity":8,
         "fromDate":"2015-03-01",
         "toDate":"2015-11-30"
    }
]
};
