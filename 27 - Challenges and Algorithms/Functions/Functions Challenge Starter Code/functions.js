//Array of people, there is no need to change this
const PERSONDATA = [{
    name:"Miguel",
    rank:4,
    age:19,
    score: 66
},{
    name:"Mona",
    rank:7,
    age:22,
    score: 37
},{
    name:"Sam",
    rank:2,
    age:23,
    score:80
},{
    name:"Tara",
    rank:10,
    age:26,
    score:11
},{
    name:"Giovanni",
    rank:8,
    age:26,
    score:28
},{
    name:"Mia",
    rank:5,
    age:28,
    score:54
},{
    name:"Isabella",
    rank:1,
    age:31,
    score:100
},{
    name:"Alex",
    rank:3,
    age:34,
    score:75
},{
    name:"Olivia",
    rank:6,
    age:36,
    score:42
},{
    name:"Dor",
    rank:9,
    age:41,
    score:19
}]

search("Giovanni",PERSONDATA)  // Should log that Giovanni was found at position #5
search("Erik",PERSONDATA)   // Should log that Erik was not found.

console.log(filter(PERSONDATA, 50)) // Should display an array of everyone with a score greater than 50
/* Ex:
[ 
    { name: 'Miguel', rank: 4, age: 19, score: 66 },
    { name: 'Sam', rank: 2, age: 23, score: 80 } 
    { name: 'Mia', rank: 5, age: 28, score: 54 },
    { name: 'Isabella', rank: 1, age: 31, score: 100 },
    { name: 'Alex', rank: 3, age: 34, score: 75 },
]
*/

/*
    Write your functions below.
*/
