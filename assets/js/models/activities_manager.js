/**
*	Manage the list of activities
*/
var activities_manager = {

	// initialize the list and add lister on <li>
	init: function (data) {
		for(var i = 0;i < data.length;i++) {
			$('#list_activities').append(
				$('<li>' +  data[i].name + '</li>')
					.attr('data-id',data[i].id_activity)
					.addClass('list-group-item')
			);
		}

		$('#list_activities li').click(function () {
			$(this).toggleClass('active');
			activities_manager.clickOnActivity($(this).attr('data-id'));
		});
	},
	// a définir
	getActivities: function () {
		var list =[];
		$('#list_activities li').each(function (i, item ) {
			if($(item).hasClass('active')) {
				list.push($(item).attr('data-id'));
			}
		});
		return list;
	},
	// get the list of activities and init the Html list
	load : function () {
		this.init(this.data1);
		/*$.ajax({
              method: "GET",
              url: "http://localhost:1337/category/1",
              async : false,
              success : function (data) {
                if(data.activities){
                    
                }
              },
              error : function () {
                alert("Impossible d'accéder au serveur EasyTrip");
              }
            });*/
	},
	// to define, call to add action on click on <li>
	clickOnActivity : function (id) { },
	data1 : [
        {
            "name": "Festival",
            "id_activity": 1
        },
        {
            "name": "Concert",
            "id_activity": 2
        },
        {
            "name": "Opéra",
            "id_activity": 3
        },
        {
            "name": "Apprendre",
            "id_activity": 4
        }
    ],
    data2 : [
        {
            "name": "Massage",
            "id_activity": 5
        },
        {
            "name": "Yoga",
            "id_activity": 6
        },
        {
            "name": "Hammam",
            "id_activity": 7
        },
        {
            "name": "Spa",
            "id_activity": 8
        }
    ]
};