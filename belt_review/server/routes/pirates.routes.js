const pirateController = require('../controllers/pirate.controller')



module.exports = app => {
    app.get('/api/pirates', pirateController.findAll)
    app.get('/api/pirates/:id', pirateController.findOne)
    app.post('/api/pirates/new', pirateController.create)
    app.put('/api/pirates/:id', pirateController.update)
    app.delete('/api/pirates/:id', pirateController.delete)
}