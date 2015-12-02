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
		 service : {
		 	model : 'service'
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
			type : 'integer'
	     },
	     price_per_person : {
    		type : 'integer',
 			size : 8
		 },	    	
   		 promotion : {
    		type : 'boolean'
    	 },
    	 businessDay : {
    	 	type : 'string',
    	 	size : 250
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
