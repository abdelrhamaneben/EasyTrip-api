/**
* Reservation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'et_reservation',

  attributes: {
    id_res: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    customer: {
      model: 'user'
    },
    price: {
      model: 'servicePrice'
    },
    d_from: {
      type: 'datetime',
      required: true
    },
    d_to: {
      type: 'datetime'
    },
    nb_person: {
      type: 'integer',
      required: true
    },
    valid: {
      type: 'boolean'
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
