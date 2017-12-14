// We'll use this to override require calls in routes
const proxyquire = require('proxyquire');
// This will create stubbed functions for our overrides
const sinon = require('sinon');
// Supertest allows us to make requests against an express object
const supertest = require('supertest');
// Natural language-like assertions
const chai = require('chai');
const expect = chai.expect;

//const sinonChai = require('sinon-chai');
//chai.use(sinonChai)

const express = require('express');

describe('POST /api/user to create user', function () {
  let app, registerStub, request, route;

  beforeEach(function () {
    // Create an express application object
    app = express();

    // A stub we can use to control conditionals
    registerStub = sinon.stub();

    // Get our router module, with a stubbed out users dependency
    // we stub this out so we can control the results returned by
    // the users module to ensure we execute all paths in our code
    route = proxyquire('../../../routes/api/user', {
      '../../models/user': {
        register: registerStub
      }
    });

    // Bind a route to our application
    route(app);

    // Get a supertest instance so we can make requests
    request = supertest(app);
  });

  it('should respond with a 201 as the user as been created successfully', function (done) {
    registerStub.resolves({});

    request
      .post('/api/user')
      .expect('Content-Type', /json/)
      .expect(201, function (err, res) {
        expect(res.body).to.deep.equal({
          response: 'User has been successfully created.'
        });
        done();
      });
  });

  it('should respond with a 400 as the user cannot be registered', function (done) {
    registerStub.rejects('Error registration')

    request
      .post('/api/user')
      .expect('Content-Type', /json/)
      .expect(400, function (err, res) {
        expect(res.body).to.deep.equal({
          name: 'Error registration'
        });
        done();
      });
  });
});