"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(id) {
        this.id = id;
    }
    Table.prototype.setCustomer = function (newCustomer) {
        this.cutomer = newCustomer;
    };
    Table.prototype.getCustomer = function () {
        return this.cutomer;
    };
    return Table;
}());
exports.Table = Table;
