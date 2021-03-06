const config = {
  PORT: process.env.PORT || 8080,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/recipes-api',
  SECRET: process.env.SECRET || '@#!$%some-good-secret-with-recipes-la-la@#!$%',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || 1440,
  DISABLE_AUTH: process.env.DISABLE_AUTH === 'true',
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin',
}

module.exports = config
