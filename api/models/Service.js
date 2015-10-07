/**
* Service.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id_service :{
  			type : 'integer',
	  	 	primaryKey: true,
	  	 	autoIncrement: true,
		    required: true
		},
    id_geo :{
    	type : 'integer',
    	required : true,
    	unique : true
    },
    id_bu :{
    	type : 'integer',
    	required : true
    },
    id_adress: {
    	type : 'integer'
    },
    name :{
    	type : 'string',
    	size : 50
    },
    description :{
		type : 'string',
    	size : 200    
    },
    d_create :{
    	type : 'datetime'
		},	    	
    d_update :{
    	type : 'datetime'
    }
  }
};

