if(process.env.PORT === undefined){
  const dotenvJSON = require('dotenv-json')({ path: "./.env"});
}
module.exports = {
  development: {
    database: process.env.DB_LOCAL_DATABASE,
    username: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASSWORD,
    host: process.env.DB_LOCAL_HOST,
    port: process.env.DB_LOCAL_PORT,
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: true
    },
  },
  stage: {
    database: process.env.DB_STAGE_DATABASE,
    username: process.env.DB_STAGE_USER,
    password: process.env.DB_STAGE_PASSWORD,
    host: process.env.DB_STAGE_HOST,
    port: process.env.DB_STAGE_PORT,
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: true
    },
  },
  live: {
    database: process.env.DB_LIVE_DATABASE,
    username: process.env.DB_LIVE_USER,
    password: process.env.DB_LIVE_PASSWORD,
    host: process.env.DB_LIVE_HOST,
    port: process.env.DB_LIVE_PORT,
    dialect: 'mysql',
    logging: false,
    define: {
      underscored: true
    },
  },
}
