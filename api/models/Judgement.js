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
    user : {
      model : 'user'
    },
    service : {
      model : 'service'
    },
    judgement : {
      type: 'string',
      size: 500
    },
    global_score : {
    	type : 'integer'
    },
    score1 : {
    	type : 'integer'
    },
    score2 : {
    	type : 'integer'
    },
    score3 : {
    	type : 'integer'
    },
    createdAt : {
      type: 'datetime',
      autoCreatedAt: true
    },
   	updatedAt : {
      type: 'datetime',
      autoUpdatedAt: true
    }
  }
};
