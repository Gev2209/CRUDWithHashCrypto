const checkEmail =  (req, res, next) => {
    const { users } = res.locals
    const { email } = req.body
    const emailExists = users.find(u => u.email === email)
    if(emailExists) {
        return res.status(400).json({error: "Email has already registered"})
    }
    next()
}
module.exports = {checkEmail}