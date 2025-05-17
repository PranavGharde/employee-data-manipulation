/** @format */

let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  employees.map(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}
PrintDeveloperbyMap();

function PrintDeveloperbyForEach() {
  employees.forEach(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}
PrintDeveloperbyForEach();

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}
addData();

function removeAdmin() {
  employees = employees.filter(emp => emp.profession !== "admin");
  console.log(employees);
}
removeAdmin();

function concatenateArray() {
  const newEmployees = [
    { id: 5, name: "mike", age: "22", profession: "manager" },
    { id: 6, name: "alice", age: "21", profession: "developer" },
    { id: 7, name: "bob", age: "23", profession: "tester" }
  ];
  const combinedArray = employees.concat(newEmployees);
  console.log(combinedArray);
}
concatenateArray();
