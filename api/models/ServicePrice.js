/**
* ServicePrice.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 'et_service_price',

	attributes: {
		 id_sp : {
		 	type : 'integer',
		 	primaryKey: true,
		 	autoIncrement: true,
		 	unique : true
		 },
		 id_service : {
		 	type : 'integer',
		 },
		 d_from : {
		 	type : 'datetime'
		 },
		 d_to : {
		 	type : 'datetime'
		 },
	     nb_person_min : {
	     	type : 'integer'
	     },
	     nb_person_max : {
			type : 'integer',
	     },
	     price_pp : {
    		type : 'integer',
 			size : 8
		 },	    	
   		 promotion : {
    		type : 'boolean'
    	 },
    	 d_create : {
    		type : 'datetime',
    		autoCreatedAt: true
		 },	    	
   		 d_update : {
    		type : 'datetime',
    		autoUpdatedAt: true
    	 },
    	 valid : {
    		type : 'boolean'
    	 } 
  	}
};