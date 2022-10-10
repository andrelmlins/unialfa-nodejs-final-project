import server from './core/server';
const { networkInterfaces } = require('os');

const port = 3000;

server().listen(port, () => {
  console.log(networkInterfaces().eth0[0].address)
  console.log(`Listening on port ${port}`);
});
