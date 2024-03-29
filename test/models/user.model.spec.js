const { expect } = require('chai');
const { checkPropertyExists } = require('sequelize-test-helpers');
const User = require('../../server/db/models/user');
const jwt = require('jsonwebtoken');
const seed = require('../../server/db/seed');

describe('User model', () => {
  xdescribe('check User model properties', () => {
    const user = new User();
    context('properties', () => {
      [
        'firstName',
        'lastName',
        'address',
        'phoneNumber',
        'email',
        'password',
        'isMember',
        'isAdmin',
      ].forEach(checkPropertyExists(user));
    });
  });

  let users;
  beforeEach(async () => {
    users = (await seed()).users;
  });

  describe('instanceMethods', () => {
    describe('generateToken', () => {
      xit('returns a token with the id of the user', async () => {
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
            firstName: 'Cody',
            lastName: 'Smith',
            email: 'test@email.com',
            password: 'testpassword',
          }))
      );

      describe('with correct credentials', () => {
        xit('returns a token', async () => {
          const token = await User.authenticate({
            firstName: 'Cody',
            lastName: 'Smith',
            email: 'test@email.com',
            password: 'testpassword',
          });
          expect(token).to.be.ok;
        });
      });

      describe('with incorrect credentials', () => {
        xit('throws a 401', async () => {
          try {
            await User.authenticate({
              firstName: 'Cody',
              lastName: 'Smith',
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
