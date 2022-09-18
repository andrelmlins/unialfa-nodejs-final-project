import server from '../../src/core/server';
import { startConnection, closeConnection } from './db';

process.env = {
  MONGOOSE_PORT: '25000',
  PASSWORD_SECRET: '75ac41b9-6366-4c01-b448-349160f3562a',
};

beforeAll(async () => {
  await startConnection();
  globalThis.server = server().listen();
});

afterAll(async () => {
  globalThis.server.close();
  await closeConnection();
});
