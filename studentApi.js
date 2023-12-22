var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); 
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port = 2450;
customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
  courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
  classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
  students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];
  app.get("/Students", function(req, res) {
    res.send(students);  
  });
  app.get("/faculty", function(req, res) {
    res.send(faculties);  
  });
  app.post("/login", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var cust = customers.find((item) =>
       item.email === email && item.password === password 
    );
    console.log(cust);
    var custRec= {
    email: cust.email,
    role: cust.role,
    name: cust.name
    }
    res.send(custRec);
  });

  app.post("/register", function(req, res) {
    let maxid= customers.reduce((acc,curr)=>curr.custId>=acc?curr.custId
    :acc, 0);
    let idfordata=req.body.role=="student"?
    students.reduce((acc,curr)=>curr.id>=acc?curr.id
    :acc, 0):req.body.role=="faculty"? faculties.reduce((acc,curr)=>curr.id>=acc?curr.id
    :acc, 0):""
    var newidfordata=idfordata+1;
    
    const data={
      id:newidfordata,
      name: req.body.name,
      courses:[]
    }
    if(req.body.role=="student")
    { 
      students.unshift(data)

    }
    else if (req.body.role=="faculty"){
      faculties.unshift(data)
    }
    
    var newid=maxid+1;
    const cust = {
      custId:newid,
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role
    };
    customers.unshift(cust)
    var customerRes= {
        custId:newid,
        email: req.body.email,
        role: req.body.role,
        name: req.body.name,
        password: req.body.password
    }
    res.send(customerRes);
  });
  app.get("/allStudents", function(req,res){
    let courses= req.query.courses
    console.log("courses",courses)
    var list = [];
    if(courses){
      let courseArr=courses.split(",");
      //arr1=arr1.filter((st)=>courseArr.find((c1)=>c1=== st.course));
      list = students.filter(item=>courseArr.find((c1)=>item.courses.includes(c1)));
    }

    else{
      list =students
    }
    
      let resArr = pagination(list, parseInt(req.query.page));
    
      res.json({
        page: parseInt(req.query.page),
        items: resArr,
        totalItems: resArr.length,
        totalNum: list.length
    
    });
       // res.send(students);  
    });
    app.get("/allFaculty", function(req,res){
      let courses= req.query.courses
      console.log("courses",courses)
      var list = [];
      if(courses){
        let courseArr=courses.split(",");  
        list = faculties.filter(item=>courseArr.find((c1)=>item.courses.includes(c1)));
      }
      else{
        list =faculties
      }
      
      let resArr = pagination(list, parseInt(req.query.page) ,req.params.courses);
    
      res.json({
        page: parseInt(req.query.page),
        items: resArr,
        totalItems: resArr.length,
        totalNum: list.length
    
    });
        });
        
        app.get("/course", function(req,res){
            res.send(courses);  
          });
          app.get("/course/:courseId",function(req,res){
            let courseId=+req.params.courseId;
            let index=courses.find((st)=>st.courseId==courseId);
               res.send(index);
           
        });
        /*course 
         {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]

    },{ id: 5, name: "Daniel", courses: ["ANGULAR"] },
        */
          app.put("/course/:courseId",function(req,res){
           
           
            let courseId=+req.params.courseId;
            let body=req.body;
           
            let find=students.find(c=>req.body.students.includes(c.name))
            if(find){
              find.courses.push(req.body.name)
            }
            let find1=faculties.find(c=>req.body.faculty.includes(c.name))
            if(find1){
              find1.courses.push(req.body.name)
            }
            let index=courses.findIndex((st)=>st.courseId==courseId);

            if(index>=0){
                let updatedCourse={...body,courseId:courseId};
                courses[index]=updatedCourse;
               res.send(updatedCourse);
            }
            
        });
/* student
{
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
*/
        function pagination(obj, page) {
          const postCount = obj.length;
          const perPage = 3;
          //const pageCount = Math.ceil(postCount / perPage);
          var resArr = obj;
          resArr = resArr.slice(page * 3 -3, page *3);
          return resArr;
        }

       app.get("/getStudentDetails/:name", function(req, res) {
          var user = req.params.name;
          console.log("name", user);
          const student=students.find(function(item) {
            return item.name === user;
          });
          res.send(student);
         
        });
      
        app.post("/postStudentDetails", function(req, res) {
          const student=students.findIndex(function(item) {
            return item.id === req.body.id;
          });
        
          console.log("student1",student)
          let json={
            id:req.body.id,
           name:req.body.name,
           dob:req.body.dob,
            gender:req.body.gender,
           about:req.body.about,
          courses:req.body.courses
          };
            students.splice(student,1)
            students.unshift(json);
          res.send(json);
        });
      

        app.get("/getStudentCourse/:name", function(req, res) {
          var user = req.params.name;
          console.log("name", user);
          const student=courses.filter(function(item) {
            return item.students.includes(user);
          });
          res.send(student);
        });
        app.get("/classes", function(req, res) {
          res.send(classes);
        });
        app.get("/getFacultyCourse/:name", function(req, res) {
          var user = req.params.name;
          console.log("name", user);
          const student=courses.filter(function(item) {
            return item.faculty.includes(user);
          });
          res.send(student);
        });
        app.get("/getFacultyClass/:name", function(req, res) {
          var user = req.params.name;
          console.log("name", user);
          const student=classes.filter(function(item) {
            return item.facultyName==user;
          });
          res.send(student);
        });
        app.post("/postClass", function(req, res) {
          let maxid= classes.reduce((acc,curr)=>curr.classId>=acc?curr.classId
          :acc, 0);
          let newId=maxid+1;
          let json={
            classId:newId,
            course:req.body.course,
            time:req.body.time,
            endTime:req.body.endTime,
            topic:req.body.topic,
            facultyName:req.body.facultyName,
          };
            classes.push(json);
          res.send(json);
        });
        app.get("/getClass/:classId", function(req, res) {
          var classId = +req.params.classId;
          const student=classes.find(function(item) {
            return item.classId==classId;
          });
          res.send(student);
        });
        app.put("/postClass/:classId",function(req,res){
          let classId=+req.params.classId;
          let body=req.body;
        
          let index=classes.findIndex((st)=>st.classId==classId);
          if(index>=0){
              let updatedClass={...body,classId:classId};
              classes[index]=updatedClass;
             res.send(updatedClass);
            
          }
      });
 
  app.listen(port, () => console.log(`Node app listening on port ${port}!`));