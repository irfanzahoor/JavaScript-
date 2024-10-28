class Employee {
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
    totalProjects(projects) {
        console.log(`Employee has complated total ${projects} projects`);
    }

    // this is overriding we this mwthod was already declare in super class ut we import here and make a change
    totalLeaves(leaves) {
        // console.log(`Employee has total ${leaves + 1} leaves one extra`); //this is over riding  is sy super class wala destroy hogya programmer mein uski koi change show nai hogi agr employee mein leaves wala change ho is chz sy bachny k liye super keyword uese krty hain

        // now we will see super keyword do same using super
        super.totalLeaves(6);
    }
}

let e = new Programmer();
e.login();
e.totalProjects(10);
e.totalLeaves(5);
