function sym() {
	var tempArray = [];
	// debugger;
  for (var i = 0; i < arguments.length; i++) {
  	// console.log(arguments[i]);
  	for (var j = 0; j < arguments[i].length; j++) {
  		tempArray.push(arguments[i][j]);
  	};
  };
  console.log(tempArray);
  function compareDiff(){
		for (var k = tempArray.length-1; k >= 0 ; k--) {
			console.log(tempArray[k], tempArray[tempArray.length-1])
			// if (tempArray[k] != tempArray[tempArray.length-1]) {
			// }else{
			// 	console.log(tempArray[k]);
			// }
		};
  }
  compareDiff();
}
sym([1,2,4],[2,4,6]);
