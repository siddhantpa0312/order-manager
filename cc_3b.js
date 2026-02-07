let inventory = [
    {
        SKU: "001",
        name: "Water Bottle",
        price: 15.99,
        stock: 200,
    },
    {
        SKU: "002",
        name: "Textbook",
        price: 5.99,
        stock: 350,
    },
    {
        SKU: "003",
        name: "Calculator",
        price: 22.99,
        stock: 120,
    },
    {
        SKU: "004",
        name: "Lab Coat",
        price: 27.99,
        stock: 75,
    }
];

inventory.forEach(function(inventory_log){
    console.log(`SKU-${inventory_log.SKU}| ${inventory_log.name}| $${inventory_log.price}, Stock: ${inventory_log.stock}`)

} );

