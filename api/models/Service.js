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
	  	 	autoIncrement: true
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
        size : 50,
        required : true
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
    premium :{
        type: 'boolean',
        defaultsTo : false
    },
    createdAt :{
    	type : 'datetime',
        autoCreatedAt: true
	},
    updatedAt :{
    	type : 'datetime',
        autoUpdatedAt: true
    },
    activities : {
            collection: 'activity',
            via: 'services'
    },
    servicePrices : {
            collection: 'servicePrice',
            via: 'service'
    }
  }
};
