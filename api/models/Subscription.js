/**
* Subscription.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_user',

  attributes: {
	id_subscription : {
  	 	type : 'integer',
  	 	primaryKey: true,
      	autoIncrement: true
  	},
	d_from : {
		type : 'datetime'
	},
	nb_month : {
		type : 'integer',
	}
  }
};

