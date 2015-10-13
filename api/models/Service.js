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
    image : {
        type : 'string',
        size : 100,
        defaultsTo: 'default.png'
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
    	type : 'datetime',
        autoCreatedAt: true
		},	    	
    d_update :{
    	type : 'datetime',
        autoUpdatedAt: true
    },
    activity :{
        model:'activity'
    },
    contact :{
        model:'contact'
    }
  }
};

