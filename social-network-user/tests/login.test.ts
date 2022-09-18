import request from 'supertest';
import { faker } from '@faker-js/faker';

import User from '../src/models/user';
import cryptoPassword from '../src/lib/crypto.password';

describe('login controller', () => {
  let userParams;

  beforeAll(async () => {
    userParams = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.fullName(),
    };

    const user = new User({
      ...userParams,
      password: cryptoPassword(userParams.password),
    });

    await user.save();
  });

  it('should login with successfully', async () => {
    const result = await request(globalThis.server).post('/login').send({
      email: userParams.email,
      password: userParams.password,
    });

    expect(result.status).toBe(200);
  });
});
