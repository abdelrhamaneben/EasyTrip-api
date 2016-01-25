var features_manager = {
    build : function () {
        var result;
        var right = false;
        $.each(this.judgement, function(i, item) { 
            if(right){
                right = false;
                result += "<li class=\"right clearfix\">"+
                    "<span class=\"chat-img pull-right\">"+
                        "<img src=\"/images/"+item.user.image+"\" alt=\"User Avatar\" class=\"img-circle img-responsive\" />"+
                    "</span>"+
                    "<div class=\"chat-body clearfix\">"+
                        "<div class=\"header\">"+
                            "<small class=\" text-muted\">"+
                                "<span class=\"fa fa-clock-o\"></span>"+item.updatedAt+
                            "</small>"+
                            "<strong class=\"pull-right primary-font\">"+item.user.name+"</strong>"+
                        "</div>"+
                        "<div class=\"pull-right\"><p>"+item.judgement+
                        "</p></div>"+
                    "</div>"+
                    "</li>";
            }
            else{
                right = true;
                result += "<li class=\"left clearfix\">"+
                "<span class=\"chat-img pull-left\">"+
                    "<img src=\"/images/"+item.user.image+"\" alt=\"User Avatar\" class=\"img-circle img-responsive\" />"+
                "</span>"+
                "<div class=\"chat-body clearfix\">"+
                    "<div class=\"header\">"+
                        "<strong class=\"primary-font\">"+item.user.name+"</strong>"+
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
        return result;
    },
    summary : function () {
        var html;
        $.each(this.questions, function(i, item) { 
            html+="<tr><td>"+item.question+"</td>"+
                "<td>";
        if(item.score==0){
            html+="<i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/>";
        }
        if(item.score==1){
            html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/>";
        }
        if(item.score==2){
            html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/>";
        }
        if(item.score==3){
            html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star-o\"/><i class=\"fa fa-star-o\"/>";
        }
        if(item.score==4){
            html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star-o\"/>";
        }
        if(item.score>=5){
            html+="<i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/><i class=\"fa fa-star\"/>";
        }
            html+="</td></tr>";
        });
        return html;
    },
    
    
    popup : function(idService){
    var item = this.data[0];
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
    var question =0;
    $.each(this.questions, function(i, item) {
        question = question+1;
        html = html + "<tr><td><h5>"+item.question+"</h5></td><td>"+
            "<div class=\"cont\"><div class=\"stars\"><form action=\"\">"+
            "<input class=\"star star-5\" id=\""+question+"-5\" type=\"radio\" onClick=\"starClicked("+question+",5)\" name=\"star\"/>"+
            "<label class=\"star star-5\" for=\""+question+"-5\"></label>"+
            "<input class=\"star star-4\" id=\""+question+"-4\" type=\"radio\" onClick=\"starClicked("+question+",4)\" name=\"star\"/>"+
            "<label class=\"star star-4\" for=\""+question+"-4\"></label>"+
            "<input class=\"star star-3\" id=\""+question+"-3\" type=\"radio\" onClick=\"starClicked("+question+",3)\" name=\"star\"/>"+
            "<label class=\"star star-3\" for=\""+question+"-3\"></label>"+
            "<input class=\"star star-2\" id=\""+question+"-2\" type=\"radio\" onClick=\"starClicked("+question+",2)\" name=\"star\"/>"+
            "<label class=\"star star-2\" for=\""+question+"-2\"></label>"+
            "<input class=\"star star-1\" id=\""+question+"-1\" type=\"radio\" onClick=\"starClicked("+question+",1)\" name=\"star\"/>"+
            "<label class=\"star star-1\" for=\""+question+"-1\"></label>"+
            "</form></div></td></tr>";        
    });
    html = html + "</tbody></table>"+
        "<div><div class=\"form-group\"><h5>Comment</h5>"+
        "<textarea class=\"form-control\" rows=\"2\" id=\"comment\"></textarea>"+
        "</div>";    
    return html;
},
    getImage : function () {
        return "/images/"+this.data[0].img;
    },
    
    getInfo : function () {
        var html="<li>"+this.data[0].name+"</li>"+
            "<li>Description : "+this.data[0].description+"</li>"+
            "<li>Price       : "+this.data[0].price+"</li>"+
            "<li>Address     : "+this.data[0].address+"</li>";  
        return html;
    },
    // Temporal data questions
 questions : [
     {
         "question": "General rate",
         "id":"1",
         "score":5
     },
     {
         "question": "Quality of service",
         "id":"2",
         "score":4
     },
     {
         "question": "Pertinence",
         "id":"3",
         "score":0
     },
     {
         "question": "Price",
         "id":"4",
         "score":1
     }
 ],
    
    // Temporal data questions
 comments : [
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
    }
],
     judgement : [
     {
        "user": {
            "name": "Kevin",
            "image": "anonymous-male.png"
        },
        "judgement": "A comment about this activity",
        "updatedAt": "2016-25-1"
    },
    {
        "user": {
            "name": "Gissel",
            "image": "anonymous-male.png"
        },
        "judgement": "A comment about this activity",
        "updatedAt": "2016-24-1"
    },
    {
        "user": {
            "name": "Abdel",
            "image": "anonymous-male.png"
        },
        "judgement": "A comment about this activity",
        "updatedAt": "2016-23-1"
    },
    {
        "user": {
            "name": "Anis",
            "image": "anonymous-male.png"
        },
        "judgement": "A comment about this activity",
        "updatedAt": "2016-23-1"
    }
]
};

 