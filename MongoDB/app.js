//~ MongoDB ==> mongodb is open source, cross-platform, document based No_SQL database, which stores data in JSON-like objects(BSON)
//! open-source ==> the source is publicly available, it is free to use.
//! cross-platform ==> it can be used on multiple operating systems.
//! document-based ==> like js objects, in form of key-value pairs
//! No-SQL ==> in which no schema is defined by default and data is stored in graph, key-value pair, document, wide col.
//! JSON ==> it is like js objects but keys are enclosed in double quotes (undefined, functions and date)

//? in case of SQL >> database(name) >> tables (name) >> rows(data), cols(keyName)

//? in case of No_SQL dbs >> database (name) >> collections (name) >> documents
// document ==> like js objects, in form of key-value pairs
// collections ==> collections/grouping of documents
// database ==> group of collections

//~ to download and install >>
//! compass ==> it is a GUI (Graphical User Interface) through which we can interact with database visually, without having any knowledge of code.

//~ after installation of shell --> type this in cmd --> "mongosh -version"

//! shell ==> It is CLI (command line interface), which is built using JavaScript. through shell we can interact with database by entering commands.

//~ to enter the shell --> open cmd then type "mongosh"
//~ to exit the shell --> ctrl + C || .exit

//! mongodb server ==> to accept req, process it and send back a response

// mongodb://127.0.0.1:27017/
// mongodb://localhost:27017/

//~ to start/stop the mongodb server
// open cmd as admin >> "net start mongodb" : for starting the server
// open cmd as admin >> "net stop mongodb" : for stopping the server

//~ ========================== MONGO SHELL COMMANDS =====================

//! 1) to display all the databases -->
//? show dbs
//? show databases

//! 2) to create a new database or to switch to a db
//? --> use databaseName
// example: use school

//! 3) to display current database
//? --> db

//! 4) to create a collection
//? --> db.createCollection("collection-name")
// example: db.createCollection("list")

//! after every operation refresh the compass to see the changes.

//! 5) to display all the collections
//? --> show collections
//? --> show tables

//! 6) to delete/drop a collection
//? --> db.collectionName.drop()
// example: db.teachers.drop()

//! 7) to delete/drop a database
//? --> db.dropDatabase()

//! 8) to insert a single document
//? --> insertOne()
//? format: db.collectionName.insertOne({})
// example1: db.users.insertOne({ name: 'rahul', age: 34, skills: ['html'] });
// example2: db.users.insertOne({ "name": 'vijay', age: 32, "skills": ['html'] });
// response
/* 
{
  acknowledged: true,
  insertedId: ObjectId('68d4eaab53ccb83c89735189')
}
*/

//! BSON ==> binary JSON (JavaScript Object Notation)
//~ it is binary encoded representation of JSON.
//~ it is used to store data in mongodb
//~ operations are faster as compared to JSON
//~ it supports various datatypes, (ObjectId, Date, undefined, functions, etc..)
//~ it is not human readable

//! ObjectId --> ObjectId("68d4eb9e08dc240bb5547559")
//~ it is a 12 byte BSON type hexadecimal string.
//~ it is unique to each and every document.
//~ mongodb will automatically generate it if you are not passing _id
//~ it is treated as primary-key in mongodb
//~ this is immutable (cannot be changed/modified)

//~ "68d4eb9e08dc240bb5547559" this is divided into three parts
//? 1) first 4 bytes --> this represents timestamp (reference 1 JAN 1970)
//? 2) second 5 bytes --> PUI (process unique identifier) it is combination of machine id and process id
//? 3) last 3 bytes --> it starts with a random value and increments by one each time a document is inserted

//! 9) to insert a multiple documents
//? insertMany()
//? format --> db.collectionName.insertMany([ {}, {}, {}, ...... ])
// example:
db.users.insertMany([{ name: "abc" }, { name: "def" }]);

//! 10) to read/fetch a single document
//? method name ==> findOne()
//? format ==> db.collectionName.findOne({filter}, {projection})
// arguments are not mandatory
//& filter --> inside filter object, we need to pass conditions
//& projection --> to display/hide fields of matched documents. every-time we use projection _id will be set to 1.
// -->  keyName:1 : to display the field
// -->  keyName:0 : to hide the field

