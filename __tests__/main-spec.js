const {add,countProducts,fetchProducts}= require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

it ('should count codes', () => {
   //given
   const codes=['0001', '0003', '0005', '0003'];
   //when
   var countCodes=countProducts(codes);
   //then

    expect(countCodes[0].count).toBe(1);
});

it ('should fetch  product', () => {
    //given
    const db=[
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4}
    ]
    const code='0001';
    //when
    var product=fetchProducts(code,db);
    //then
 
     expect(product.price).toBe(3);
 });