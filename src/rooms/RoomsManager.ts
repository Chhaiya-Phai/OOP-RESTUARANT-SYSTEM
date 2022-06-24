import { Room } from "./Room"

export class RoomManager{
    room: Room[] = [];

    addRoom(newRoom: Room){
        this.room.push(newRoom);
    }

    getNumberOfRoom(){
        return this.room.length;
    }

    fingFreeRoom(){

    };
}
