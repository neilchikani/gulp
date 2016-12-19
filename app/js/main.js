var john = { 
  firstName: "John" 
}

function func() { 
  console.log(this)
}

john.sayHi = func

john.sayHi()
