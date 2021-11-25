const mongoose = require('mongoose');

const url = process.env.DB_URI;

function connect(url) {
  return new Promise((resolve, reject) => {
      try{
          mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
          console.log('Connecting to database...' + mongoose.connection.readyState);
      }catch(err){
          reject(err);
      }
      resolve();
  })
}

async function  init() {
  await connect(url);
}

init().catch(err => console.log(err));

module.exports = mongoose;