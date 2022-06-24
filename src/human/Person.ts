export enum Gender{
    MALE = "MALE",
    FEMALE = "FEMALE",
    ORTHER = "ORTHER",
}

export abstract class Person{
    protected phone?: number
    constructor(
        protected id: number,
        protected name: string,
        protected age: number,
    ) {}

    setPhone(phoneNumber: number){
        this.phone =phoneNumber;
    }
}
