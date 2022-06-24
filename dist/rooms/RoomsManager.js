"use strict";
exports.__esModule = true;
exports.RoomManager = void 0;
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.room = [];
    }
    RoomManager.prototype.addRoom = function (newRoom) {
        this.room.push(newRoom);
    };
    RoomManager.prototype.getNumberOfRoom = function () {
        return this.room.length;
    };
    RoomManager.prototype.fingFreeRoom = function () {
    };
    ;
    return RoomManager;
}());
exports.RoomManager = RoomManager;
