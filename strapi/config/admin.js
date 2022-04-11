module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '446adc0c5bec042b39db1deddbf382db'),
  },
});
