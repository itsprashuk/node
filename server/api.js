const obj={
    name:"prashuk",
    age:21,
    gender:"male"
}
console.log(obj.age);

// JSON.stringify  IS USED FOR TO CONVERT OBJECT INTO JSON
const json=JSON.stringify(obj);
console.log(json);


// JSON.PARSE IS USED TO CONVERT JSON DATA INTO OBJECT
const obj1=JSON.parse(json);
console.log(obj1)