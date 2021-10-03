module.exports = Object.freeze({
    port: process.env.PORT,
    host: 'localhost',
    db_connect: process.env.MONGODB_KEY,
    JWT_Token: process.env.JWT_TOKEN
});