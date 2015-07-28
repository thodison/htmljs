// Generated by CoffeeScript 1.9.3
(function() {
  var func_column;

  func_column = __F('column');

  module.exports = function(req, res, next) {
    return func_column.getColumnUsers(res.locals.column.id, function(error, users) {
      res.locals.column_users = users;
      res.locals.column_canedit = false;
      if (users && res.locals.user) {
        users.forEach(function(u) {
          if (u.user.id === res.locals.user.id) {
            return res.locals.column_canedit = true;
          }
        });
      }
      return next();
    });
  };

}).call(this);