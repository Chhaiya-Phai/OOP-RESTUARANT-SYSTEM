import { Food } from "./foods/food";
import { FoodManager } from "./foods/foodManager";
import { Customer } from "./human/customer/Customer";
import { HumanManager } from "./human/HumanManager";
import { Gender } from "./human/Person";
import { Chashier } from "./human/staff/Chashier";
import { Chef } from "./human/staff/Chef";
import { Security } from "./human/staff/Security";
import { StaffPossition } from "./human/staff/Staff";
import { Waiter } from "./human/staff/Waiter";
import { Room } from "./rooms/Room";
import { RoomManager } from "./rooms/RoomsManager";
import { RoomStatus } from "./rooms/RoomStatus";
import { Table } from "./rooms/Table";

// staff //
let hr = new HumanManager("hr");

let chef1 = new Chef(1, "Mr.Chef1", 25, Gender.MALE, StaffPossition.CHEF);
let waiter = new Waiter(2, "jj", 18, Gender.FEMALE, StaffPossition.WAITER);
let security = new Security(3, "Udom", 34, Gender.ORTHER, StaffPossition.SECURITY);
let chashier = new Chashier(4, "Ko Ko", 16, Gender.FEMALE,StaffPossition.CHASHIER);

hr.addStaff(chef1);
hr.addStaff(waiter);
hr.addStaff(security);
hr.addStaff(chashier);

chef1.setSalary(1000);
waiter.setSalary(500);
security.setSalary(1500);
chashier.setSalary(1100);

// create room //
let vip = new Room(1, RoomStatus.VIP);

// add table //
let table1 = new Table(1);
let table2 = new Table(2);
vip.addTable(table1);
vip.addTable(table2);

// customer //
let romdul = new Customer(1, "Romdul", 18, Gender.MALE);
let dungKeov = new Customer(2, "Dung Keov", 20, Gender.FEMALE);
table1.setCustomer(romdul);
table1.setCustomer(dungKeov);
hr.addCustomer(romdul);
hr.addCustomer(dungKeov);

// food 
let korKor = new Food("Somlor KorKor", 15000);
let nomBanhChok = new Food("Nom Banh Chok", 5000);
let prahokKtis = new Food("Prahok Ktis", 10000);
let foodManger = new FoodManager();
foodManger.addFood(korKor);
foodManger.addFood(nomBanhChok);
foodManger.addFood(prahokKtis);

// main //
console.log(hr.getStaff());
console.log(vip.getTable());
console.log(table1.getCustomer());
console.log(foodManger);





