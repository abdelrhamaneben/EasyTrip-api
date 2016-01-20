var should = require('should');

describe('Address model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      Address.find().exec(function(err, addresses) {
        addresses.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific address', function(done) {
      Address.findOne({id_address: 2}).exec(function(err, address) {
        should(address).exist;
        should(err).not.exist;

        should(address).have.property('str_nbr').eql('1');
        should(address).have.property('str_name').eql('lavoisier');
        should(address).have.property('code_zip').eql(59370);
        should(address).have.property('city').eql('Mons en baroeul');
        should(address).have.property('country').eql('France');

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create an address', function(done) {
      Address.create({str_nbr: '666', str_name: 'hell street', code_zip: 66666, city: 'Nyan', country: 'Lol'}).exec(function(err, address) {
        should.not.exist(err);
        should.exist(address);

        should(address).have.property('str_nbr').eql('666');
        should(address).have.property('str_name').eql('hell street');
        should(address).have.property('code_zip').eql(66666);
        should(address).have.property('city').eql('Nyan');
        should(address).have.property('country').eql('Lol');

        done();
      });
    });

    it ('should not create an address with an id which already exist', function(done) {
      Address.create({id_address: 1, str_nbr: '666', str_name: 'hell street', code_zip: 66666, city: 'Nyan', country: 'Lol'}).exec(function(err, address) {
        should.not.exist(err);
        should.exist(address);

        Address.findOne({id_address: 1}).exec(function(err, address) {
          should.not.exist(err);
          should.exist(address);

          should(address).have.property('str_name').not.equal('hell street');

          done();
        });
      });
    });

    it ('should not create an address without str_name', function(done) {
      Address.create({id_address: 12424, str_nbr: '666', code_zip: 66666, city: 'Nyan', country: 'Lol'}).exec(function(err, address) {
        should.exist(err);
        should.not.exist(address);

        done();
      });
    });

    it ('should not create an address without str_nbr', function(done) {
      Address.create({id_address: 12424, str_name: 'Hell street', code_zip: 66666, city: 'Nyan', country: 'Lol'}).exec(function(err, address) {
        should.exist(err);
        should.not.exist(address);

        done();
      });
    });

    it ('should not create an address without code_zip', function(done) {
      Address.create({id_address: 12424, str_nbr: '666', str_name: 'Hell street', city: 'Nyan', country: 'Lol'}).exec(function(err, address) {
        should.exist(err);
        should.not.exist(address);

        done();
      });
    });

    it ('should not create an address without city', function(done) {
      Address.create({id_address: 12424, str_nbr: '666', str_name: 'Hell street', code_zip: 66666, country: 'Lol'}).exec(function(err, address) {
        should.exist(err);
        should.not.exist(address);

        done();
      });
    });

    it ('should not create an address without country', function(done) {
      Address.create({id_address: 12424, str_nbr: '666', str_name: 'Hell street', code_zip: 66666, city: 'Nyan'}).exec(function(err, address) {
        should.exist(err);
        should.not.exist(address);

        done();
      });
    });
  });

  describe('update', function() {
    it ('should update an address', function(done) {
      Address.create({str_nbr: '64', str_name: 'a street', code_zip: 61345, city: 'Oklm', country: 'Groland'}).exec(function(err, address) {
        should.not.exist(err);
        should.exist(address);

        Address.findOne({id_address: address.id_address}).exec(function(err, address) {
          should.not.exist(err);
          should.exist(address);

          should(address).have.property('country').eql('Groland');

          Address.update({id_address: address.id_address}, {country: 'Naal'}).exec(function(err, addresses) {
            should.not.exist(err);
            should.exist(address);

            should(addresses[0]).have.property('country').eql('Naal');

            Address.findOne({str_nbr: '64', str_name: 'a street', code_zip: 61345, city: 'Oklm', country: 'Groland'}).exec(function(err, address) {
              should.not.exist(err);
              should.not.exist(address);

              Address.findOne({str_nbr: '64', str_name: 'a street', code_zip: 61345, city: 'Oklm', country: 'Naal'}).exec(function(err, address) {
                should.not.exist(err);
                should.exist(address);

                done();
              });
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete an address', function(done) {
      Address.create({str_nbr: '125', str_name: 'my street name', code_zip: 35545, city: 'mlkO', country: 'lluN'}).exec(function(err, address) {
        should.not.exist(err);
        should.exist(address);

        Address.findOne({id_address: address.id_address}).exec(function(err, address) {
          should.not.exist(err);
          should.exist(address);

          Address.destroy({id_address: address.id_address}).exec(function(err, address) {
            should.not.exist(err);
            should.exist(address);

            Address.findOne({id_address: address.id_address}).exec(function(err, address) {
              should.not.exist(err);
              should.not.exist(address);

              done();
            });
          });
        });
      });
    });
  });
});
