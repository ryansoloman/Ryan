class Ryan {
    constructor() {
        console.log("Parent Constructor")
    }
    child(name) {
        this.name = name
        console.log(`This Method Is For Child Of Ryan Who Is ${this.name}`)

    }
}

class Daniyal extends Ryan {
    constructor() {
        super();
        console.log("Child Constructor")
    }
}

const childNmae = new Daniyal
childNmae.child("Daniyal");