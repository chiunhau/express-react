Parse.initialize("frqDKhkEV7Tv7k69KeI6r03yDsZYZkiDDj73Qam4", "YpDYoIkedRqAQMBYWjpAAyLeQs7loIuh2AQyjJzV");

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId      : '1660612197495817',
    xfbml      : true,
    version    : 'v2.4'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


document.getElementById('fb-signin').addEventListener('click', function() {
	Parse.FacebookUtils.logIn(null, {
	  success: function(user) {
	    if (!user.existed()) {
	      alert("User signed up and logged in through Facebook!");
	    } else {
	      alert("User logged in through Facebook!");
	    }
	    window.location = "/me";
	  },
	  error: function(user, error) {
	    alert("User cancelled the Facebook login or did not fully authorize.");
	  }
	});
})