"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customer = [];
        this.staff = [];
    }
    HumanManager.prototype.addCustomer = function (newCustomer) {
        this.customer.push(newCustomer);
    };
    HumanManager.prototype.getCustomer = function () {
        return this.customer;
    };
    HumanManager.prototype.addStaff = function (newStaff) {
        this.staff.push(newStaff);
    };
    HumanManager.prototype.getStaff = function () {
        return this.staff;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
