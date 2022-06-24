"use strict";
exports.__esModule = true;
var Customer_1 = require("./human/customer/Customer");
var Person_1 = require("./human/Person");
var Chef_1 = require("./human/staff/Chef");
var Staff_1 = require("./human/staff/Staff");
var Room_1 = require("./rooms/Room");
var Table_1 = require("./rooms/Table");
// staff //
var chef1 = new Chef_1.Chef(1, "Mr.Chef1", 25, Person_1.Gender.MALE, Staff_1.StaffPossition.CHEF);
chef1.setSalary(1000);
// create room //
var vip = new Room_1.Room(1);
// add table //
var table1 = new Table_1.Table(1);
var table2 = new Table_1.Table(2);
vip.addTable(table1);
vip.addTable(table2);
// customer //
var ttr = new Customer_1.Customer(1, "TTR ZIN", 18, Person_1.Gender.MALE);
var PSN18 = new Customer_1.Customer(2, "PSN 18", 20, Person_1.Gender.ORTHER);
table1.setCustomer(ttr);
// main //
console.log(table1.getCustomer());
console.log(chef1.getSalary());
