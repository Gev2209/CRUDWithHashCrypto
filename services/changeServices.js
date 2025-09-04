const path = require('path')
const fs = require('fs').promises

class ChangeServices {
    async postEditUsers (users,body,params) {
        const user = users.find((e) => e.id === params.id)
            if (user) {
                Object.assign(user,body)
            }
        
            await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
            await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users, null, 2))
            return users
    }

    
    async postDeleteUsers (users,params) {
        users = users.filter((e) => e.id !== params.id);
            
        await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
        await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users, null, 2))
        return users
    }
}

module.exports = ChangeServices