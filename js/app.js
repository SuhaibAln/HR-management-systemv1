'use strict'

let devEl =document.getElementById("dev");

const allEmps = [];
function Employee(empID, fullName, department, level, image, salary) {
  this.empID = empID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = salary;

  allEmps.push(this);
}
const Department = ['Administration', 'Finance', 'Marketing','Development'];
const Level = ['Junior', 'Mid-Senior', 'Senior'];


const Ghazi = new Employee(1000,"Ghazi samer", "Administration","Senior","/assets/Ghazi.jpg");
const Lana = new Employee(1001, "Lana Ali", "Finance","Senior","/assets/Lana.jpg");
const tamara = new Employee(1002, "Tamara Ayoub", "Marketing","Senior", "/assets/Tamara.jpg");
const safi = new Employee(1003, "Safi walid ", "Administration","Mid-Senior","/assets/Safi.jpg");
const omar = new Employee(1004, "Omar Zaid", "Development","Senior","/assets/Omar.jpg");
const rana = new Employee(1005, "Rana Saleh", "Development","Junior","/assets/Rana.jpg");
const hadi = new Employee(1006, "Hadi Ahmad", "Finance","Mid-Senior","/assets/Hadi.jpg");

Employee.prototype.totalNetSalary=function(){
  if (this.level=="Senior") {

      return (Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500)* 0.75;
  
  }
  else if (this.level=="Mid-Senior") {
    return (Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000)* 0.75;

  }else if (this.level=="Junior"); {
    return (Math.floor(Math.random() * (1000 - 500 + 1) ) + 500)* 0.75;
  }
}

Ghazi.salary=Ghazi.totalNetSalary();
Lana.salary=Lana.totalNetSalary();
tamara.salary=tamara.totalNetSalary();
safi.salary=safi.totalNetSalary();
omar.salary=omar.totalNetSalary();
rana.salary=rana.totalNetSalary();
hadi.salary=hadi.totalNetSalary();


Employee.prototype.render=function () {


  

  let empID=document.createElement("p")
  empID.textContent=`EmployeeId : ${this.empID}`;
  devEl.appendChild(empID);


  let fullName=document.createElement("p");
  fullName.textContent=`Full Name : ${this.fullName}`;
  devEl.appendChild(fullName);

  let department=document.createElement("p");
  department.textContent=` Department : ${this.department}`;
  devEl.appendChild(department);

  let level=document.createElement("p");
  level.textContent=`level : ${this.level}`;
  devEl.appendChild(level);

  let salary=document.createElement("p");
  salary.textContent=`Salary : ${this.salary}`;
  devEl.appendChild(salary);

  let image=document.createElement("img");
  image.src=this.image;
  devEl.appendChild(image);
  image.style.width="160px";

}

function renderAll()
{
  for (let i = 0; i < info.length; i++) {
    allEmps[i].render();
  }
}
Ghazi.render();
Lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();
