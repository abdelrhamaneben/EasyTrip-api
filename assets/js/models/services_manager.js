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
        if(item.payed == true ){
            $('#c-part').append($(
        "<div class=\"card\" id=\"service_" + item.id_service + "\">"
            + "<div class=\"thumbnail payed\">"
                + "<div class=\"caption row\">"
                    + "<div class=\"col-md-6\"><img class='img img-responsive img-rounded' src='" + item.img + "' /></div>"
                    + "<div class=\"col-md-6\"><h3>" + item.name + "</h3>"
                    + "<p>" + item.description + "</p>"
                    + "<p>Price : <b>" + item.price + " €</b></p>"
		      + "<div ><a style=\"float: right; width: 15%; height: 15%;\" href=\"https://plus.google.com/share?url=youtube.com\" onclick=\"javascript:window.open(this.href,"
		      + "'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img "
		          + "src=\"https://www.gstatic.com/images/icons/gplus-32.png\" alt=\"Share on Google+\"/></a>"
                +"<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://fil.univ-lille1.fr/\">Tweet</a></div>"
                 + "<div class='float:left;'><button type=\"button\" class=\"btn btn-default\" id=\"showOnMap\" onclick='services_manager.click(\"service_" + item.id_service + "\");'>See on map</button></div><div class=\"col-md-2 \"></div></div>"  
               + "<button type=\"button\" class=\"btn btn-default\" id=\"Review\" onclick='review(\"service_"+item.id_service+"\")'>Reviews</button></div>"  
            + "</div>"
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
                + "<p> <a style=\"float: right; width: 8%; height: 8%;\" href=\"https://plus.google.com/share?url=youtube.com\" onclick=\"javascript:window.open(this.href,"
                + "'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;\"><img "
                + "src=\"https://www.gstatic.com/images/icons/gplus-32.png\" alt=\"Share on Google+\"/></a>"
                +"<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-url=\"http://fil.univ-lille1.fr/\">Tweet</a> </p>"
               + "</div>"
               + "</div>"
               + "</div>"));
        }
     }
        });
       twttr.widgets.load();
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
 data : []
    
};
