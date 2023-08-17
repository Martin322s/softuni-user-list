const { PORT, /*DB_NAME, DB_CONNECTION*/ } = process.env;

module.exports = {
  port: PORT || 3005,
  dbConnection: 'mongodb://127.0.0.1:27017/user-list'
  // dbConnection: `${DB_CONNECTION}/${DB_NAME}`,
};