/**
* Address.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_address',

  attributes: {
    id_address: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    str_nbr: {
      type: 'string',
      size: 5,
      required: true
    },
    str_name: {
      type: 'string',
      size: 100,
      required: true
    },
    city: {
      type: 'string',
      size: 50,
      required: true
    },
    code_zip: {
      type: 'integer',
      required: true
    },
    country: {
      type: 'string',
      size: 50,
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
