const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    router: {
      stripTrailingSlash: true,
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
