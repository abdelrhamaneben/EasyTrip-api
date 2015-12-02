/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_address',

	attributes: {
		 id_address : {
		 	type : 'integer',
		 	primaryKey: true,
		 	autoIncrement: true
		 },
		 str_nbr : {
		 	type : 'string',
		 	size : 5
		 },
		 str_name : {
		 	type : 'string',
		 	size : 100
		 },
		 city : {
		 	type: 'string',
		 	size : 50
		 },
	     code_zip : {
	     	type : 'integer'
	     },
	     code_country : {
			type : 'string',
		 	size : 5,
	     },
	     createdAt : {
    		type : 'datetime',
    		autoCreatedAt: true
		 },	    	
   		 updatedAt : {
    		type : 'datetime',
    		autoUpdatedAt: true
    	}
  	}
};
