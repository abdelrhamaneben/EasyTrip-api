var service = {
	idService : null,
	activities : [],
	name : "unknow",
	description : "No description",
	image : null,
	tel : "unknow",
	email : "unknow",
	horaire : "",
	longitude : null,
	latitude : null,
	isValide : function (idCategory) {
		for(var i = 0; i < this.activities.length; i++) {
			if(this.activities[i] == idCategory) return true ;
		}
		return false ;
	}
};