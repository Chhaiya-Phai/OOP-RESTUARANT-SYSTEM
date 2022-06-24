import { Gender, Person } from "../Person";

export class Customer extends Person{
    gender: Gender;
    constructor(id: number, name: string,age: number, gender: Gender){
        super(id, name, age);
        this.gender = gender;
    }
}
