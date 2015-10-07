/**
* Category.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'et_category',
	
	attributes: {
		 id_category : {
		 	type : 'integer',
		 	primaryKey: true,
		 	autoIncrement: true
		 },
		 name : {
		 	type : 'string',
		 	size : 50,
	    	required: true
		 },
		 description : {
		 	type : 'string',
		 	size : 200,
		 	required: true
		 },
	   activities:{
	    collection: 'activity',
	    via: 'categories'
	   }
  }
};
