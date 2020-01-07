var User = require("../models/user");


exports.createUser = function(userData, callback) {
    console.log("userdataa",userData);
    console.log(callback);
  
    //2.constructing the query
    var userDao = new User(userData);
    //3.executing the query
    userDao.save(function(err, data) {
      // 4.get the result
      if (!err) {
        console.log(data);
      } else {
        console.log(err);
      }
      callback(err, data); //5.send the result
    });
  };

  exports.getUsers = function(callback) {
    User.find({},function(err,data){
      if(!err){
        console.log(data);
      }else{
        console.log(err);
      }
      callback(err,data);
    });
   };