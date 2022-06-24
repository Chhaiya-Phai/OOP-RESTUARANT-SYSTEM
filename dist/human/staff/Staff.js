"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Staff = exports.StaffPossition = void 0;
var Person_1 = require("../Person");
var StaffPossition;
(function (StaffPossition) {
    StaffPossition["CHASHIER"] = "Chashier";
    StaffPossition["WAITER"] = "Waiter";
    StaffPossition["CHEF"] = "Chef";
    StaffPossition["SECURITY"] = "Security";
})(StaffPossition = exports.StaffPossition || (exports.StaffPossition = {}));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(id, name, age, gender, possition) {
        var _this = _super.call(this, id, name, age) || this;
        _this.possition = possition;
        _this.salary = 0;
        _this.gender = gender;
        return _this;
    }
    Staff.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Staff.prototype.getSalary = function () {
        return this.salary;
    };
    return Staff;
}(Person_1.Person));
exports.Staff = Staff;
