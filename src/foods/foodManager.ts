import { Food } from "./food";

export class FoodManager{
    foods: Food[] = [];

    addFood(newFood:Food){
        this.foods.push(newFood);
    }

    getFood(){
        
        for(let food of this.foods){
            console.log(food.getName());
        }
        
    }
}