// We'll use this to override require calls in routes
const proxyquire = require('proxyquire');
// This will create stubbed functions for our overrides
const sinon = require('sinon');
// Supertest allows us to make requests against an express object
const supertest = require('supertest');
// Natural language-like assertions
const chai = require('chai');
const expect = chai.expect;

const sinonChai = require('sinon-chai');
chai.use(sinonChai)

const express = require('express');

describe('GET /', function () {
  let app, request, route;

  beforeEach(function () {
    // Create an express application object
    app = express();

    // Get our router module, with a stubbed out users dependency
    // we stub this out so we can control the results returned by
    // the users module to ensure we execute all paths in our code
    route = require('../../../routes/api/index');

    // Bind a route to our application
    route(app);

    // Get a supertest instance so we can make requests
    request = supertest(app);
  });

  it('should respond with a 200 and a welcome message', function (done) {
    request
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200, function (err, res) {
        expect(res.body).to.deep.equal({
          response: 'Welcome to MyExpenses'
        });
        done();
      });
  });
});