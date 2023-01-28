import mongoose from 'mongoose'

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('***База данных MongoDB подключена***'));