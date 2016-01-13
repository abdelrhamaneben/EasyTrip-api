module.exports = function(req, res, ok) {
  var is_auth = req.isAuthenticated();
  if (is_auth) return next();

  return res.redirect("/login");
}
