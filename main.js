
function printTickets(codes,db){
   var ReciptItems=genertReciptItems(codes,db);
   //var TotalPrice=countTotalPrice(codes);
   var printReceipt=printRecipt(ReciptItems);
   return printReceipt;
}

function countProducts(codes) {
    var myMap = new Map();
    for (let i = 0; i < codes.length; i++) {
        var code = codes[i];
        if (!myMap.has(codes[i])) {
            var item = {
                code: code, count: 1
            };
            myMap.set(code, item);
            // myMap.get(codes[i])+1;
        }
        else {
            var items = myMap.get(code);
           
            items.count++;
            myMap.set(code, items)
        }

    }

    let results = [];
    myMap.forEach(function (item) {
        results.push(item)
    }

    )
    return results;
}

function fetchProducts(code, db) {
    for (let index = 0; index < db.length; index++) {
        if (db[index].id == code)
            return {
                price: db[index].price,
                name: db[index].name
            }

    }
}

function genertReciptItems(ceshi, db) {
    var countcodes = countProducts(ceshi);
    console.log(countcodes);
    var ReciptItems = [];
    countcodes.forEach(function (item) {
        var product = fetchProducts(item.code, db);
        ReciptItems.push(
            {
                name: product.name,
                price:product.price,
                count:item.count
            }
        );
    }
    )

    return ReciptItems;
}
function countTotalPrice(codes)
{   var totalPrice=0;
    var resulttotal=[];
   for (let index = 0; index < codes.length; index++) {
    var counts=codes[index].count;
    var price=codes[index].price;
     totalPrice=counts*price+totalPrice;
   }    
   return totalPrice;
}

function printRecipt(codes)
{
  var printRecip="";
  var print="";
//   printRecip="Recipts"+"\n"+

//   console.log("Recipts");
//   console.log("-------------------");

for (let index = 0; index < codes.length; index++) {
    printRecip=codes[index].name+"\t"+codes[index].price+"\t"+codes[index].count+"\n"+printRecip;
    
};

   var totalPrice=countTotalPrice(codes);
   print="Recipts"+"\n"+"------------------------"+"\n"+printRecip+"-------------------------"+"\n"+"TotalPrice"+" "+totalPrice
  return  print;

}


module.exports = { printTickets };

