"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(id) {
        this.id = id;
        this.table = [];
    }
    Room.prototype.getNumberOfTable = function () {
        return this.table.length;
    };
    Room.prototype.getTable = function () {
        return this.table;
    };
    Room.prototype.addTable = function (newTable) {
        this.table.push(newTable);
    };
    Room.prototype.setRoomStatus = function (newStatus) {
        this.roomStatus = newStatus;
    };
    Room.prototype.getRoomStatus = function () {
        return this.roomStatus;
    };
    return Room;
}());
exports.Room = Room;
