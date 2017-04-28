var app = angular.module("app01", []);

app.directive("abContains", function(){

return {
    require: 'ngModel', //need to add ngModel in element
    link: function(scope, element, attr, mCtrl) {
      function myValidation(value) { //can set the function name as per your requirement
        if (value.indexOf("ab") > -1) {
          mCtrl.$setValidity('CharacterOcc', true);
        } else {
          mCtrl.$setValidity('CharacterOcc', false);
        }
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  };

});


app.controller("controller1",function(){
	this.FirstName = "";
	this.EmailID = "";
	this.PhoneNo = "";
	this.CustomValidate = "";

	this.SubmitForm = function(){
		alert(this.FirstName + " " + this.EmailID + " " + this.PhoneNo + " " + this.CustomValidate);
	}
});