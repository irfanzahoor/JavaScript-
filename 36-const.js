class Employee {

    constructor(name) {
        this.name = name;
        console.log(`${name} constructor is here `);
    }
    login() {
        console.log(`Employee has logged in`);
    }

    logout() {
        console.log(`Employee has logged out`);
    }

    totalLeaves(leaves) {
        console.log(`Employee has total ${leaves} leaves`);
    }
}

class Programmer extends Employee {

    /*
    constructor() {
        super();  //ye automatically ban jata ha agr super class mein def const bnaya ho tou 
    }
    */

    // now this will run above constructor with name from programmer

    // we can also make a constructor in sub class but we always have to run super
    constructor(name) {
        super(name);
        this.name = name;
        console.log(`${name} this is the constructor in sub class programmer`);
    }

    totalProjects(projects) {
        console.log(`Employee has complated total ${projects} projects`);
    }

    totalLeaves(leaves) {
        super.totalLeaves(6);
    }
}

let e = new Programmer("IrfanZahoor");
e.login();
e.totalProjects(10);
e.totalLeaves(5);
