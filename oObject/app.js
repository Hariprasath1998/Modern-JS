class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    greeting() {
        return `Hello there ${this.fName} ${this.lName}`;
    }
}

const hari = new Person('Hariprasath', 'Ravichandran');
// console.log(hari.greeting());

class Customer extends Person {
    constructor(fName, lName, phone, membership) {
        super(fName, lName);
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipcost() {
        return 500;
    }
}

const john = new Customer('John', 'Thompson', '555-555-5555', 'Standard');
console.log(john.greeting());
console.log(Customer.getMembershipcost());