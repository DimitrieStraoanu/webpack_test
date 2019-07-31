import { Animal } from "./animal";

export class Dog extends Animal{
    constructor(name){
        super();
        this.name = name;
    }
    speak(){
        console.log('Woof!');
    }
}