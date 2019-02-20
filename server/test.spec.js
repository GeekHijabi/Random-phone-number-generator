import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server';

chai.should();
chai.use(chaiHttp);

describe('Random Phonenumber Generator', () => {
  it('should display the welcome page', (done) => {
    chai.request(server).get('/api/v1')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });

  it('should generate random number', () => {
    chai.request(server).get('/api/v1/create-phonenumbers')
        .end((err, res) => {
          res.should.have.status(201);
          res.body.message.should.equal('20 Phone numbers successfully generated')
        });
  });

  it('should get all random numbers', () => {
    chai.request(server).get('/api/v1/get-phonenumbers')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.equal('All Phone numbers fetched successfully')
        });
  });
});
