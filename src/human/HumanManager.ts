import { Customer } from "./customer/Customer";
import { Staff } from "./staff/Staff";

export class HumanManager{
    private customer: Customer[] = [];
    private staff: Staff[] = [];

    addCustomer(newCustomer: Customer){
        this.customer.push(newCustomer);
    }

    getCustomer(){
        return this.customer;
    }

    addStaff(newStaff: Staff){
        this.staff.push(newStaff);
    }
    
    getStaff(){
        return this.staff;
    }


}