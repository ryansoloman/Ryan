class Aptech {
    constructor () {
        console.log("This Is My Constructor");
    }

    student () {
        console.log("This Is My Student Method");
    }

    staff () {
        console.log("This Is My Staff Method");
    }
}

const daniyal = new Aptech();
const jagdesh = new Aptech();

daniyal.student();
jagdesh.staff();