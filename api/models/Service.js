/**
* Service.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_service',

  attributes: {
  	id_service :{
  			type : 'integer',
	  	 	primaryKey: true,
	  	 	autoIncrement: true,
		    required: true
	},
    geolati :{
    	type : 'float',
    	required : true
    },
    geolong :{
        type : 'float',
        required : true
	},
    creator : {
        model : 'user'
    },
    address : {
        model : 'address'
    },
    name :{
        type : 'string',
        size : 50
    },
    description :{
		type : 'string',
    	size : 200    
    },
    image :{
        type : 'string'
    },
    link :{
        type : 'string'
    },
    createdAt :{
    	type : 'datetime',
        autoCreatedAt: true
	},	    	
    updatedAt :{
    	type : 'datetime',
        autoUpdatedAt: true
    },
<<<<<<< HEAD
    activities : {
            collection: 'Activity',
            via: 'services'
     }
=======
    activities :{
        collection : 'activity',
        via : 'services'
    }
>>>>>>> presentation
  }
};

