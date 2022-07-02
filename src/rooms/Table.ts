import { Customer } from "../human/customer/Customer";

export class Table{
    private id: number;
    cutomer?: Customer[] = [];

    constructor(id: number){
        this.id = id;
    }

    setCustomer(newCustomer: Customer){
        this.cutomer?.push(newCustomer);
    }

    getCustomer(){
        return this.cutomer;
    }
}