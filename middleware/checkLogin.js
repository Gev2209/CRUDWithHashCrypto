const bcrypt = require('bcryptjs')

const checkLogin = async (req, res, next) => {
    const { email, password } = req.body
    const { users } = res.locals
    const foundUser = users.find(u => u.email === email)
    if(!foundUser) {
        return res.render('login', { title: 'Login', error: 'Wrong username or password' })
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
        // return res.status(422).json({ error: 'Wrong username or password' });
        return res.render('login', { title: 'Login', error: 'Wrong username or password' })
    }
    next()
}

module.exports = {checkLogin}