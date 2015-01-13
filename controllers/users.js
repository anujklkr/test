var users = require('../models/users');   //connecting users.js from controllers to Users.js from models.


exports.getUsers = function() {     //exports your function to other files.
		return users.users;
}

exports.getUser = function(id) {
      for(var i=0; i<users.length;i++)
	  {
	      if(users[i].id == id)
		      return users.users[i];			  
	  }
}

compareAuth = function(username,password){

	  for(var i=0; i<users.length;i++)
	  {
	      if(users[i].username == username && users[i].password == password)
		  {   
		      return users.users[i];	
			//return true;
		  }
	  }
	  return false;
}

exports.postLogin = function(request,response){
	  var result = compareAuth(request.body.email,request.body.password);
	  if(result)
	  {  
			response.send("verification successful. Hiiiiiiii "+result.name);
	  }
	  else
	  { response.send("verification failed");
	  }
}