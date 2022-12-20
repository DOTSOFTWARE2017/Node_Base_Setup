var dbcon = require("../config/config");

var allUsers = function () {
  this.Id = Id;
  this.Name = Name;
  this.Email = Email;
  this.Gender = Gender;
  this.Status = Status;
};

allUsers.getUsers = (result) => {
  try{dbcon.query("select * from Client", (err, res) => {


  if (res) {
      console.log("year fetched successfully");
      console.log(res);
      result(res);
      return null, res;
    } if(err) {
      console.log("error fetching data year");
      return null, err;
    }
  });
} catch(e){
    console.log(e);
}
};

module.exports = allUsers;
