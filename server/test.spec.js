import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../server';

chai.should();
chai.use(chaiHttp);

describe('RPNG', () => {
  it('should display the welcome page', (done) => {
    chai.request(server).get('/api/v1')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});
