import request from 'supertest';
import { faker } from '@faker-js/faker';

describe('register controller', () => {
  let userParams;

  beforeAll(() => {
    userParams = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.fullName(),
    };
  });

  it('register a new user with successfully', async () => {
    const result = await request(globalThis.server)
      .post('/register')
      .send(userParams);

    expect(result.status).toBe(200);
    expect(result.body.user.email).toBe(userParams.email);
  });

  it('register a new user with erro when user already exist', async () => {
    const result = await request(globalThis.server)
      .post('/register')
      .send(userParams);

    expect(result.status).toBe(400);
    expect(result.body.message).toBe('Este email já está sendo utilizado');
  });
});
