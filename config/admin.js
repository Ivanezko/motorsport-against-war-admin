module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7175c72c58f66370ec23e41924055550'),
  },
});
