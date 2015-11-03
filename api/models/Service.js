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
    name :{
    	type : 'string',
    	size : 50
    },
    description :{
		type : 'string',
    	size : 200    
    },
    tel :{
        type : 'string',
        size : 20    
    },
    lng :{
            type : 'string',
    },
    lat :{
            type : 'string',
    },
    d_create :{
    	type : 'datetime',
        autoCreatedAt: true
		},	    	
    d_update :{
    	type : 'datetime',
        autoUpdatedAt: true
    },
    activity :{
        model:'activity'
    }
  }
};