// example:
db.users.findOne(); // in case no conditions are passed, first document will be fetched
db.users.findOne({});
db.users.findOne({ name: "vijay" }); // if multiple documents are present with the same value, then the first matching doc will be returned
db.users.findOne({}, {});

db.employees.insertMany([
  {
    name: "varun",
    age: 34,
    sal: 56000,
    skills: ["java", "react", "c++"],
    deptNo: 20,
    manager: "dinesh",
    address: {
      city: "delhi",
      state: "delhi",
      pincode: 110001,
    },
    hobbies: ["music", "basketball", "cricket"],
    isActive: true,
    gender: "male",
  },
  {
    name: "chetna",
    age: 33,
    sal: 53000,
    skills: ["html", "css", "react", "angular"],
    deptNo: 10,
    manager: "avantika",
    address: {
      city: "gurugram",
      state: "up",
      pincode: 113443,
    },
    hobbies: ["music", "cooking", "cricket"],
    isActive: true,
    gender: "female",
  },
  {
    name: "ashwin",
    age: 31,
    sal: 40000,
    skills: ["python", "django", "sql"],
    deptNo: 20,
    manager: "avni",
    address: {
      city: "jaipur",
      ut: "rajasthan",
      pincode: 223667,
    },
    hobbies: ["singing", "cricket"],
    isActive: false,
    gender: "male",
  },
  {
    name: "sirisha",
    age: 31,
    sal: 59000,
    skills: ["node", "react", "mongodb"],
    deptNo: 40,
    manager: "navneet",
    address: {
      city: "banglore",
      ut: "karnataka",
      pincode: 562157,
    },
    hobbies: ["games", "football", "singing"],
    isActive: true,
    gender: "female",
  },
]);
db.emp.findOne({ gender: "female" });

db.emp.findOne({ name: "sirisha" }, { deptNo: 1, _id: 0 });

//! 11) to read/fetch multiple documents
//? method name --> find()
//? format ==> db.collectionName.find({filter}, {projection})
// arguments are not mandatory

db.emp.find(); // if no conditions are passed, then all the documents are fetched
db.emp.find({});
db.emp.find({}, {});

//~ display the name of all the employees whose gender is female
db.emp.find({ gender: "female" }, { name: 1, _id: 0 });

//! 12) to delete a single document
//? method name ==> deleteOne()
///? format ===> db.collectionName.deleteOne({filter})

db.teachers.deleteOne({}); // first document will get deleted
db.teachers.deleteOne(); // this will throw an error
db.teachers.deleteOne({ email: "v@gmail.com" });

//! 13) to delete multiple documents
//? method name ==> deleteMany()
//? format ==> db.collectionName.deleteMany({filter})

db.teachers.deleteMany({}); // all the documents will get deleted
db.teachers.deleteMany({ email: "v@gmail.com" });

//! 14) for updating we have two methods --> updateOne() and updateMany()
//? updateOne/Many( {filter}, {updation value}, {options} )
// filter --> inside filter object, we need to pass conditions
// updation value --> inside updation value object, we need to pass new values/ updated values
// options --> here we will use upsert.

//~ what we can update
//& a) we can update existing value
//& b) we can update existing key/field
//& c) we can add a new key-value pair
//& d) we can delete a key-value pair

//! in mongodb, every operator is prefixed by "$" symbol

//! Operators ==>
//~ query operators: used in filter object
//? ==> comparison operators (less than, not equals to, etc.)
//? ==> logical operators (logical AND, logical OR, etc..)
//? ==> array operators (size, all, elemMatch, etc..)
//? ==> element operators (exists, type, etc..)
//? ==> evaluation operators (regex, expr, etc..)
//~ update operators
//? ==> field update op (set, unset, etc..)
//? ==> arithmetic update op (max, min, inc, etc..)
//? ==> array update op (push, pull, etc..)
//~ aggregation operators
//? ==> pipeline stages op (match, group, etc..)
//? ==> accumulator op (max, min, etc..)
//? ==> arithmetic and date op (add, subtract, date, etc..)
//~ projection operators ($, $slice, etc..)
//~ geospatial operators ==> (GeoJSON format)

