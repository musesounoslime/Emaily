const passport = require('passport');

module.exports = app => {
  //发送进行Google验证的请求
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //得到Google验证许可，选择账号进行验证
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //test验证成功
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
