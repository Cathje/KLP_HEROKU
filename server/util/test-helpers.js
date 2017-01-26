import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

const connectDB = (t, done) => {
  return new Promise(
    (resolve) => {
      mockgoose(mongoose).then(() => {
        mongoose.createConnection('mongodb://localhost:27017/mern-test', err => {
          if (err) t.fail('Unable to connect to test database');
          done(resolve);
        });
      });
    }
  );
};

const dropDB = (t) => {
  return new Promise(
    (resolve) => {
      mockgoose.reset(err => {
        if (err) t.fail('Unable to reset test database');
        resolve();
      });
    });
};


export {
  connectDB,
  dropDB,
};

