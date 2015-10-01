/**
* Category.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		 id_category : {
		 	type : 'integer',
		 	primaryKey: true,
		 	autoIncrement: true,
	    required: true
		 },
		 name : {
		 	type : 'string',
		 	size : 50
		 },
		 description : {
		 	type : 'string',
		 	size : 200
		 }
  }
};

