/* 
* functionality for handling the user
* contains methods for creating, retrieving, updating and deleting users
*/

//Dependencies 


//Create user class 
var user = {}
//path to user folder 


user.init = function(rootPath){
    //set the path for the userfolder based on the rootPath parameter
    user.folderPath = rootPath + '/.data/users'; 
    console.log("UserFolder is set to: " + user.folderPath);
}

//Create new user 
//Required parameters : email, name, Address
//Optional parameters :  phone? 



//Export the user class
module.exports = user;

