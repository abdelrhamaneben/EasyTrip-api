/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_user',

  attributes: {
    id_user: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    name_first: {
      type: 'string',
      size: 50,
      required: true
    },
    name_last: {
      type: 'string',
      size: 200,
      required: true
    },
    email: {
      type: 'string',
      size: 100,
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    address: {
      model: 'address'
    },
    role: {
      type: 'string',
      enum: ['business','private','admin'],
      defaultsTo: 'private'
    },
    password: {
      type: 'string',
      required: true
    },
    subscription: {
      model: 'subscription'
    },
    subscribed: {
      type: 'boolean',
      defaultsTo: false
    },
    createdAt: {
      type: 'datetime',
      autoUpdatedAt: true
    },
    updatedAt: {
      type: 'datetime',
      autoUpdatedAt: true
    }
  }
};
