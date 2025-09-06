class  AuthController {
     async getregister (req, res) {
        res.render('register', { title: 'Express' })
     }

     async getLogin (req, res) {
        res.render('login', { title: 'Express' })
     }

     async getLogged (req, res) {
        res.render('logged', { title: 'Express' });
     }

     async postLogged (req, res) {
        res.render('logged', { title: 'Express' });
     }

    async getUsers (req, res) {
        const {users} = res.locals
        res.render('usersTable', {title : "Helloo", users, count : 1});
    }

     async postRegister (req, res) {
        try {
            let { users } = res.locals;
            const body = req.body;
            users = req.app.locals.services.auth.postRegister(users, body);
            res.redirect('http://localhost:3001');
        } catch (error) {
            res.status(500).send(error.message);
        }
     }
}

module.exports = AuthController