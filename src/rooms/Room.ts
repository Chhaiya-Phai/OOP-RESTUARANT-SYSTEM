import { RoomStatus } from "./RoomStatus";
import { Table } from "./Table";

export class Room{
    table: Table[] = [];
    roomStatus: RoomStatus; // status of each room depand of customer //
    constructor(private id:number) {}

    getNumberOfTable(){
        return this.table.length;
    }

    getTable(){
        return this.table;
    }

    addTable(newTable: Table){
        this.table.push(newTable);
    }

    setRoomStatus(newStatus: RoomStatus){
        this.roomStatus = newStatus;
    }

    getRoomStatus(){
        return this.roomStatus;
    }
}

