const bcrypt = require('bcryptjs')
const fs = require('fs').promises
const path = require('path')


class AuthServices {
    async postRegister(users, body) {
        const hashPass = await bcrypt.hash(body.password, 10);
        const user = {
            id: crypto.randomUUID(),
            name: body.name,
            email: body.email,
            password: body.password !== '' ? hashPass : '',
            date: body.date,
            gender: body.gender
        }
        users.push(user);

        
        await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
        await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'),JSON.stringify(users, null, 2));
        return users;
    }
}

module.exports = AuthServices