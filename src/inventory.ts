import { Product } from "./products";

interface InventoryItem{
    product:Product,
    quantity:number,
}

let inventory:InventoryItem[] = [{ product: {name:"motor", price: 10.00}, quantity: 10},
                                { product: {name: "sensor", price: 12.50}, quantity: 4},
                                { product: {name: "LED", price: 1.00}, quantity: 20}];

function calcInventoryValue(inventory:InventoryItem[]) : number {
    if(inventory.length > 0){
        let sum = 0;
        for(let i = 0; i < inventory.length; i++){
            sum += inventory[i].price;
        }
            return sum; }
    else {
        return 0;
    }
} 

console.log(calcInventoryValue(inventory));

export {calcInventoryValue, InventoryItem};
