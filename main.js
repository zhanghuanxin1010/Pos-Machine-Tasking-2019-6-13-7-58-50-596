function add(left, right) {
    return left + right;
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
            console.log(items);
            items.count++;
            myMap.set(code, items)
        }

    }

    let results = [];
    myMap.forEach(function (item)
     {
        results.push(item)
     }

    )
    return results;
}

     function fetchProducts(code,db)
     {
         for (let index = 0; index < db.length; index++) {
             if(db[index].id==code)
             return {
                price:db[index].price,
                name:db[index].name
                    }
             
         }
     }
module.exports = { add, countProducts,fetchProducts };

