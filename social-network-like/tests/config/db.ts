import { MongoMemoryServer } from 'mongodb-memory-server';

let mongodb;

export const startConnection = async () => {
  mongodb = await MongoMemoryServer.create({
    instance: { port: Number(process.env.MONGOOSE_PORT) },
  });

  await mongodb.getUri();
};

export const closeConnection = async () => {
  await mongodb.stop();
};
