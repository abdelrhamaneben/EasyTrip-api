/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'et_contact',

	attributes: {
		 id_contact : {
		 	type : 'integer',
		 	primaryKey: true,
		 	autoIncrement: true
		 },
		 name_first : {
		 	type : 'string',
		 	size : 50
		 },
		 name_last : {
		 	type : 'string',
		 	size : 200
		 },
		 phone : {
		 	type: 'integer'
		 },
	   email : {
	    type : 'string',
		 	size : 100
	   },
	   d_create : {
    	type : 'datetime',
    	autoCreatedAt: true
		 },	    	
   	 d_update : {
    	type : 'datetime',
    	autoUpdatedAt: true
     }
   }
};

