const fs = require('fs').promises;
const path = require('path');

const checkPass = async (req, res, next) => {
    try {
        const users = await fs.readFile(path.join(__dirname, '..', 'db', 'users.json'), 'utf-8');
        res.locals.users = JSON.parse(users);
        const {password} = req.body;
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{5,}$/.test(password)) {
            res.status(404).json({message: 'Password must be at least 5 characters long, contain at least one uppercase letter, one lowercase letter, and one number'});
        } else {
            return next();
        }
    } catch (error) {
        res.status(404).json({error: 'Internal server error'});
    }
}

module.exports.checkPass = checkPass