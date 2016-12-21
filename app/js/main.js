jQuery(document).ready(function($) {
	var data = {
		data : "test"
	};
	var xhttp = new XMLHttpRequest();
  var params = "lorem=ipsum&name=binny";
  var data = {
    name: "Neil",
    address: [1,2,3]
  };
	xhttp.open('POST','http://localhost:3000', true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {
    console.log(xhttp.readyState);
    if(xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
    }
  };

	xhttp.send(JSON.stringify(data));
});