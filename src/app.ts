// Code goes here!
class Department {
  //   private readonly id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    //validation

    this.id = "d2";
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Zidane");
accounting.addEmployee("Max");

// accounting.employees[2] = "Anna";

accounting.name = "Accounting";

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "Rich", describe: accounting.describe };

// accountingCopy.describe();
