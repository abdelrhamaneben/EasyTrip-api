/**
* GeoPos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_geo_pos',

  attributes: {
  	 id_geo : {
  	 	type : 'integer',
  	 	primaryKey: true,
      	autoIncrement: true
  	 },
  	 geolati : {
  	 	type : 'float'
  	 },
     geolong : {
      type : 'float'
     },
     source : {
      type : 'string',
      size : 5
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