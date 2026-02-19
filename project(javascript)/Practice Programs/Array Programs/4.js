// Filter products below $50
{
    let products = [
        { name: "Shoes", price: 60 },
        { name: "Cap", price: 20 },
        { name: "Watch", price: 45 },
    ];
    let cheap = products.filter(p => p.price < 50);
    console.log(cheap);
}