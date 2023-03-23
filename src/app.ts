// Code goes here!
class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    //validation
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Zidane");
accounting.addEmployee("Max");

accounting.employees[2] = "Anna";

accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: "Rich", describe: accounting.describe };

// accountingCopy.describe();
