const express = require('express')
const app = express()

const users = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
]

const products = [
    { id: "10", name: "Phone", category: "electronics", price: 500 },
    { id: "11", name: "Shoes", category: "clothing", price: 80 },
    { id: "12", name: "Laptop", category: "electronics", price: 1200 },
]


app.get('/profile/:id', (req, res) => {
    const id = req.params.id
    const lang = req.query.lang ?? "ru"
    const details = req.query.details === "true"

    const user = users.find(u => u.id === id );

    if(!user){
        return res.status(404).json({
            error: "user not found"
        });
    }

    const profile = {
        id: user.id,
        name: user.name,
        language: lang,
        details: details ? "full profile info" : "short profile info"
    };
    res.status(200).json(profile);
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    const currency = req.query.currency ?? "USD"
    const discount = req.query.discount === "true"
    
    const product = products.find(p =>p.id === id);

    if(!product){
        return res.status(404).json({
            error: "product not found"
        });
    }
    
    const result = {
        id: product.id,
        name: product.name,
        category: product.category,
        price: discount ? product.price * 0.8 : product.price, // 20% скидка пример
        currency: currency,
        discount: discount
    }

    res.status(200).json(result);
})

app.get('/products', (req, res) => {
    const category = req.query.category
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : null

    // Фильтруем массив
    const filteredProducts = products.filter(p => {
        let ok = true

        if (category) ok = ok && p.category === category
        if (maxPrice !== null) ok = ok && p.price <= maxPrice

        return ok
    })

    res.status(200).json(filteredProducts)
})

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