//! comparison op ==> used to compare two values
//? equals to ====================== $eq
//? not equals to ================== $ne
//? greater than =================== $gt
//? greater than or equals to ====== $gte
//? less than ====================== $lt
//? less than or equals to ========= $lte
//? in ============================= $in
//? not in ========================= $nin

//& for first 6 op syntax is same ($eq, $ne, $gt, $gte, $lte, $lt)
//? ==> filter part { keyName/fieldName: { $op: value } }

//~ get the details of all the users whose age is greater than 33
db.emp.find({ age: { $gt: 33 } });

//~ get me the names and deptNo of all the emp whose deptNo is not 20
db.emp.find({ deptNo: { $ne: 20 } }, { name: 1, deptNo: 1, _id: 0 });

//~ get the details of user whose name is "ashwin" as well as "sirisha"
db.emp.find({ name: "sirisha", name: "ashwin", name: "chetna" });
//? ==> in this case, only "chetna" will be considered

db.emp.find({ name: "ashwin" }); // implicit use of $eq
db.emp.find({ name: { $eq: "ashwin" } }); // explicit use of $eq

//!case-1) when multiple conditions are applied on single fieldname
// ==> then last condition will be considered (others will be ignored)
//~ get the details of user whose name is "ashwin" as well as "sirisha"
db.emp.find({ name: "sirisha", name: "ashwin", name: "chetna" });
//? ==> in this case, only "chetna" will be considered

//!case-2) when multiple conditions are applied on different fieldNames
// ==> it is working like implicit AND operator
//~ get the details of user whose name is "varun" and age is 31
db.emp.find({ name: "varun", age: 31 });

//! $in --> it will fetch the documents which are fulfilling any one of the give values

//& syntax for $nin and $in
//? ==> filter part { keyName/fieldName: { $in/$nin: ["v1", v2, .....] } }
// it accepts array of values

//~ get the details of user whose name is "ashwin" as well as "sirisha"
db.emp.find({ name: { $in: ["ashwin", "sirisha", "Varun"] } });

//~ get the emp details whose salary is greater than 50,000 and less than
//~ 60,000.
db.emp.find({ sal: { $lt: 60000 }, sal: { $gt: 50000 } });

//! logical op ==> used to combine multiple conditions
//? $and ==> it will fetch the documents which are fulfilling all the given conditions
//? $or ==> it will fetch the documents which are fulfilling any one of the given conditions
//? $nor ==> it will fetch the documents which are not fulfilling any one of the given conditions
//? $not ==> it will invert the condition

//& syntax for $and, $or, and $nor
//? ==> filter part { $op: [{condition1}, {condition2}, {}, ......] }

//~ get the emp details whose salary is greater than 50,000 and less than
//~ 60,000.
db.emp.find({
  $and: [
    { sal: { $gt: 50000 } }, // condition1
    { sal: { $lt: 60000 } }, // condition2
  ],
});

//~ get the details of user whose name is "ashwin" as well as "sirisha"
db.emp.find({ $or: [{ name: "ashwin" }, { name: "sirisha" }] });

//~ get the names, deptNo and salary of employees whose deptNo is either 20 or 10 and salary is greater than 50,000
//& unique conditions ==> 2
db.emp.find(
  {
    $and: [
      { sal: { $gt: 50000 } }, //? UC-1
      {
        $or: [
          { deptNo: 10 }, //? con-1
          { deptNo: 20 }, //? con-2
        ],
      }, //? UC_2
    ],
  },
  { name: 1, deptNo: 1, sal: 1, _id: 0 }
);

db.emp.find(
  {
    $and: [
      { sal: { $gt: 50000 } }, //? UC-1
      { deptNo: { $in: [10, 20] } }, //? UC_2
    ],
  },
  { name: 1, deptNo: 1, sal: 1, _id: 0 }
);

//~ display the name and deptNo of emp who are in 10 or 20 dept
db.emp.find(
  { $nor: [{ deptNo: 10 }, { name: "ashwin" }] },
  { name: 1, deptNo: 1, _id: 0 }
);

//& syntax for $not
//? ==> filter part { keyName: {$not: {expression}} }

//~ display the details of users who are not female
db.emp.find({ gender: { $ne: "female" } }); //? using comparison op

db.emp.find({ gender: { $not: { $eq: "female" } } }, { gender: 1 }); //? ==> final condition is not equals to female

