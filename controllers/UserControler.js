const UserControler = {
    index: (req, res) =>{
        res.render('user/index');
    },

    createForm: (req, res) => {
        res.render('user.form');
    },
    create: (req, res)=>{

    },
}

module.exports = UserControler;