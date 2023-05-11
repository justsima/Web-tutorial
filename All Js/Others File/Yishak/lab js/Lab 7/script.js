let obj={
    "people" : [
      {
         "firstName": "Joe",
         "lastName": "Jackson",
         "gender": "male",
         "age": 28,
         "number": "7349282382"
      },
      {
         "firstName": "James",
         "lastName": "Smith",
         "gender": "male",
         "age": 32,
         "number": "5678568567"
      },
      {
         "firstName": "Emily",
         "lastName": "Jones",
         "gender": "female",
         "age": 24,
         "number": "456754675"
      },
      {
        "firstName": "abebe",
        "lastName": "girma",
        "gender": "male",
        "age": 24,
        "number": "34353535"
     },
     {
        "firstName": "saba",
        "lastName": "Jones",
        "gender": "female",
        "age": 29,
        "number": "345899"
     },
     {
        "firstName": "girma",
        "lastName": "alemu",
        "gender": "male",
        "age": 29,
        "number": "34646547547"
     }
    ]
  }

let people=obj.people;
//first 
  
  let pName=prompt("Enter name");
  let info=people.filter((person)=>person.firstName===pName)
  console.log(info);

//second

let sum=0;
let avg;
people.forEach((obj)=>sum+=obj.age);
avg=sum/people.length;
console.log(avg)

//3

male=people.filter((obj)=>obj.gender=='male').map((obj)=>obj.age).reduce((a,b)=>a+b);
countMale=people.filter((obj)=>obj.gender=='male').length;
console.log("Average Male:"+male/countMale);
female=people.filter((obj)=>obj.gender==='female').map((obj)=>obj);
console.log(male)

let value=prompt("Enter Value");
let result=people.filter(
    function (obj){
       return obj.age.toString().includes(value) || obj.firstName.includes(value) || obj.gender===value ||obj.lastName.includes(value)||obj.number.toString().includes(value);
    }
)
console.table(result);

let newpp=people.sort((a,b)=>b.age-a.age);
console.table(newpp);


