export class Food{
    constructor(protected name: string, protected price: number) { }
    
    getName(){
        return this.name;
    }
}