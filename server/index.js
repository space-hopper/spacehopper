const { db } = require('./db');
const PORT = process.env.PORT || 8080;
const app = require('./app');
const seed = require('../server/db/seed');

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)


  } catch (ex) {
    console.log(ex);
  }
};

init();
