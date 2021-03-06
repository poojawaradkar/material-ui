import express from 'express';

import configureStore from 'store/configureStore';

import renderer from 'helpers/renderer';

import { loadRouteData } from 'utils/commonUtils';

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.PARENT_PUBLIC_DIR))
  .get('/*', (req, res) => {
    // Create a new Redux store instance
    const store = configureStore();
    const params = req.params[0].split('/');
    const id = params[2];

    const data = loadRouteData(req.url, {
      loadType: 'fetchInitialData',
      id,
    });
    const context = {};
    const content = renderer({
      req,
      store,
      context,
      data,
    });
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });

export default server;
