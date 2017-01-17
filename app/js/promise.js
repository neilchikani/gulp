$(document).ready(function () {
  // var req = $.get('https://jsonplaceholder.typicode.com/posts');
  //
  // req.done(function( response ) {
  //   console.log('req completed', JSON.stringify(response));
  // });

  $.ajax({
    url: "http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-2.json",
    // crossDomain: true,
    // data: {
    //   name: "Nilay"
    // },
    dataType: "jsonp"

  })

});
function jsonCallback(json){
  console.log(json);
}

