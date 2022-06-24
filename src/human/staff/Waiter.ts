import { Gender } from "../Person";
import { Staff, StaffPossition } from "./Staff";

export class Waiter extends Staff{
    constructor(id: number,name: string,age: number,gender: Gender,protected possition: StaffPossition){
        super(id, name, age,gender,possition);
    }
}