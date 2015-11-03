/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

	tableName: 'et_contact',

	attributes: {
		 id_contact : {
		 	type : 'integer',
		 	primaryKey: true,
		 	autoIncrement: true
		 },
		 name_first : {
		 	type : 'string',
		 	size : 50
		 },
		 name_last : {
		 	type : 'string',
		 	size : 200
		 },
		 phone : {
		 	type: 'integer'
		 },
	   email : {
	    type : 'string',
		 	size : 100,
			required: true
	   },
		 password: {
			 type: 'string',
			 required: true
		 },
	   d_create : {
    	type : 'datetime',
    	autoCreatedAt: true
		 },
   	 d_update : {
    	type : 'datetime',
    	autoUpdatedAt: true
		},
		toJSON: function() {
			var obj = this.toObject();
			delete obj.password;
			return obj;
		}
   },

	 beforeCreate: function(user, cb) {
		 bcrypt.genSalt(10, function(err, salt) {
			 bcrypt.hash(user.password, salt, function(err, hash) {
				 if (err) {
					 console.log(err);
					 cb(err);
				 } else {
					 user.password = hash;
					 cb(null, user);
				 }
			 });
		 });
	 }
};
