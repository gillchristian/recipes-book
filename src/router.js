const recipeRoute = require('./routes/recipe-route');
const userRoute = require('./routes/user-route');
const mainRoute = require('./routes/main-route');
const cmsRoute = require('./routes/cms-route');
const config = require('./config/config');
const authRoute = require('./routes/auth-route');
const authMiddleware = require('./middlewares/auth-middleware');
const express = require('express'); // eslint-disable-line new-cap
const path = require('path');

module.exports = (req, res, next) => {
  const relative = process.env.NODE_ENV === 'prod' ?
    'bundle.prod.js' :
    'bundle.dev.js';
  const filename = path.join(__dirname, 'public/build/', relative);
  res.app.use('/app.js', express.static(filename));

  req.app.use('/', mainRoute);
  req.app.use('/api/authenticate', authRoute);
  req.app.use('/cms', cmsRoute);
  if (!config.DISABLE_AUTH) {
    req.app.use(authMiddleware);
  }
  req.app.use('/api/recipes', recipeRoute);
  req.app.use('/api/users', userRoute);
  next();
};
