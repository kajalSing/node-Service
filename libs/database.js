import mongoose from "mongoose";

export default class Database {

  open(mongoUrl) {
      return new Promise((resolve, reject) => {
        // Mongoose options
        const options = {
          autoIndex: true, // Build indexes
          bufferMaxEntries: 0,
          keepAlive: 1,
          poolSize: 10, // Maintain up to 10 socket connections
          reconnectInterval: 500, // Reconnect every 500ms
          reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
          useNewUrlParser: true,
          useUnifiedTopology: true
        };
        mongoose.connect(mongoUrl, options);
        mongoose.connection.on("error", err => {
            // throw new Error(`unable to connect to database: ${mongoUri}`);
            reject(err);
          });
    
        mongoose.connection.on("connected", err => {
          console.log('Database Connected')
        resolve();
        });
    })
  }
  close() {
    mongoose.disconnect();
  }
}
