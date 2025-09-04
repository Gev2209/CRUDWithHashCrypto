const path = require('path');

class ChangeControllers {
    async getEditUsers (req, res) {
        const {users} = res.locals
        const user = users.find((e) => e.id === req.params.id)
        res.render(path.join(__dirname, '..', 'views', 'edit.ejs'), {title : "Hello Gevorg", users : user});
    }

    async postEditUsers (req, res) {
        try {
            let {users} = res.locals
            const body = req.body
            users = req.app.locals.services.changes.postEditUsers(users, body, req.params);
            res.redirect('/users')   
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async postDeleteUsers (req, res) {
        try {
            let {users} = res.locals
            users = req.app.locals.services.changes.postDeleteUsers(users,req.params);   
            res.redirect('/users')
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}


module.exports = ChangeControllers