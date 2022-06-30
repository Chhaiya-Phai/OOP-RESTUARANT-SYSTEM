import { Food } from "../foods/food";
import { FoodManager } from "../foods/foodManager";
import { Table } from "../rooms/Table";

export class Order{
    table: Table[] = [];
    foodMenu: FoodManager;
    constructor(protected name: string, protected quatity: number) { }

    setFoodManager(foodList:FoodManager){
        this.foodMenu = foodList;
    }
    checkOrder(){
  
        for (let name of this.foodMenu.foods){
            if (name.getName() == this.name){
                return name.getName();
            }
        }
    }
}