/**
*	Manage the list of activities
*/
var activities_manager = {

	// initialize the list and add lister on <li>
	init: function (data) {
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
		this.init();
	},
	// to define, call to add action on click on <li>
	clickOnActivity : function (id) { }
};