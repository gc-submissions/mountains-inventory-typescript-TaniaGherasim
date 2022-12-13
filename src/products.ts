interface Product{
    name:string,
    price:number
}

let products:Product[] = [{ name: "iPhone", price: 900 },
                            { name: "blender", price: 50 }];

function calcAverageProductPrice(products:Product[]): number {
    if(products.length > 0){
        let sum = 0;
        for(let i = 0;i < products.length; i++) {
            sum += products[i].price;
        }
        return sum/products.length;}
        else {
        return 0;
        }
                                
    }
                                
console.log(calcAverageProductPrice(products));
                                
export {calcAverageProductPrice, Product};
