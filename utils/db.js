const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017`, { dbName: 'NAS' })
.then(() => console.log(`MongoDB Connected!`))
.catch(err => console.log(err));

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    .then(() => console.log(`\nMongoDB connection closed!`))
    .catch(err => console.log(err));
    process.exit(0);
});