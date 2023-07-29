
const db = require('../config/connection');
const User = require("../models/User");
const userData = require("./userData.json");


db.once('open', async () => {

await User.deleteMany({})
await User.insertMany(userData)




console.log('all done!');
process.exit(0);


})




