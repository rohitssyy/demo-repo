const user ={"fname": "Rohit", "age" : 22  }
console.log(user["fname"])
console.log("User is "+typeof(user))


const user1 = JSON.stringify(user)
console.log(user1)
console.log("User1 is "+typeof(user1))

const user2 = JSON.parse(user1);
console.log(user2)
console.log(user2["fname"])
console.log("User2 is "+typeof(user2))
 