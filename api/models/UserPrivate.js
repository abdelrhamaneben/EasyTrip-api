/**
* UserPrivate.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'et_user_private',

  attributes: {
  	 id_ub : {
  	 	type : 'integer',
  	 	primaryKey: true,
        autoIncrement: true
  	 },
  	 id_address : {
  	 	type : 'integer',
        unique : true
  	 },
  	 id_contact : {
  	 	type : 'integer',
        unique : true
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