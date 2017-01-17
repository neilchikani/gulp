var demoTree = [
  {
    "name":"A",
    "value":"A",
    "child":[
      {
        "name": "A.1",
        "value": "A.1",
        "child":[
          {
            "name": "A.1.1",
            "value": "A.1.1"
          },
          {
            "name": "A.1.2",
            "value": "A.1.2"
          }
        ]
      },
      {
        "name": "A.2",
        "value": "A.2"
      }

    ]
  },

  {
    "name":"C",
    "value":"C"
  }
];
var mainData = '',
  finalObject = {};



function buildTemplate(data){
  console.log('<ul>'+data+'</ul>');
  return '<ul>'+data+'</ul>';
}


function buildChildTemplate(data){
  var childData = '';
  data.forEach(function (item) {
    if(typeof item === "object") {
      childData += '<li data-value="'+item.value+'">'+item.name+'</li>';
    }
  });
  return childData;

}

function dropDownTemplate(data,childPresent){
  if(childPresent){
    // debugger;
    mainData += '<ul><li data-value="'+data.value+'">'+data.name+'<ul>'+buildChildTemplate(data.child)+'</ul></li></ul>';
  }else{
    mainData += '<ul><li data-value="'+data.value+'">'+data.name+'</li></ul>';
  }
}

function objectArray(data){
  if (data.hasOwnProperty('child')) {
    dropDownTemplate(data,true);
    // arrayLoop(data.child);
  }else{
    dropDownTemplate(data,false);
  }
}

function arrayLoop(child){
  child.forEach(function (item) {
    if(typeof item === "object") {
      objectArray(item);
    }
  });
  $('.dropdown').html(mainData);
  console.log(mainData);
}

$(document).ready(function (event) {
  // console.log(demoTree);
  if(demoTree instanceof Array){
    arrayLoop(demoTree);
  }
});