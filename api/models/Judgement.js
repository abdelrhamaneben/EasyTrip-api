<<<<<<< HEAD
module.exports = {

  tableName: 'et_judgement',

  attributes: {
    id_judgement: {
=======
/**
* Judgement.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

 tableName: 'et_judgement',

  attributes : {
    id_judgement : {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      model: 'user'
    },
    id_service: {
      model: 'service'
    },
    judgement: {
      type: 'string',
      size: 500
    },
    global_score: {
      type: 'float',
      required: true
    },
    score1: {
      type: 'integer',
      required: true
    },
    score2: {
      type: 'integer',
      required: true
    },
    score3: {
      type: 'integer',
      required: true
    }
  }
};
