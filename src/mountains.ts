//types-boolean number string symbol bitint undefined

//objects are a way of grouping data together 
//interface
interface Mountain{
    name:string,
    height:number,
    hasBeenClimbed?:boolean //optional parameter
}

let newMountain:Mountain = {
    name: "Kilimanjaro",
    height: 10000
}

let mountains:Mountain[] = [{ name: "Kilimanjaro", height: 19341 }, 
                            { name: "Everest", height: 29029 }, 
                            { name: "Denali", height: 20310 }];


//function signature
function findNameOfTallestMountain(mountains:Mountain[]) : string {
   let result:string = "";
   let newHeight = 0;

   for(let item of mountains){
    if(item.height > newHeight) {
        newHeight = item.height;
        result = item.name;
    }
   }
   return result;
}
 console.log(findNameOfTallestMountain(mountains));

//  let thisVariableCanBeAnything:any;

//  thisVariableCanBeAnything = "Tania";
//  thisVariableCanBeAnything = 0;
//  thisVariableCanBeAnything = true;

//  let stringOrNumber:string|number;

//  stringOrNumber = "Tania";
//  stringOrNumber = 0;

 export {findNameOfTallestMountain, Mountain};


