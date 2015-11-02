
module.exports = function(req, res, next) {
  
  if(req.method == "GET") 
  		return next();
  return res.forbidden('You are not permitted to perform this action.');
};
