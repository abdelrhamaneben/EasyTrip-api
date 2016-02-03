var should = require('should');

describe('Service model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      Service.find().exec(function(err, services) {
        services.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific service', function(done) {
      Service.findOne({id_service: 1}).exec(function(err, service) {
        should(service).exist;
        should(err).not.exist;

        should(service).have.property('name').eql('Paint ball olympique le possedon');

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create a service', function(done) {
      Service.create({
        "creator": 2,
        "geolati": 54.1234,
        "geolong": 23.1234,
        "address": 1,
        "name": "Nom du service",
        "description": "Description du service",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAADGUoyxRCPEq",
        "premium": true
      }).exec(function(err, service) {
        should.not.exist(err);
        should.exist(service);

        Service.findOne({id_service: service.id_service}).exec(function(err, service) {
          should.not.exist(err);
          should.exist(service);

          done();
        });
      });
    });

    it ('should not create a service with an id', function(done) {
      Service.create({
        "creator": 2,
        "geolati": 54.1234,
        "geolong": 23.1234,
        "address": 1,
        "name": "CustomName",
        "description": "Description du service",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAADGUoyxRCPEq",
        "premium": true,
        "id_service": 1
      }).exec(function(err, service) {
        should.not.exist(err);
        should.exist(service);

        // findOne because service exist even if service already exist. Need to verify if original is not modified.
        Service.findOne({id_service: 1}).exec(function(err, service) {
          should.not.exist(err);
          should.exist(service);

          should(service).have.property('name').not.eql('CustomName');

          done();
        });
      });
    });

    it ('should not create a service without a geolong', function(done) {
      Service.create({
        "creator": 2,
        "geolati": 54.1234,
        "address": 1,
        "name": "CustomName",
        "description": "Description du service",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAADGUoyxRCPEq",
        "premium": true,
        "id_service": 1
      }).exec(function(err, service) {
        should.exist(err);
        should.not.exist(service);

        done();
      });
    });

    it ('should not create a service without a geolati', function(done) {
      Service.create({
        "creator": 2,
        "geolong": 23.1234,
        "address": 1,
        "name": "CustomName",
        "description": "Description du service",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAADGUoyxRCPEq",
        "premium": true,
        "id_service": 1
      }).exec(function(err, service) {
        should.exist(err);
        should.not.exist(service);

        done();
      });
    });

    it ('should not create a service without a name', function(done) {
      Service.create({
        "creator": 2,
        "geolong": 23.1234,
        "geolati": 54.1234,
        "address": 1,
        "description": "Description du service",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAADGUoyxRCPEq",
        "premium": true,
        "id_service": 1
      }).exec(function(err, service) {
        should.exist(err);
        should.not.exist(service);

        done();
      });
    });
  });

  describe('update', function() {
    it ('should update a service', function(done) {
      Service.create({
        "creator": 1,
        "geolati": 54.1234,
        "geolong": 23.1234,
        "address": 1,
        "name": "CustomName",
        "description": "Description du service",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAADGUoyxRCPEq",
        "premium": true,
        "id_service": 123136
      }).exec(function(err, service) {
        should.not.exist(err);
        should.exist(service);

        Service.findOne({id_service: 123136}).exec(function(err, service) {
          should.not.exist(err);
          should.exist(service);

          Service.update({id_service: 123136}, {premium: false}).exec(function(err, service) {
            should.not.exist(err);
            should.exist(service);

            Service.findOne({id_service: 123136}).exec(function(err, service) {
              should.not.exist(err);
              should.exist(service);

              should(service).have.property('premium').eql(false);

              done();
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete a service', function(done) {
      Service.create({
        "creator": 1,
        "geolati": 54.1234,
        "geolong": 23.1234,
        "address": 1,
        "name": "CustomName",
        "description": "Description du service",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAADGUoyxRCPEq",
        "premium": true,
        "id_service": 123465
      }).exec(function(err, service) {
        should.not.exist(err);
        should.exist(service);

        Service.findOne({id_service: service.id_service}).exec(function(err, service) {
          should.not.exist(err);
          should.exist(service);

          Service.destroy({id_service: service.id_service}).exec(function(err, service) {
            should.not.exist(err);
            should.exist(service);

            Service.findOne({id_service: service.id_service}).exec(function(err, service) {
              should.not.exist(err);
              should.not.exist(service);

              done();
            });
          });
        });
      });
    });
  });
});