db.emp.find({ gender: { $not: { $ne: "female" } } }, { gender: 1 }); //? ==> final condition is equals to female

db.emp.find({ sal: { $not: { $gte: 53000 } } }); //? final condition ==> lte 50000, in-case of $gte invert condition will be $lt

//~ get the details of emp who are living in UP
db.emp.find({ "address.state": "up" });
//! whenever we are using nested object parameters use double quotes to avoid error.

//~ fetch the details of user whose ID is "68d63c4c8c3d356373735189"
db.emp.find({ _id: new ObjectId("68d63c4c8c3d356373735189") });
//! if fetching is based on ObjectId, pass the Id inside and instance/object of ObjectId class
//& if not passed like this then mongodb will consider passed id as string datatype.

//~ display the hobbies of user which are having music as one of them.
db.emp.find({ hobbies: ["music", "basketball"] }, { hobbies: 1, _id: 0 });

//! <<<<<<<<<<<<<<<<<<<<< array op >>>>>>>>>>>>>>>>>>>>>>
//! syntax for $size
//? filter part --> { fieldName: {$size: INTEGER} }

//~ fetch the details of user who are having only two hobbies
db.emp.find({ hobbies: { $size: 2 } });

//! syntax for $all ==> will fetch the documents in which all the given values are present.
//? filter part --> { fieldName: {$all: [v1, v2, .....] } }

//~ display the hobbies of user which are having music and basketball
db.emp.find(
  { hobbies: { $all: ["basketball", "music"] } },
  { hobbies: 1, _id: 0 }
);

