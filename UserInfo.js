//let UserInfo = {
     //   name : "Dorine",
      //  age : 18,
      //  school : "Semicolon africa",
     //   complexsion : "Dark",
      //  hobby : "Singing",
        
       // }
        
       // console.log(UserInfo)
       
       const prompt = require("prompt-sync")();
       
       const name = prompt("What is your name? : ")
       const age  = prompt("How old are you? : ")
       
       console.log(name)
       
       console.log(age)
       
       if(age > 18){
       console.log("You are an adult")
       }
       else{
       console.log("You are a baby")
       }
       
       console.log(typeof (name));
       console.log(typeof (age));
       console.log(typeof (isloggedin));
       console.log(typeof (isempty));
       console.log(typeof (pie));
       
       
       const number = [2,4,5,6,7];
       const fruit = ["Apple", "mango", "bread", "carrot", "water"]
       
       console.log(number[0]);
       console.log(fruit[3]);
       
       
       for(let number = 2; number <= 10; number++)
       console.log(number); 
