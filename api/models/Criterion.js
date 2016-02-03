/**
* Criterion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_criterion',

  attributes: {
    id_criterion: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    criterion: {
      type: 'string',
      size: 100,
      required: true
    },
    createdAt: {
      type: 'datetime',
      autoCreatedAt: true
    },
   	updatedAt: {
      type: 'datetime',
      autoUpdatedAt: true
    }
  }
};

