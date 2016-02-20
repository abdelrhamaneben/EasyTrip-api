module.exports = {

  tableName: 'et_stat',

  attributes: {
    id_stat: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    id_service: {
      model: 'service'
    },
    ip_stat: {
      type: 'string',
      size: 15,
      required: true
    }
  }
};
