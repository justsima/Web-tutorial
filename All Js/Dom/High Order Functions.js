var companies=[
    {name:"Company One", category:"Finance", start:1981, end:2003},
    {name:"Company Two", category:"Retail", start:1992, end:2008},
    {name:"Company Three", category:"Auto", start:1999, end:2007},
    {name:"Company Four", category:"Retail", start:1989, end:2010},
    {name:"Company Five", category:"Technology", start:2009, end:2014},
    {name:"Company Six", category:"Finance", start:1987, end:2010},
    {name:"Company Seven", category:"Auto", start:1986, end:1996},
    {name:"Company Eight", category:"Technology", start:2011, end:2016},
    {name:"Company Nine", category:"Retail", start:1981, end:1989}
];
const ages =[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


//for each

/*without forEach*/
// for(let i=0;i<companies.length;i++){
//     console.log(companies[i])
// }

/*with forEach*/
// companies.forEach(function(Company){
//     console.log(Company)
// })

//filter

/*without filter*/
// let canDrink=[];
// for(let i=0;i<ages.length;i++){
// if(ages[i]>=21){
//     canDrink.push(ages[i])
// }
// } 
// console.log(canDrink)

/*with filter*/
// const canDrink= ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// })
// console.log(canDrink)

/*with filter and arrow function*/
// const canDrink= ages.filter(age=> age>=21)
// console.log(canDrink)

/*Filter Retail companies*/
// const retailCompanies= companies.filter(function(company){
//     if(company.category==='Retail'){
//         return true;
//     }
// })
// console.log(retailCompanies)

/*Filter retail companies with Arrow Function*/
// const retailCompanies= companies.filter(company=>company.category==='Retail')
// console.log(retailCompanies)

/*Filter 80's companies*/
// const eightiesCompanies = companies.filter(function(company){
//     if(company.start>=1980 && company.start<1990){
//         return true;
//     }
// })
// console.log(eightiesCompanies)

/*Filter 80's companies with arrow function*/
// const eightiesCompanies = companies.filter(company=> company.start>=1980 && company.start<1990)
// console.log(eightiesCompanies)

/*Filter companies that lasted 10 years or more*/
// const lastedTenYears = companies.filter(company=> company.end-company.start>=10)
// console.log(lastedTenYears)

//map
/*Create Array of Company names */
// const companyNames = companies.map(company=> company.name)
// console.log(companyNames)

/*Create Array of Company names and start and end years*/
const testMap =companies.map(company=> `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap)

/*Square root of ages*/
// const agesSquare = ages.map(age=> Math.sqrt(age))
// console.log(agesSquare)

/*Multiply each age by 2*/
// const agesTimesTwo = ages.map(age=> age*2)
// console.log(agesTimesTwo)

/*Multiply each age by 2 and Square root*/
// const agesTimesTwo = ages.map(age=> age*2).map(age=> Math.sqrt(age))
// console.log(agesTimesTwo)

//sort
/*Sort companies by start year*/
// const sortedCompanies =companies.sort((c1,c2)=> c1.start>c2.start?1:-1)
// console.log(sortedCompanies)    

/*Sort ages*/
// const sortedAge =ages.sort((a,b)=> a-b)
// console.log(sortedAge)

//reduce
/*Add all ages*/
let allAge =0
for(let i=0;i<ages.length;i++){
    allAge+=ages[i]
}
console.log(allAge)

/*Add all ages with reduce*/
const allAgeReduce = ages.reduce((total,age)=> total+age,0)
console.log(allAgeReduce)

/*Get total years for all companies*/
const totalYears = companies.reduce((total,company)=> total+(company.end-company.start),0)
console.log(totalYears)

//combine methods
/*Combine Methods*/
const combined = ages.map(a=> a*2).map(a=> a+1).filter(a=> a>40).sort((a,b)=> a-b).reduce((a,b)=> a+b,0)
console.log(combined)

const todos =[
    {
        id:1,
        text:"Take out trash",
        isCompleted:true

    },
    {
        id:2,
        text:"Meeting with boss",
        isCompleted:true
    },
    {
        id:3,
        text:"Dentist appt",
        isCompleted:false
    }
]

for(let i=0;i<todos.length;i++){
    console.log(todos[i].text)
}

console.log(window)

