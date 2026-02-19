// Find first out-of-stock product
{
    let products = [
        { name: "Shoes", stock: 10 },
        { name: "Cap", stock: 0 },
        { name: "Watch", stock: 5 },
    ];
    let outOfStock = products.find(p => p.stock === 0);
    console.log("Out of stock:", outOfStock.name);
}