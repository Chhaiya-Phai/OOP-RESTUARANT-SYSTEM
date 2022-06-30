import { Food } from "./foods/food";
import { FoodManager } from "./foods/foodManager";
import { Customer } from "./human/customer/Customer";
import { Gender } from "./human/Person";
import { Chef } from "./human/staff/Chef";
import { StaffPossition } from "./human/staff/Staff";
import { Order } from "./order/order";
import { Room } from "./rooms/Room";
import { RoomManager } from "./rooms/RoomsManager";
import { RoomStatus } from "./rooms/RoomStatus";
import { Table } from "./rooms/Table";

// staff //
let chef1 = new Chef(1, "Mr.Chef1", 25, Gender.MALE, StaffPossition.CHEF);
chef1.setSalary(1000);


// create room //
let vip = new Room(1, RoomStatus.VIP);

// add table //
let table1 = new Table(1);
let table2 = new Table(2);
vip.addTable(table1);
vip.addTable(table2);
// customer //
let ttr = new Customer(1, "Romdul", 18, Gender.MALE);
let PSN18 = new Customer(2, "Dung Keov", 20, Gender.FEMALE);
table1.setCustomer(ttr);
table2.setCustomer(PSN18);

// food 
let korKor = new Food("Somlor KorKor", 15000);
let nomBanhChok = new Food("Nom Banh Chok", 5000);
let prahokKtis = new Food("Prahok Ktis", 10000);
let foodManger = new FoodManager();
foodManger.addFood(korKor);
foodManger.addFood(nomBanhChok);
foodManger.addFood(prahokKtis);
// order 
let order1 = new Order("Prahok ktis", 2);
let order2 = new Order("Nom Banh Chok", 1);
order1.setFoodManager(foodManger);

// main //
console.log(order1.checkOrder());
console.log(foodManger);




