

const controllers = {
    register:(req,res)=>{
        res.render('usersRegisterForm')
    },
    login:(req,res)=>{
        res.render('usersLoginForm')
    },
    profile:(req,res)=>{
        res.render('usersProfile')
    }
}

module.exports = controllers