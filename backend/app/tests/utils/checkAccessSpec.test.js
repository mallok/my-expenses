const chai = require('chai')
const expect = chai.expect;
const checkAccess = require('../../utils/checkAccess');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)


describe('Test checkAccess', function() {
  let sandbox = sinon.sandbox.create();
  let middle;
  let req;
  let res;
  let resCode;

  beforeEach(function () {
    req = sandbox.stub();
    req.headers = sandbox.stub();
    res = sandbox.stub();
    res.status = sandbox.spy();
    res.send = sandbox.stub();
    res.end = sandbox.stub();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('/api should be unprotected path', function(done) {
    req.path = '/api';
    req.method = 'GET';

    let next = sinon.spy();
    checkAccess(req, res, next);
    expect(next).to.have.been.calledOnce;
    done();

  });

  it('/api/login should be unprotected path', function(done) {
    req.path = '/api/login';
    req.method = 'POST';

    let next = sinon.spy();
    checkAccess(req, res, next);
    expect(next).to.have.been.calledOnce;
    done();

  });

  it('/api/user should be unprotected path', function(done) {
    req.path = '/api/login';
    req.method = 'POST';

    let next = sinon.spy();
    checkAccess(req, res, next);
    expect(next).to.have.been.calledOnce;
    done();
  });

  it('/favicon.ico should be unprotected path', function(done) {
    req.path = '/favicon.ico';
    req.method = 'GET';

    let next = sinon.spy();
    checkAccess(req, res, next);
    expect(next).to.have.been.calledOnce;
    done();
  });
});
