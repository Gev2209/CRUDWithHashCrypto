// registerRouter.post('/register', [readDB, checkEmail, checkPass], async (req, res) => {
//     try {
//     const { users } = res.locals
//     const body = req.body
//     const hashPass = await bycipt.hash(body.password, 10);
//     const user = {
//         id: crypto.randomUUID(),
//         name: body.name,
//         email: body.email,
//         password: body.password !== '' ? `${hashPass}` : '',
//         date: body.date,
//         gender: body.gender
//     }
//     users.push(user);

//     await fs.unlink(path.join(__dirname, '..', 'db', 'users.json'))
//     await fs.appendFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(users))
//     res.redirect('http://localhost:3001/auth/login')   
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })