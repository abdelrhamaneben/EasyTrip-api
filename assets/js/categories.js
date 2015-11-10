var categories = {
	defaultImg: 'default.png',
	TableTop : "",
	TableBottom: "",
	data: null,

	//This function build the result table, she need the list of Json service in services.data property
	Build: function () {
		if(this.data != null) {
			var template = this.TableTop;
			for (i in this.data) {
				var item = this.data[i];
			  template += " <li> <div class='imgmenu mphotos-1 commune' > <a href='result.html' data=\"" + item.id_category + "\"> <div class='mphotos'> <div class='mphoto'> <img class='autosize' src='";
                    if(item.img == null) {
                    	template += this.defaultImg;
                    }
                    else {
                    	template += item.img;
                    }
                    template += "'/></div> </div> <div class='title'> <div class='valign'></div> <div class='name'>"+item.name+"</div> </div> </a> </div> </li>";
			}
			template += this.TableBottom;
			return template;
		}
		else {
			throw "Services Object Function Build : Expected Json data";
		}
	}
}