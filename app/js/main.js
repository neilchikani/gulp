jQuery(document).ready(function($) {
  var joke = document.getElementById('bad-joke')
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
    if(xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
    }
  };
  var person1 = {name: 'Marvin', age: 42, size: '2xM'};
  var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

  // console.log(Array.prototype.slice.call(data,0).length);
  var sayHello = function(){
    // console.log('Hello, ' + this.name);
  };

  var sayGoodbye = function(){
    // console.log('Goodbye, ' + this.name);
  };
  var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
  };

  var dispatch = function(person, method, args){
    method.apply(person, args);
  };
  dispatch(person1, sayHello, ['Hello']);
  dispatch(person2, sayHello, ['Slarty', 200, '1xM']);

  // xhttp.send(JSON.stringify(data));
});
// var arr = [2,3,4],
//   tempArr = [];
// var arrLength = arr.length;
// for(var i = 0; i < arrLength; i++ ){
//   calculation(i, arr[i]);
// }
//
// function calculation(curIndex, curValue){
//   for(var i = 0; i < arrLength; i++ ){
//     if(curValue === arr[i] && curIndex == i){
//
//     }else{
//      
//     }
//   }
// }