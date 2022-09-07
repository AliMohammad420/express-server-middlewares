'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);


describe('API server', () => {
    it('Home page works', async () => {
      const res = await request.get('/');
      expect(res.status).toEqual(200);
      expect(res.text).toEqual('Home page')
    });
  
    it( 'Square works', async () => {
      const res = await request.get( '/square?num=5' );
      expect( res.status ).toEqual( 200 );
      expect( res.text ).toEqual( 'the squareNum 5 is 25' );
  } );

    it('Square fails', async () => {
      const res = await request.post( '/square?num=abc' )
        expect(res.status).toEqual(500);
        expect( res.text ).toEqual( '{\"code\":500,\"message\":\"Server Error: Wrong Number\"}' );
      } )
  })
