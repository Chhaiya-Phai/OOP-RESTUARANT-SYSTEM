"use strict";
exports.__esModule = true;
exports.Person = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["ORTHER"] = "ORTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.setPhone = function (phoneNumber) {
        this.phone = phoneNumber;
    };
    return Person;
}());
exports.Person = Person;
