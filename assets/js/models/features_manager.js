var features_manager = {
    
initSummary : function(id_srvice){
    var result="";
    $.ajax({
              method: "GET",
              url: "http://localhost:1337/judgement/",
              async: false,
              data: {
                        service : id_srvice
              },
              success : function (data) {
                if(data){
                   console.log(data);
                    result = this.summary(data);
                }
              },
              error : function () {
                alert("Impossible d'accéder au serveur EasyTrip");
              },
        
            summary : function (data) {
                var html="";
                var global=0;
                var score1=0;
                var score2=0;
                var score3=0;
                jQuery.each(data, function(index, item) {
                    global = global+item.gobal_score;
                    score1 = score1+item.score1;
                    score2 = score2+item.score2;
                    score3 = score3+item.score3;
                });
                
                //global
                html+="<tr><td>General</td>"+
                "<td>";
                html+= this.value(Math.ceil(global/data.length));
                html+="</td></tr>";
                //1
                html+="<tr><td>1</td>"+
                "<td>";
                html+= this.value(Math.ceil(score1/data.length));
                html+="</td></tr>";
                //2
                html+="<tr><td>2</td>"+
                "<td>";
                html+= this.value(Math.ceil(score2/data.length));
                html+="</td></tr>";
                //3
                html+="<tr><td>3</td>"+
                "<td>";
                html+= this.value(Math.ceil(score3/data.length));
                html+="</td></tr>";
                
                return html;
            },
            value : function(score){
                var html="";
                alert(score);
                if(score==0){
                    html+="<i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/>"+
                        "<i class=\"fa fa-star-o\"/>";
                }
                if(score==1){
                    html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/>"+
                        "<i class=\"fa fa-star-o\"/>";
                }
                if(score==2){
                    html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/>"+
                        "<i class=\"fa fa-star-o\"/>";
                }
                if(score==3){
                    html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star-o\"/>"+
                        "<i class=\"fa fa-star-o\"/>";
                }
                if(score==4){
                    html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/>"+
                        "<i class=\"fa fa-star-o\"/>";
                }
                if(score>=5){
                    html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/>"+
                        "<i class=\"fa fa-star\"/>";
                }
                return html;
            }
        }); 
    return result;
    },
    
    
popup : function(idService){   
    var result ="";
    $.ajax({
          method: "GET",
          url: "http://localhost:1337/service/"+idService, 
          async: false,
          success : function (data) {
            if(data){
                result = this.reviewInfo(data);
            }
          },
          error : function () {
            alert("Impossible d'accéder au serveur EasyTrip");;
          },
          reviewInfo : function(data) {
                    var html = "";
                    if(data.premium ){
                            html= html+"<div class=\"card\" id=\"service_" + data.id_service + "\">"
                               + "<div class=\"thumbnail payed\">"
                               + "<div class=\"caption row\">"
                               + "<div class=\"col-md-6\"><img class='img img-responsive img-rounded' src='/images/" + data.activities[0].image + "' /></div>"
                               + "<div class=\"col-md-6\"><h3>" + data.activities[0].name + "</h3>"
                               + "<p>" + data.activities[0].description + "</p>"
                               + "<p>Price : <b> €</b></p>"
                               + "<p class='text-right'></p>"
                               +"</div>"
                               + "</div>"
                               + "</div>"
                               + "</div>";
                        }else {
                            html= html+"<div class=\"card\"  id=\"service_" + data.id_service + "\">"
                               + " <div class=\"thumbnail\">"
                               + "<div class=\"caption\">"
                               + "<h3>" + data.activities[0].name + "</h3>"
                               + "<p>" + data.activities[0].description + "</p>"
                                + "<p> Address : " +data.address.str_nbr+" "+data.address.str_name+","+data.address.city+"</p>"
                                + "<p>Price : <b> €</b></p>"
                               + "<p class='text-right'></p>"
                               + "</div>"
                               + "</div>"
                               + "</div>";
                        }

                    html= html+"<table class=\"table table-hover \"></tbody>";
                    
                    //General
                        html = html + "<tr><td><h5>General rate</h5></td><td>"+
                            "<div class=\"cont\"><div class=\"stars\"><form action=\"\">"+
                            "<input class=\"star star-5\" id=\"1-5\" type=\"radio\" onClick=\"starClicked(1,5)\" name=\"star\"/>"+ 
                            "<label class=\"star star-5\" for=\"1-5\"></label>"+
                            "<input class=\"star star-4\" id=\"1-4\" type=\"radio\" onClick=\"starClicked(1,4)\" name=\"star\"/>"+ 
                            "<label class=\"star star-4\" for=\"1-4\"></label>"+
                            "<input class=\"star star-3\" id=\"1-3\" type=\"radio\" onClick=\"starClicked(1,3)\" name=\"star\"/>"+
                            "<label class=\"star star-3\" for=\"1-3\"></label>"+
                            "<input class=\"star star-2\" id=\"1-2\" type=\"radio\" onClick=\"starClicked(1,2)\" name=\"star\"/>"+
                            "<label class=\"star star-2\" for=\"1-2\"></label>"+
                            "<input class=\"star star-1\" id=\"1-1\" type=\"radio\" onClick=\"starClicked(1,1)\" name=\"star\"/>"+
                            "<label class=\"star star-1\" for=\"1-1\"></label>"+
                            "</form></div></td></tr>";   
                // question 1
                  html = html + "<tr><td><h5>Question 1</h5></td><td>"+
                                "<div class=\"cont\"><div class=\"stars\"><form action=\"\">"+
                                "<input class=\"star star-5\" id=\"2-5\" type=\"radio\" onClick=\"starClicked(2,5)\" name=\"star\"/>"+ 
                                "<label class=\"star star-5\" for=\"2-5\"></label>"+
                                "<input class=\"star star-4\" id=\"2-4\" type=\"radio\" onClick=\"starClicked(2,4)\" name=\"star\"/>"+ 
                                "<label class=\"star star-4\" for=\"2-4\"></label>"+
                                "<input class=\"star star-3\" id=\"2-3\" type=\"radio\" onClick=\"starClicked(2,3)\" name=\"star\"/>"+
                                "<label class=\"star star-3\" for=\"2-3\"></label>"+
                                "<input class=\"star star-2\" id=\"2-2\" type=\"radio\" onClick=\"starClicked(2,2)\" name=\"star\"/>"+
                                "<label class=\"star star-2\" for=\"2-2\"></label>"+
                                "<input class=\"star star-1\" id=\"2-1\" type=\"radio\" onClick=\"starClicked(2,1)\" name=\"star\"/>"+
                                "<label class=\"star star-1\" for=\"2-1\"></label>"+
                                "</form></div></td></tr>"; 
                 // question 2
                  html = html + "<tr><td><h5>Question 1</h5></td><td>"+
                                "<div class=\"cont\"><div class=\"stars\"><form action=\"\">"+
                                "<input class=\"star star-5\" id=\"3-5\" type=\"radio\" onClick=\"starClicked(3,5)\" name=\"star\"/>"+ 
                                "<label class=\"star star-5\" for=\"3-5\"></label>"+
                                "<input class=\"star star-4\" id=\"3-4\" type=\"radio\" onClick=\"starClicked(3,4)\" name=\"star\"/>"+ 
                                "<label class=\"star star-4\" for=\"3-4\"></label>"+
                                "<input class=\"star star-3\" id=\"3-3\" type=\"radio\" onClick=\"starClicked(3,3)\" name=\"star\"/>"+
                                "<label class=\"star star-3\" for=\"3-3\"></label>"+
                                "<input class=\"star star-2\" id=\"3-2\" type=\"radio\" onClick=\"starClicked(3,2)\" name=\"star\"/>"+
                                "<label class=\"star star-2\" for=\"3-2\"></label>"+
                                "<input class=\"star star-1\" id=\"3-1\" type=\"radio\" onClick=\"starClicked(3,1)\" name=\"star\"/>"+
                                "<label class=\"star star-1\" for=\"3-1\"></label>"+
                                "</form></div></td></tr>"; 
              
              // question 3
                  html = html + "<tr><td><h5>Question 1</h5></td><td>"+
                                "<div class=\"cont\"><div class=\"stars\"><form action=\"\">"+
                                "<input class=\"star star-5\" id=\"4-5\" type=\"radio\" onClick=\"starClicked(4,5)\" name=\"star\"/>"+ 
                                "<label class=\"star star-5\" for=\"4-5\"></label>"+
                                "<input class=\"star star-4\" id=\"4-4\" type=\"radio\" onClick=\"starClicked(4,4)\" name=\"star\"/>"+ 
                                "<label class=\"star star-4\" for=\"4-4\"></label>"+
                                "<input class=\"star star-3\" id=\"4-3\" type=\"radio\" onClick=\"starClicked(4,3)\" name=\"star\"/>"+
                                "<label class=\"star star-3\" for=\"4-3\"></label>"+
                                "<input class=\"star star-2\" id=\"4-2\" type=\"radio\" onClick=\"starClicked(4,2)\" name=\"star\"/>"+
                                "<label class=\"star star-2\" for=\"4-2\"></label>"+
                                "<input class=\"star star-1\" id=\"4-1\" type=\"radio\" onClick=\"starClicked(4,1)\" name=\"star\"/>"+
                                "<label class=\"star star-1\" for=\"4-1\"></label>"+
                                "</form></div></td></tr>";
                    
                    html = html + "</tbody></table>"+
                        "<div><div class=\"form-group\"><h5>Comment</h5>"+
                        "<textarea class=\"form-control\" rows=\"2\" id=\"userComment\"></textarea>"+
                        "</div>";    
                    return html;
                }            
        });
    return result;
},    

        
initInfo : function(id_srvice){
    var result="";
    $.ajax({
              method: "GET",
              url: "http://localhost:1337/service/"+id_srvice,
              async: false,
              success : function (data) {
                if(data){
                   console.log(data);
                    var info = this.getInfo(data);
                    result = info;
                    var img = data.img;
                    if(img){
                        $("#image").attr("src", "/images/"+img);
                    }
                }
              },
              error : function () {
                alert("Impossible d'accéder au serveur EasyTrip");
              },
        
            getInfo : function (data) {
                var html="<li>"+data.activities[0].name+"</li>"+
                    "<li>Description : "+data.activities[0].description+"</li>"+
                    "<li>Price       : price</li>"+ 
                    "<li>Address     : "+data.address.str_nbr+" "+data.address.str_name+","+data.address.city+"</li>";  
                return html;
            }
        }); 
    return result;
    },
 
initComments : function(id_srvice){
    var result = "";
    $.ajax({            
          method: "GET",
          url: "http://localhost:1337/judgement/",
          async: false,
          data: {
                    service : id_srvice
          },
          success : function (data) {
            if(data){
               console.log(data);
                result = this.build(data);
            }
          },
          error : function () {
            alert("Impossible d'accéder au serveur EasyTrip");
          },
        build : function (data) {
            var html="";
            var right = false;
            jQuery.each(data, function(index, item) {
                if(right){
                    right = false;
                    html += "<li class=\"right clearfix\">"+
                        "<span class=\"chat-img pull-right\">"+
                            "<img src=\"/images/anonymous-male.png\" alt=\"User Avatar\" class=\"img-circle img-responsive\" />"+
                        "</span>"+
                        "<div class=\"chat-body clearfix\">"+
                            "<div class=\"header\">"+
                                "<small class=\" text-muted\">"+
                                    "<span class=\"fa fa-clock-o\"></span>"+item.updatedAt+
                                "</small>"+
                                "<strong class=\"pull-right primary-font\">"+item.user.name_first+"</strong>"+
                            "</div>"+
                            "<div class=\"pull-right\"><p>"+item.judgement+
                            "</p></div>"+
                        "</div>"+
                        "</li>";
                }
                else{
                    right = true;
                    html += "<li class=\"left clearfix\">"+
                    "<span class=\"chat-img pull-left\">"+
                        "<img src=\"/images/anonymous-male.png\" alt=\"User Avatar\" class=\"img-circle img-responsive\" />"+
                    "</span>"+
                    "<div class=\"chat-body clearfix\">"+
                        "<div class=\"header\">"+
                            "<strong class=\"primary-font\">"+item.user.name_first+"</strong>"+
                            "<small class=\"pull-right text-muted\">"+
                                "<span class=\"fa fa-clock-o\"></span>"+item.updatedAt+
                            "</small>"+
                        "</div>"+
                        "<p>"+item.judgement+
                        "</p>"+
                    "</div>"+
                    "</li>";
                }
            });
            return html;
        }
        });
    return result;    
} , 
    
addComment : function(id_srvice,comment,gobal_score,score1,score2,score3,user){
$.ajax({
          method: "POST",
          url: "http://localhost:1337/judgement",
          data: {
                service : id_srvice,
                judgement : comment,
                gobal_score : gobal_score,
                score1: score1,
                score2 : score2,
                score3 : score3,
                user : user
            },
          async: false,
          success : function (data) {
            if(data){
               console.log(data);                    
            }

          },
          error : function () {
            alert("Impossible d'accéder au serveur EasyTrip");
          }
        });    
}
    
    // Temporal data questions
// questions : [
//     {
//         "question": "General rate",
//         "id":"1",
//         "score":5
//     },
//     {
//         "question": "Quality of service",
//         "id":"2",
//         "score":4
//     },
//     {
//         "question": "Pertinence",
//         "id":"3",
//         "score":0
//     },
//     {
//         "question": "Price",
//         "id":"4",
//         "score":1
//     }
// ]    
    
};

 