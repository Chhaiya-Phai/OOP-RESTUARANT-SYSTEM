import { Customer } from "./human/customer/Customer";
import { Gender } from "./human/Person";
import { Chef } from "./human/staff/Chef";
import { StaffPossition } from "./human/staff/Staff";
import { Room } from "./rooms/Room";
import { RoomManager } from "./rooms/RoomsManager";
import { RoomStatus } from "./rooms/RoomStatus";
import { Table } from "./rooms/Table";

// staff //
let chef1 = new Chef(1, "Mr.Chef1", 25, Gender.MALE, StaffPossition.CHEF);
chef1.setSalary(1000);

// create room //
let vip = new Room(1);

// add table //
let table1 = new Table(1);
let table2 = new Table(2);
vip.addTable(table1);
vip.addTable(table2);
// customer //
let ttr = new Customer(1, "TTR ZIN", 18, Gender.MALE);
let PSN18 = new Customer(2, "PSN 18", 20, Gender.ORTHER);
table1.setCustomer(ttr);

// main //
console.log(table1.getCustomer());

