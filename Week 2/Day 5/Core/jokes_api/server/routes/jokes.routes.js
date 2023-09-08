const jokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get("/api/jokes", jokeController.findAllJokes),
    app.get("/api/jokes/:id", jokeController.findOneJoke),
    
    app.post("/api/jokes/new", jokeController.createJoke),
    
    app.put("/api/jokes/update/:id", jokeController.updateJoke),
    app.delete("/api/jokes/delete/:id", jokeController.deleteJoke)
}
