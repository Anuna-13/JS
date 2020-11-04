
//1.// 
var user = {
    name: "giorgi",
    age: 25,
    gender: "male"
  };
if (user.age < 18){
  console.log ("არასრულწლოვანი")
}
else if (user.age >= 18 && user.gender == "male"){
  console.log("სრულწლოვანი ბიჭი")
};

//2.//
let cars = ["audi", "bmw", "lexus", "volkswagen", "ferrary", "porsche"];

for(i=1; i<5; i++){ 
    console.log(cars[i]);
};

//3.//
let name = ["ანუნა", "მიხო", "ტესსა", "ელენა", "გიოგი"]
for(i=0; i<name.length; i++){ if (name[i].length>5) {console.log(name[i])   
}};

//4.//
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(i=0; i<number.length; i++)
{if(number[i]%2==0)
  {console.log(number[i] )}}
for(i=0; i<number.length; i++)
{if(number[i]%2!=0)
  {console.log(number[i] )}};

//5.//
let user1 = ["name" , "age", 25, 50, "surname", [100, 500] ];
console.log(user1[5][1]);

//6.//
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
console.log(person.eyecolor);

//7.//
let list = [ 5,"სახელი" , 'გვარი' , 152, 'სტუდენტების სია' ]
for(i=0; i<5; i++){ 
    console.log(list[i]);
}