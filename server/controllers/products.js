function getProducts(req, res){
    const db = req.app.get('db')

    db.getProducts()
    .then(response => {
        res.status(200).json(response)
    })
}

function addProducts(req, res){
    const db = req.app.get('db')
    console.log(req.body)
    let {product_price, product_name, product_img} = req.body
    

    db.addProducts(+product_price, product_name, product_img).then(response => {
        res.status(200).json(response)
    }).catch(err => console.log(err))
}

function editProducts(req, res){
    console.log('hit')
    const db = req.app.get('db')
    let {product_price, product_name, product_img} = req.body
    let id = +req.params.product_id
    console.log(id)

    db.editProducts(+product_price, product_name, product_img, id).then(response => {
        res.status(200).json(response)
    })
}

function deleteProducts(req, res){
    const db = req.app.get('db')
    let id = +req.params.product_id

    db.deleteProducts(id)
    .then(response => {
        res.status(200).json(response)
    })
}

module.exports = {
    getProducts,
    addProducts,
    editProducts,
    deleteProducts
}