const productController = require('../controllers/product.controller')

module.exports = app => {
    
    app.post('/api/product' , productController.createProduct)
    app.get('/api/product' , productController.findAllProduct)
    
}