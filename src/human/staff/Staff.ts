import { Gender, Person } from "../Person";

export enum StaffPossition{
    CHASHIER = "Chashier",
    WAITER = "Waiter",
    CHEF = "Chef",
    SECURITY = "Security",
}

export class Staff extends Person{
    protected salary: number = 0;
    protected gender: Gender;

    constructor( id: number,name: string,age: number,gender: Gender,protected possition: StaffPossition) {
        super(id, name, age);
        this.gender = gender;
    }

    setSalary(salary: number){
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}