db.emp.insertMany([
  {
    _id: "68d63c4c8c3d356373735189",
    name: "Varun",
    age: 34,
    sal: 56000,
    skills: ["JavaScript", "Node.js", "MongoDB"],
    deptNo: 20,
    manager: "Dinesh",
    address: { city: "Delhi", state: "Delhi", pin: 110001 },
    hobbies: ["Cricket", "Reading", "Travel"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2021-03-15"),
  },
  {
    _id: "68d63c4c8c3d356373735190",
    name: "Anjali",
    age: 29,
    sal: 47000,
    skills: ["Java", "Spring", "SQL"],
    deptNo: 10,
    manager: "Rakesh",
    address: { city: "Mumbai", state: "Maharashtra", pin: 400001 },
    hobbies: ["Dancing", "Cooking", "Blogging"],
    isActive: true,
    gender: "female",
    hireDate: ISODate("2020-06-10"),
  },
  {
    _id: "68d63c4c8c3d356373735191",
    name: "Rahul",
    age: 41,
    sal: 72000,
    skills: ["Python", "Django", "Data Science"],
    deptNo: 30,
    manager: "Suresh",
    address: { city: "Pune", state: "Maharashtra", pin: 411001 },
    hobbies: ["Chess", "Movies", "Cricket"],
    isActive: false,
    gender: "male",
    hireDate: ISODate("2021-11-20"),
  },
  {
    _id: "68d63c4c8c3d356373735192",
    name: "Sneha",
    age: 26,
    sal: 38000,
    skills: ["HTML", "CSS", "React"],
    deptNo: 40,
    manager: "Neha",
    address: { city: "Mumbai", state: "Maharashtra", pin: 400001 },
    hobbies: ["Painting", "Music", "Cricket"],
    isActive: true,
    gender: "female",
    hireDate: ISODate("2021-03-25"),
  },
  {
    _id: "68d63c4c8c3d356373735193",
    name: "Amit",
    age: 37,
    sal: 64000,
    skills: ["C#", ".NET", "Azure"],
    deptNo: 50,
    manager: "Meena",
    address: { city: "Hyderabad", state: "Telangana", pin: 500001 },
    hobbies: ["Badminton", "Gaming", "Photography"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2021-07-12"),
  },
  {
    _id: "68d63c4c8c3d356373735194",
    name: "Priya",
    age: 32,
    sal: 51000,
    skills: ["Go", "Kubernetes", "Docker"],
    deptNo: 60,
    manager: "Sandeep",
    address: { city: "Chennai", state: "Tamil Nadu", pin: 600001 },
    hobbies: ["Cooking", "Yoga", "Running"],
    isActive: false,
    gender: "female",
    hireDate: ISODate("2020-04-18"),
  },
  {
    _id: "68d63c4c8c3d356373735195",
    name: "Karan",
    age: 28,
    sal: 45000,
    skills: ["PHP", "Laravel", "MySQL"],
    deptNo: 20,
    manager: "Dinesh",
    address: { city: "Delhi", state: "Delhi", pin: 110045 },
    hobbies: ["Travel", "Football", "Movies"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2021-07-15"),
  },
  {
    _id: "68d63c4c8c3d356373735196",
    name: "Megha",
    age: 30,
    sal: 55000,
    skills: ["Angular", "TypeScript", "Firebase"],
    deptNo: 40,
    manager: "Neha",
    address: { city: "Kolkata", state: "West Bengal", pin: 700001 },
    hobbies: ["Singing", "Dancing", "Art"],
    isActive: true,
    gender: "female",
    hireDate: ISODate("2021-12-30"),
  },
  {
    _id: "68d63c4c8c3d356373735197",
    name: "Rohit",
    age: 35,
    sal: 60000,
    skills: ["Rust", "Systems Programming", "Linux"],
    deptNo: 70,
    manager: "Alok",
    address: { city: "Bangalore", state: "Karnataka", pin: 560001 },
    hobbies: ["Cricket", "Trekking", "Reading"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2018-08-14"),
  },
  {
    _id: "68d63c4c8c3d356373735198",
    name: "Nisha",
    age: 27,
    sal: 42000,
    skills: ["Testing", "Automation", "Selenium"],
    deptNo: 80,
    manager: "Deepak",
    address: { city: "Lucknow", state: "UP", pin: 226001 },
    hobbies: ["Movies", "Cooking", "Travel"],
    isActive: false,
    gender: "female",
    hireDate: ISODate("2023-05-02"),
  },
  {
    _id: "68d63c4c8c3d356373735199",
    name: "Manish",
    age: 40,
    sal: 70000,
    skills: ["AI", "ML", "TensorFlow"],
    deptNo: 90,
    manager: "Rajesh",
    address: { city: "Bhopal", state: "MP", pin: 462001 },
    hobbies: ["Cycling", "Gaming", "Reading"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2019-01-19"),
  },
  {
    _id: "68d63c4c8c3d356373735200",
    name: "Pooja",
    age: 33,
    sal: 58000,
    skills: ["Cloud", "AWS", "DevOps"],
    deptNo: 60,
    manager: "Sandeep",
    address: { city: "Indore", state: "MP", pin: 452001 },
    hobbies: ["Cooking", "Swimming", "Travel"],
    isActive: true,
    gender: "female",
    hireDate: ISODate("2021-11-07"),
  },
  {
    _id: "68d63c4c8c3d356373735201",
    name: "Arjun",
    age: 24,
    sal: 35000,
    skills: ["HTML", "CSS", "JavaScript"],
    deptNo: 10,
    manager: "Rakesh",
    address: { city: "Nagpur", state: "Maharashtra", pin: 440001 },
    hobbies: ["Football", "Music", "Gaming"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2023-03-12"),
  },
  {
    _id: "68d63c4c8c3d356373735202",
    name: "Kavita",
    age: 31,
    sal: 49000,
    skills: ["UI/UX", "Figma", "Design"],
    deptNo: 40,
    manager: "Neha",
    address: { city: "Surat", state: "Gujarat", pin: 395001 },
    hobbies: ["Drawing", "Yoga", "Crafting"],
    isActive: true,
    gender: "female",
    hireDate: ISODate("2020-10-22"),
  },
  {
    _id: "68d63c4c8c3d356373735203",
    name: "Sanjay",
    age: 39,
    sal: 67000,
    skills: ["Scala", "Spark", "Big Data"],
    deptNo: 50,
    manager: "Meena",
    address: { city: "Patna", state: "Bihar", pin: 800001 },
    hobbies: ["Movies", "Cricket", "Cooking"],
    isActive: false,
    gender: "male",
    hireDate: ISODate("2018-02-27"),
  },
  {
    _id: "68d63c4c8c3d356373735204",
    name: "Neeraj",
    age: 36,
    sal: 61000,
    skills: ["Perl", "Shell Scripting", "Linux"],
    deptNo: 70,
    manager: "Alok",
    address: { city: "Bangalore", state: "Karnataka", pin: 560045 },
    hobbies: ["Reading", "Chess", "Blogging"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2019-09-05"),
  },
  {
    _id: "68d63c4c8c3d356373735205",
    name: "Divya",
    age: 25,
    sal: 36000,
    skills: ["Python", "Flask", "SQLAlchemy"],
    deptNo: 30,
    manager: "Suresh",
    address: { city: "Pune", state: "Maharashtra", pin: 411045 },
    hobbies: ["Travel", "Cooking", "Dancing"],
    isActive: true,
    gender: "female",
    hireDate: ISODate("2021-05-15"),
  },
  {
    _id: "68d63c4c8c3d356373735206",
    name: "Vikram",
    age: 42,
    sal: 75000,
    skills: ["C++", "Embedded Systems", "IoT"],
    deptNo: 90,
    manager: "Rajesh",
    address: { city: "Mysore", state: "Karnataka", pin: 570001 },
    hobbies: ["Robotics", "Gaming", "Travel"],
    isActive: true,
    gender: "male",
    hireDate: ISODate("2017-12-01"),
  },
  {
    _id: "68d63c4c8c3d356373735207",
    name: "Alka",
    age: 38,
    sal: 62000,
    skills: ["HR", "Recruitment", "Payroll"],
    deptNo: 100,
    manager: "Sunita",
    address: { city: "Noida", state: "UP", pin: 201301 },
    hobbies: ["Reading", "Cooking", "Singing"],
    isActive: false,
    gender: "female",
    hireDate: ISODate("2018-06-08"),
  },
]);

db.users.findOne();
db.users.findOne({});
db.users.findOne({}, {});

db.survey.insertMany([
  {
    _id: 1,
    results: [
      { product: "abc", score: 10 },
      { product: "xyz", score: 5 },
    ],
  },
  {
    _id: 2,
    results: [
      { product: "abc", score: 8 },
      { product: "xyz", score: 7 },
    ],
  },
  {
    _id: 3,
    results: [
      { product: "abc", score: 7 },
      { product: "xyz", score: 8 },
    ],
  },
  {
    _id: 4,
    results: [
      { product: "abc", score: 7 },
      { product: "def", score: 8 },
    ],
  },
  { _id: 5, results: { product: "xyz", score: 7 } },
]);

db.survey.find({ "results.product.score": { $gt: 8 } });

//! $elemMatch (element matching) ==> this is an array query operator, used to fetch the documents which are fulfilling the given condition in the array (used when we need to work on array of documents/objects) [{}, {}, ...]

//& syntax for $elemMatch ==>
//? filter part --> { fieldName: {$elemMatch: { key: value } } }

//~ fetch all the documents in which the score is greater than 7.
db.survey.find({ results: { $elemMatch: { score: { $gt: 7 } } } });

//! <<<<<<<<<<<<<<< Evaluation Operators >>>>>>>>>>>>>>>>>
//? regex ==> regular expression --> it is only used on string datatypes
//& it is used for pattern matching
//? syntax for regex -->
//? filter part { fieldName: { $regex: /pattern/ } }

//! get the details of the employees whose name is "varun"
db.emp.find({ name: { $regex: /varun/ } }, { name: 1, _id: 0 });
db.emp.find({ name: { $eq: varun } }, { name: 1, _id: 0 });

//! get the details of the employees whose name starts with letter "a"
db.emp.find({ name: { $regex: /^a/ } }, { name: 1, _id: 0 });
//& cap symbol ( shift + 6 ) --> denotes that compare the pattern from starting position

//! get the details of the employees whose name ends with letter "a"
db.emp.find({ name: { $regex: /a$/ } }, { name: 1, _id: 0 });
//& dollar symbol ( shift + 4 ) --> denotes that compare the pattern from last position

//! get the details of the employees whose name's second letter is "s"
// .a_____________
db.emp.find({ name: { $regex: /^.s/ } }, { name: 1, _id: 0 });
//& if we want to skip particular characters we use dot symbol(.). each dot represents the number of characters skipped.

//! get the details of the employees whose name's third last letter is "s"
db.emp.find({ name: { $regex: /s..$/ } }, { name: 1, _id: 0 });

//! display emp names along with manager name whose manager's name contains exactly four letters
db.emp.find(
  {
    manager: {
      $regex: /^....$/,
    },
  },
  {
    name: 1,
    _id: 0,
    manager: 1,
  }
);

//! get the details of user whose name starts with letter "c" and ends with "a".
db.emp.find({ name: { $regex: /^c.*a$/ } }, { name: 1, _id: 0 });
//& ".*" --> indicates skip multiple chars

//? expr ==> expression
//& it is used for comparison between document fields
//? syntax for regex -->
//? filter part { $expr: { $op: [a,b] } } in which a will appear first then b

//! get the details of user whose salary is greater than 55,000
// db.emp.find({ sal: { $gt: 55000 } });
db.emp.find({
  $expr: {
    $gt: ["$sal", 55000],
  },
});

//~ whenever we will pass document field as a value, enclose that in double quotes and prefix it with "$"
//! display the age, deptNo and name of the emp whose deptNo is greater than age
db.emp.find(
  {
    $expr: {
      $gt: ["$deptNo", "$age"],
    },
  },
  {
    age: 1,
    deptNo: 1,
    _id: 0,
    name: 2,
  }
);

//! ====================== element operators ========================>
//? $exists --> it is used to fetch the documents based on wether the particular field is present or not
//~ syntax --> { fieldName: {$exists: true/false} }
db.emp.find({ email: { $exists: true } });
//?  truthy and falsy values

//? $type --> it is used to fetch the documents based on the datatype of the field
//~ syntax --> { fieldName: {$type: "datatype"} }
db.emp.find({ sal: { $type: "string" } });
db.emp.find({ hobbies: { $type: "array" } });

//! ====================== update operators ==========================>
//& updateOne/Many( {filter}, {updation}, {options} )
//~ what we can update
//& a) we can update existing value
//& b) we can update existing key/field
//& c) we can add a new key-value pair
//& d) we can delete a key-value pair

//~ field update operators --> $set, $unset, $rename

//! 1) $set --> using this op, we can update existing value or we can add a new-key value pair
//? syntax (updation part)--> { $set: { key: value } } // --> if given key is present it's value will be updated otherwise a new-key value pair will be added

db.emp.updateOne({ email: "c@gmail.com" }, { $set: { isActive: false } });
db.emp.updateOne(
  { email: "c@gmail.com" },
  { $set: { "address.pincode": 100200 } }
);
db.emp.updateOne({ email: "c@gmail.com" }, { $set: { contactNo: 1456789 } });
db.emp.updateOne(
  { _id: ObjectId("68d63c4c8c3d35637373518c") },
  { $set: { sal: 61000 } }
);

db.emp.updateMany({ gender: "male" }, { $set: { haveInsurance: true } });

db.emp.updateOne(
  { _id: ObjectId("68d63c4c8c3d35637373518c") },
  { $set: { sal: 61000, email: "newEmail", newKey: "newValue" } }
);

db.emp.updateOne({ name: "chetna" }, { $set: { contactNo: null } });

//! 2) $unset --> using this op, we can delete key-value pair.
//? syntax (updation part) ==> { $unset: { keyName: truthy value }  } ==> "" : this is exception

db.emp.updateOne({ name: "chetna" }, { $unset: { contactNo: "some words" } });

db.emp.updateOne(
  { name: "sirisha" },
  { $unset: { email: "some words", newKey: "" } }
);

//! 3) $rename --> using this op, we can rename the the existing key
//? syntax (updation part)--> { $rename: { "old-key-name": "new-key-name" } }
db.emp.updateMany({}, { $rename: { name: "userName" } });
//& in updateMany() if filter condition is empty, all documents will be targeted
//& in updateOne() if filter condition is empty, only first document will be targeted

db.emp.updateMany({}, { $rename: { _id: "myId" } });
db.emp.updateOne({ userName: "chetna" }, { $set: { _id: "something" } });

//! arithmetic update op --> $max, $min, $inc, $mul
//? syntax --> { $op: { keyName: value } }
//! score --> 200: HS

db.emp.updateOne({ userName: "chetna" }, { $max: { deptNo: 40 } });
//? in case of $max op --> value passed should be strictly greater than the stored value
//? in case of $min op --> value passed should be strictly lesser than the stored value
//? if the field is not present it will be added with the given value

db.scores.insertMany([
  {
    name: "abc",
    highScore: 300,
    lowScore: 120,
  },
  {
    name: "def",
    highScore: 120,
    lowScore: 24,
  },
]);

db.scores.updateOne({ name: "abc" }, { $max: { highScore: 240 } });
db.scores.updateOne({ name: "abc" }, { $min: { lowScore: 130 } });

db.scores.updateOne({ name: "abc" }, { $min: { scores: 130 } });

//! $inc
db.scores.updateOne({ name: "abc" }, { $inc: { myScore: -5 } });
//? if the field is not present it will be added with the given value
//? we cannot pass null as a value

//~! the default value of upsert is false
db.emp.updateOne({ userName: "vijay" }, { $set: { contact: 4567 } });
db.emp.updateOne(
  { userName: "vijay", job: "manager" }, //? filter
  { $set: { contact: 123456789 } }, //? updation
  { upsert: true } //? options --> upsert //? update + insert
);
//! scenario-1 --> filter condition is getting full filled
//? a) upsert is false --> document is getting updated
//? b) upsert is true --> document is getting updated

//! scenario-2 --> filter condition is not getting full filled
//? a) upsert is false --> nothing will happen
//? b) upsert is true --> a new document is getting inserted with the given values

//! >>>>>>>>>>>>>>>>>>>>>>>>>>>> array update operators <<<<<<<<<<<<<<<<<<<<
//? 1) $push ==> it is used to add an element at the last of the array
//? 2) $pullAll ==> it is used to remove all the elements from the array
//? 3) $addToSet ==> it is used to add only unique elements in an array
//? 4) $pop ==> it is used to remove elements from first or last
//? 5) $push + $each ==> it is used to insert single/multiple elements at  time and $each should only be used with $push and also you can specify the position at which you want to insert

//! syntax for $push -->
//&  {  $push : { keyName: 'value' }  } (for inserting single element)
//&  {  $push : { keyName: ['value1', 'value2'.....] }  } (for inserting multiple elements)
db.emp.updateOne({ userName: "chetna" }, { $push: { hobbies: "gaming" } });
db.emp.updateOne(
  { userName: "chetna" },
  { $push: { hobbies: ["basketball", "reading"] } }
); //! here nested array is getting inserted

//! syntax for $push with $each -->
//? updation part:
//? { $push: { keyName: { $each: [v1, v2, v3......] } } }

db.emp.updateOne(
  { userName: "ashwin" },
  { $push: { hobbies: { $each: ["volleyball"], $position: 2 } } }
);

//! syntax for $pullAll -->
//? updation part:
//? { $pullAll: { keyName:  [v1, v2, v3.....] } }

db.emp.updateOne(
  { userName: "chetna" },
  { $pullAll: { hobbies: ["cricket", "gaming"] } }
);

//! syntax for $pop -->
//? updation part:
//? { $pop: { keyName:  1/-1 } } (+1 for removing from the last and -1 for removing from the start)
db.emp.updateOne({ userName: "chetna" }, { $pop: { hobbies: 1 } });

//! syntax for $addToSet -->
//&  {  $addToSet : { keyName: 'value' }  } (for inserting single element)
db.emp.updateOne({ userName: "chetna" }, { $addToSet: { hobbies: "cooking" } });

db.users.insertMany([
  {
    name: "john",
    exp: [
      { companyName: "google", duration: 0.4 },
      {
        companyName: "microsoft",
        duration: 1.5,
      },
    ],
  },
  {
    name: "jane",
    exp: [
      { companyName: "tcs", duration: 0.8 },
      {
        companyName: "zoho",
        duration: 1,
      },
    ],
  },
  {
    name: "doe",
    exp: [
      { companyName: "alphabet", duration: 1.7 },
      {
        companyName: "meta",
        duration: 2,
      },
    ],
  },
]);

//& syntax for $elemMatch ==>
//? filter part --> { fieldName: {$elemMatch: { key: value } } }
db.users.find({ exp: { $elemMatch: { duration: { $lt: 1 } } } });
db.users.updateMany({ exp: { $elemMatch: { duration: { $lt: 1 } } } }, {});

//! 1) update only the single-matched occurrence
//! 2) update all the occurrences
//! 3) update all the occurrences which have matched
