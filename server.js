const express = require('express');
const path = require('path');
const next = require('next');
const cookieParser = require('cookie-parser');
const proxy = require('http-proxy-middleware');
require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV === 'development';
const app = next({ dev, dir: './src' });
const handle = app.getRequestHandler();

const authServiceProxy = proxy({
  target: process.env.AUTH_SERVICE,
  changeOrigin: true,
  pathRewrite: {
    [`^/auth-service`]: '',
  },
});

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use('/assets', express.static(path.join(__dirname, 'src', 'assets')));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.use(`/auth-service`, authServiceProxy);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
