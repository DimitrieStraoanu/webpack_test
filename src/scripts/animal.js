let external = 1;
export class Animal {
    constructor() {
        this.vitality = 100;
    }
    move() {
        console.log('moving...')
        this.vitality--;
        console.log(external);
    }
}