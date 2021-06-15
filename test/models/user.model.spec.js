const { expect } = require('chai');
const User = require('../../server/db/models/user');
const jwt = require('jsonwebtoken');
const seed = require('../../script/seed');

describe('User model', () => {
  let users;
  beforeEach(async () => {
    users = (await seed()).users;
  });

  describe('column definitions', () => {
    it('has firstName, lastName,  ');
  });

  describe('instanceMethods', () => {
    describe('generateToken', () => {
      it('returns a token with the id of the user', async () => {
        const token = await users.cody.generateToken();
        const { id } = await jwt.verify(token, process.env.JWT);
        expect(id).to.equal(users.cody.id);
      });
    });

    describe('authenticate', () => {
      let user;
      beforeEach(
        async () =>
          (user = await User.create({
            email: 'test@email.com',
            password: 'testpassword',
          })),
      );

      describe('with correct credentials', () => {
        it('returns a token', async () => {
          const token = await User.authenticate({
            email: 'test@email.com',
            password: 'testpassword',
          });
          expect(token).to.be.ok;
        });
      });

      describe('with incorrect credentials', () => {
        it('throws a 401', async () => {
          try {
            await User.authenticate({
              email: 'test@email.com',
              password: 'wrongpassword',
            });
            throw 'Incorrect credentials';
          } catch (err) {
            expect(err.status).to.equal(401);
          }
        });
      });
    });
  });
});
