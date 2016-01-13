var services_manager = {
 build : function () {
    $('#c-part').html('');
    $.each(this.data, function(i, item) {
        var priceMin = $('#priceMin').val();
        var priceMax = $('#priceMax').val();
        var capacity = $('#capacity').val();
        var service = $('#service').val().toUpperCase();
        var dateStart = new Date($('#dateStart').val());
        var dateEnd = new Date($('#dateEnd').val());
        var dateFrom = new Date(item.fromDate);
        var dateTo = new Date(item.toDate);

//        Filters
        if((capacity>=item.minCapacity && capacity<=item.maxCapacity || capacity =='') &&
          (item.name.toUpperCase().indexOf(service) != -1 || service=='') &&
          ((item.price>= priceMin && item.price<=priceMax)  || (priceMin=='' && item.price<=priceMax) || (item.price>= priceMin && priceMax=='')
            || (priceMin=='' && priceMax=='')) &&
          ((dateStart >= dateFrom && (dateEnd<=dateTo || item.toDate=='')) || (dateStart >= dateFrom && $('#dateEnd').val()=='') ||
           ((dateEnd<=dateTo || item.toDate=='') && $('#dateStart').val()=='' ) ||
           ($('#dateEnd').val()=='' && $('#dateStart').val()==''))
          ){
        if(item.payed == 1 ){
            $('#c-part').append($("<div class=\"card\" id=\"service_" + item.id_service + "\">"
               + "<div class=\"thumbnail payed\">"
               + "<div class=\"caption row\">"
               + "<div class=\"col-md-6\"><img class='img img-responsive img-rounded' src='/images/" + item.img + "' /></div>"
               + "<div class=\"col-md-6\"><h3>" + item.name + "</h3>"
               + "<p>" + item.description + "</p>"
               + "<p>Price : <b>" + item.price + " €</b></p>"
               + "<p class='text-right'></p>"
               + "<div class=\row\"><div class=\"col-md-3\"><button type=\"button\" class=\"btn btn-default\" id=\"showOnMap\" onclick='services_manager.click(\"service_" + item.id_service + "\");'>See on map</button></div><div class=\"col-md-3 col-md-offset-4\">"
               +"<button type=\"button\" class=\"btn btn-default\" id=\"Review\" onclick='review(\"service_"+item.id_service+"\")'>Reviews</button></div>"
               +"</div>"                                 
               
               +"</div>"
               + "</div>"
               + "</div>"
               + "</div>"));
        }else {
            $('#c-part').append($("<div class=\"card\"  id=\"service_" + item.id_service + "\">"
               + " <div class=\"thumbnail\">"
               + "<div class=\"caption\">"
               + "<h3>" + item.name + "</h3>"
               + "<p>" + item.description + "</p>"
                + "<p> Address : " + item.address + "</p>"
                + "<p>Price : <b>" + item.price + " €</b></p>"
               + "<p class='text-right'></p>"
               + "<div class=\row\"><div class=\"col-md-2 col-md-offset-6\">"                      
               + "<button type=\"button\" class=\"btn btn-default\" id=\"showOnMap\" onclick='services_manager.click(\"service_" + item.id_service + "\");'>See on map</button></div><div class=\"col-md-2 \"></div></div>"  
               + "<button type=\"button\" class=\"btn btn-default\" id=\"Review\" onclick='review(\"service_"+item.id_service+"\")'>Reviews</button>"  
                                  
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

popup : function(idService){
    var item = this.data[1];
    var html = "";
    
    if(item.payed == 1 ){
            html= html+"<div class=\"card\" id=\"service_" + item.id_service + "\">"
               + "<div class=\"thumbnail payed\">"
               + "<div class=\"caption row\">"
               + "<div class=\"col-md-6\"><img class='img img-responsive img-rounded' src='/images/" + item.img + "' /></div>"
               + "<div class=\"col-md-6\"><h3>" + item.name + "</h3>"
               + "<p>" + item.description + "</p>"
               + "<p>Price : <b>" + item.price + " €</b></p>"
               + "<p class='text-right'></p>"
               +"</div>"
               + "</div>"
               + "</div>"
               + "</div>";
        }else {
            html= html+"<div class=\"card\"  id=\"service_" + item.id_service + "\">"
               + " <div class=\"thumbnail\">"
               + "<div class=\"caption\">"
               + "<h3>" + item.name + "</h3>"
               + "<p>" + item.description + "</p>"
                + "<p> Address : " + item.address + "</p>"
                + "<p>Price : <b>" + item.price + " €</b></p>"
               + "<p class='text-right'></p>"
               + "</div>"
               + "</div>"
               + "</div>";
        }
    
    html= html+"<table class=\"table table-hover \"></tbody>";
    
    $.each(this.questions, function(i, item) {
        html = html + "<tr><td><h5>"+item.question+"</h5></td><td>"+
            "<div class=\"cont\"><div class=\"stars\"><form action=\"\">"+
            "<input class=\"star star-5\" id=\""+item.id+"-5\" type=\"radio\" name=\"star\"/>"+
            "<label class=\"star star-5\" for=\""+item.id+"-5\"></label>"+
            "<input class=\"star star-4\" id=\""+item.id+"-4\" type=\"radio\" name=\"star\"/>"+
            "<label class=\"star star-4\" for=\""+item.id+"-4\"></label>"+
            "<input class=\"star star-3\" id=\""+item.id+"-3\" type=\"radio\" name=\"star\"/>"+
            "<label class=\"star star-3\" for=\""+item.id+"-3\"></label>"+
            "<input class=\"star star-2\" id=\""+item.id+"-2\" type=\"radio\" name=\"star\"/>"+
            "<label class=\"star star-2\" for=\""+item.id+"-2\"></label>"+
            "<input class=\"star star-1\" id=\""+item.id+"-1\" type=\"radio\" name=\"star\"/>"+
            "<label class=\"star star-1\" for=\""+item.id+"-1\"></label>"+
            "</form></div></td></tr>";        
    });
    html = html + "</tbody></table>"+
        "<div><div class=\"form-group\"><h5>Comment</h5>"+
        "<textarea class=\"form-control\" rows=\"2\" id=\"comment\"></textarea>"+
        "</div>";    
    return html;
},
 // Temporal data questions
 questions : [
     {
         "question": "General rate",
         "id":"1"
     },
     {
         "question": "Quality of service",
         "id":"2"
     },
     {
         "question": "Pertinence",
         "id":"3"
     },
     {
         "question": "Price",
         "id":"4"
     }
 ],
 // Temporal data
 data : [
     {
        "activity": {
            "name": "Festival",
            "id_activity": 1
        },
        "name": "Les paradis artificiels",
        "description": "L'immanquable festival de musiques tendances a lieu chaque année au printemps",
        "tel": "0678545676",
         "price" : 76,
        "longitude": "3.0750470000000405",
        "address" : "5 rue solferino Lille",
        "latitude": "50.629601",
        "id_service": 1,
         "price":200,
         "minCapacity":1,
         "maxCapacity":100,
        "payed":1,
        "img":"festival.png",
         "fromDate":"2014-01-01",
         "toDate":"2020-01-01",
         "email":'email@enterprise.com',
         "website":'www.nameEnterprice.com'
    },
    {
        "activity": {
            "name": "Festival",
            "id_activity": 1
        },
        "name": "Wazemmes l'Accordéon",
        "description": "Le festival Wazemmes l'Accordéon a su redonner ses lettres de noblesse au piano à bretelles",
        "tel": "0678545676",
         "price" : 53,
        "longitude": "3.0528128999999353",
        "address" : "5 rue solferino Lille",
        "latitude": "50.6265093",
        "id_service": 2,
        "payed":1,
        "img":"accordeon.jpg",
        "fromDate":"2015-01-01",
         "toDate":"2016-01-01",
         "email":'email@enterprise.com',
         "website":'www.nameEnterprice.com',
         "minCapacity":1,
         "maxCapacity":20,
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
        "fromDate":"2016-01-01",
         "toDate":"",
         "email":'email@enterprise.com',
         "website":'www.nameEnterprice.com',
        "minCapacity":1,
         "maxCapacity":200,
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
        "fromDate":"2016-03-01",
         "toDate":"2016-05-01",
        "minCapacity":1,
         "maxCapacity":80,
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
        "fromDate":"2014-01-01",
         "toDate":"",
         "email":'email@enterprise.com',
         "website":'www.nameEnterprice.com',
        "minCapacity":1,
         "maxCapacity":15,
    },
    {
        "activity": {
            "name": "Apprendre",
            "id_activity": 4
        },
        "name": "Yamaha Music School Lille",
        "description": "École de musique",
        "tel": "0678545676",
         "price" : 21,
        "longitude": "3.0680476",
        "address" : "5 rue solferino Lille",
        "latitude": "50.627104",
        "id_service": 6,
        "payed":0,
        "img":"",
        "fromDate":"2015-01-01",
         "toDate":"2015-11-30",
         "email":'email@enterprise.com',
         "website":'www.nameEnterprice.com',
        "minCapacity":1,
         "maxCapacity":20,
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
        "fromDate":"2014-01-01",
         "toDate":"2020-01-01",
         "email":'email@enterprise.com',
         "website":'www.nameEnterprice.com',
        "minCapacity":5,
         "maxCapacity":25,
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
        "fromDate":"2014-01-01",
         "toDate":"2020-01-01",
         "email":'email@enterprise.com',
         "website":'www.nameEnterprice.com',
        "minCapacity":2,
         "maxCapacity":12,
    }
]
    
};
