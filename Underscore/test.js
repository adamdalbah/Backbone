
var _ = require("underscore");
var myState = {
    name: "Washington",
    capital: "Olympia",
    population: 7062000,
    nickname: "The Evergreen State"
};

var businesses = [
    {name: "Coding Dojo", city: "Bellevue"},
    {name: "Facebook", city: "Mountain View"},
    {name: "Microsoft", city: "Redmond"},
    {name: "Expedia", city: "Bellevue"}
];

//1

// var values = _.map(myState, function(value,key){ return value; });
// var keys = _.map(myState, function(value,key){ return key; });
// var values = _.values(myState)
// var keys = _.keys(myState);
// console.log(values);
// console.log(keys);

//2
// var newObj = _.object(keys, values)
// console.log(newObj);

//3
// _.each(myState, function(value,key){
//     alert(key+":"+value);
// });

//4
// var arrayname = _.pluck(businesses,"name");
// console.log(arrayname);

//5
// var microsoftobj = _.find(businesses, function(obj){return obj.name == "Microsoft" });
// var microsoftobj = _.findWhere(businesses,{name: "Microsoft"});
// console.log(microsoftobj);

//6

// var bellevueArr = _.filter(businesses, function(obj){ return obj.city == "Bellevue"});
// console.log(bellevueArr);

// 7 

// var sortedArr = _.sortBy(businesses, 'city')
// console.log(sortedArr);

//8

// var newArr = _.map(businesses, function(obj){
//     obj.name = "Coding Dojo"
//     return obj});
// console.log(newArr);